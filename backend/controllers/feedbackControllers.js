const Feedback = require('../models/Feedback');

const submitFeedback = async(req,res)=>{
    try{
    const newFeedback = await Feedback.create(req.body);
    res.status(201).json(newFeedback);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
};

const getFeedbacks = async(req,res)=>{
    try {
        let {sortBy, category} =req.query;
        let filter = category ? {category}:{};

        let feedbacks = await Feedback.find(filter).sort(sortBy ? {createdAt: sortBy==='asc' ? 1 : -1} : {createdAt: -1});
        res.json(feedbacks);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
};

module.exports = {submitFeedback, getFeedbacks};