import React, { useState } from 'react';
import './FoodDonation.css';

const FoodDonation = () => {
    const [submitted, setSubmitted] = useState(false);
    const [expiryDate, setExpiryDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate expiry date
        const enteredDate = new Date(expiryDate);
        const currentDate = new Date();
        const minDate = new Date(currentDate.setDate(currentDate.getDate() + 7));

        if (enteredDate < minDate) {
            alert("Expiry date should be more than 1 week from today.");
            return;
        }

        setSubmitted(true);
    };

    return (
        <div className="food-donation-container">
            {submitted ? (
                <div className="thank-you-message">
                    <span>&#10003;</span> THANK YOU. Our agent will collect the food within five hours.
                </div>
            ) : (
                <form className="food-donation-form" onSubmit={handleSubmit}>
                    <h2>Food Donation Form</h2>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Food Items Info:
                        <textarea name="foodInfo" required></textarea>
                    </label>
                    <label>
                        Expiry Date:
                        <input 
                            type="date" 
                            name="expiryDate" 
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)} 
                            required 
                        />
                    </label>
                    <label>
                        Upload Photo:
                        <input type="file" name="photo" accept="image/*" required />
                    </label>
                    <label>
                        Address:
                        <textarea name="address" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default FoodDonation;
