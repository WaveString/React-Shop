const express = require('express');
const router = express.Router();
const path = require('path');
const mime = require('mime');
const crypto = require('crypto');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const passportJWT = require("passport-jwt");
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

// Models
const products = require('../models/products');
const users = require('../models/users');

const jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeader();
jwtOptions.secretOrKey = 'secret';

module.exports.strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
    console.log('payload received', jwt_payload);
    const user = users.filter(item => item.id === jwt_payload.id)[0];
    if (user) {
        next(null, user);
    } else {
        next(null, false);
    }
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './build/images/');
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname);

        ext = ext.length > 1 ? ext : `.${mime.extension(file.mimetype)}`;

        crypto.pseudoRandomBytes(16, (err, raw) => {
            cb(null, (err ? undefined : raw.toString('hex') ) + ext);
        });
    }
});

const upload = multer({ storage });

router.post('/images', upload.single('image'), (req, res) => {
    res.end(JSON.stringify({
        message: 'File uploaded successfully',
        imageUrl: `images/${req.file.filename}`
    }));
});

router.get('/products', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
});

router.get('/auth', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(products));
});

router.post('/login', function(req, res) {
    const login = req.body.login;
    const password = req.body.password;
    const user = users.filter(item => item.login === login)[0];

    if (!user) {
        res.status(401).json({ message: 'Неверный логин или пароль' });
    }

    if (user.password === password) {
        const payload = { id: user.id, login: user.login };
        const token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({ token, user });
    } else {
        res.status(401).json({ message: 'Неверный логин или пароль' });
    }
});

module.exports.router = router;
