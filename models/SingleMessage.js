const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const singleMessageModel = mongoose.Schema({
    messageCollectionId: String,
    sentAt: Date,
    content: String,
});

singleMessageModel.plugin(mongoosePaginate);
singleMessageModel.plugin(aggregatePaginate);

module.exports = mongoose.model('singleMessage', singleMessageModel);
