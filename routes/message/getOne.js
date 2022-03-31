const msgCol = require('../../models/MessageCollection');

async function getMessagesHandler(req, res) {
    let options = {};

    const msgColVals = await msgCol.findOne({
        messageId: req.query.id,
    }).populate({
        path: 'singleMessage',
    });

    let messages = msgColVals.messages;

    res.status(200).json({ messages });

}

module.exports = getMessagesHandler;
