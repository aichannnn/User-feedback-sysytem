import React, {useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { getFeedbacks } from "../services/feedbackServices";

function FeedbackDashboard(){
    const[feedbacks, setFeedbacks] = useState([]);
    const[sortBy, setSortBy] = useState('');
    const[category, setCategory] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        fetchFeedbacks();
    },[sortBy,category]);

    const fetchFeedbacks = async()=>{
        const {data} = await getFeedbacks(sortBy, category);
        setFeedbacks(data);
    };

    const handleBack = () =>{
        navigate('/');
    }

    return(
        <div className="dashboard-container">
        <button className="back-button" onClick={handleBack}>
          Back to Feedback Form
        </button>
        <h1>Feedback Dashboard</h1>
  
        <div className="filters">
          <select onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Sort By</option>
            <option value="asc">Oldest First</option>
            <option value="desc">Newest First</option>
          </select>
  
          <select onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="Suggestion">Suggestion</option>
            <option value="Bug Report">Bug Report</option>
            <option value="Feature Request">Feature Request</option>
          </select>
        </div>
  
        <div className="feedback-grid">
          <div className="grid-header">
            <div>Name</div>
            <div>Email</div>
            <div>Category</div>
            <div>Feedback</div>
            <div>Submitted On</div>
          </div>
  
          {feedbacks.map((f) => (
            <div key={f._id} className="grid-row">
              <div>{f.username}</div>
              <div>{f.email}</div>
              <div>{f.category}</div>
              <div>{f.feedback}</div>
              <div>{new Date(f.createdAt).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>
    )
}
export default FeedbackDashboard;