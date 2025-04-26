const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    },
    category:{
        type:String,
        enum: ['Suggestion','Bug Report', 'Feature Request'],
        default: 'Suggestion'
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('Feedback',FeedbackSchema);