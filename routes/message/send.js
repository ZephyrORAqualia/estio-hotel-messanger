const msgCol = require('../../models/MessageCollection');
const singleMessage = require('../../models/SingleMessage')
const { v4: uuidv4 } = require('uuid')
const _ = require('lodash')

async function sendMessageHandler(req, res) {
    const values = await msgCol.findOne({ messageID: req.body.id })

    var messageCollection;

    var uuid = req.body.id;

    if (_.isEmpty(values)) {
        uuid = uuidv4();
        messageCollection = new msgCol({
            messageID: uuid,
            messages: []
        })
    }

    var newMessage = new singleMessage({
        messageCollectionId: uuid,
        sentAt: Date.now(),
        content: req.body.content
    })

    newMessage.save().then(() => {
        messageCollection.messages.push(newMessage._id)
        messageCollection.save().then(() => {
            res.status(200).json({
                messages: "Successfully added messages"
            })
        })
    })
}

module.exports = sendMessageHandler;
