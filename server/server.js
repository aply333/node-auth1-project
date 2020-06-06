const express = require('express');
const session = require('express-session');

const sessionConfig = {
    name: "userSession",
    secret: "super dooper secret",
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized: false
};

const register = require('./routes/register');
const login = require('./routes/login');
const users = require('./routes/users');
const server = express();

server.use(express.json());
server.use(session(sessionConfig));

server.use("/api/register", logger, register);
server.use("/api/login", logger, login);
server.use("/api/users",userCheck, logger, users);

server.get("/", logger, (req, res) => {
    res.send("<h1>Server Root</h2>")
});

function logger (req, res, next){
    console.log(`[${Date.now()}] ${req.method} at ${req.url}`);
    next();
}

function userCheck ( req, res, next ){
    if(req.session && req.session.user){
        next();
    }else{
        res.status(403).json({ message: "Lack Credentials"})
    }
}
module.exports = server;