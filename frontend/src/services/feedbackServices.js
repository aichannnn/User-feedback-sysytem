import axios from 'axios';

const API_URI = 'http://localhost:5000/api/feedback';

export const submitFeedback = async(data)=>{
    return await axios.post(API_URI,data);
};

export const getFeedbacks = async(sortBy, category) =>{
    let url = API_URI;
    if(sortBy || category) {
        url += `?${sortBy ? `sortBy=${sortBy}` : ''}${sortBy && category ? '&' : ''}${category ? `category=${category}`:''}`;
    }
    return await axios.get(url);
}; 