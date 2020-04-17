const jwt = require('jsonwebtoken');

function auth (req, res, next) {
    const token = req.header('auth-token')
    if (!token) return res.status(401).send('Access Denied');

    const TOKEN_SECRET = "asdfasdf"; //temporary crutch
    
    try{
        const verified = jwt.verify(token, TOKEN_SECRET);
        req.user = verified;
    }catch (e) {
        res.status(400).send('Invalid Token')
    }
}