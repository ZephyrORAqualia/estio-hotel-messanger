const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const massMessageModel = mongoose.Schema({
    messageId: String,
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'singleMessage',
        },
    ],
});

massMessageModel.plugin(mongoosePaginate);
massMessageModel.plugin(aggregatePaginate);

module.exports = mongoose.model('massMessage', massMessageModel);
