import React,{useState} from "react";
import { submitFeedback } from "../services/feedbackServices";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
    const navigate = useNavigate()
    const[formData, setFormData] = useState(
        {
            username:'',
            email:'',
            feedback:'',
            category: 'Suggestion'
        }
    );

    const handleSubmit = async(e) =>{
        e.preventDefault();
        await submitFeedback(formData);
        alert('Feedback Submitted successfull!!');
        setFormData({
            username:'',
            email:'',
            feedback:'',
            category:'Suggestion'
        });
        navigate('/dashboard')
    };

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      };

    return(
        <div className="container">
            <h1>Share Your FeedBack</h1>
            <form onSubmit={handleSubmit}>
            <div className="content">
            <input 
                type="text"
                name="username"
                placeholder="Your Name"
                value={formData.username}
                onChange={handleChange}
                required
            />

            <input 
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <textarea 
                name="feedback"
                placeholder="Your Feedback"
                value={formData.feedback}
                onChange={handleChange}
                required
            />

            <select name="category" value={formData.category} onChange={handleChange}>
                <option>Suggestion</option>
                <option>Bug Report</option>
                <option>Feature Request</option>
            </select>

            <button type="submit">Submit Feedback</button>
            </div>
        </form>
        </div>
        
    )


}
export default FeedbackForm;