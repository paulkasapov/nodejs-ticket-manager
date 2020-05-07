const User = require('../models/user.model');
const {registerValidation, loginValidation} = require('../validation');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.user_create = async (req, res) => {

    const existedUser = await User.findOne({userName: req.body.userName});
    if (existedUser) return res.status(400).send('Such login already exists');

    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({
        userName: req.body.userName,
        password: hash,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        avatar: req.body.avatar,
        specialities: req.body.specialities
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser)
    } catch (e) {
        return res.sendStatus(400).send(e)
    }
};

exports.user_login = async (req, res) => {

    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({userName: req.body.userName});
    if (!user) return res.status(400).send('Login or password is wrong');

    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Login or password is wrong');

    const userData = {
        userId: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        specialities: user.specialities
    }

    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET, { expiresIn: '1h' });
    res.header('auth-token', token).send({token, userData})

};

exports.user_token_login = async (req, res) => {
    const user = await User.findOne({_id: req.user._id});
    const userData = {
        userId: user._id,
        userName: user.userName,
        firstName: user.firstName,
        lastName: user.lastName,
        avatar: user.avatar,
        specialities: user.specialities
    }
    res.status(200).send(userData)
};

exports.user_check_unique_login = async (req, res) => {
    const user = await User.findOne({userName: req.body.userName});
    console.log(user)
    if (user) return res.status(400).send('Such login is already exists');
    res.status(200).send("Login is unique")
};
