const express = require('express');
const router = express.Router();

//import middlewares

//import route handlers
const getMessages = require('./getOne');
const getManyMessages = require('./getMany');
const sendMessage = require('./send');

//routes
router.get('/getOne', getMessages);
router.get('/getMany', getMessages);
router.post('/send', sendMessage);
module.exports = router;
