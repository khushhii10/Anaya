import React, { useState } from 'react';
import './DonationForm.css';
import { FaCheckCircle } from 'react-icons/fa';


function DonationRequestForm() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="App">
            {submitted ? (
                <div className="submission-message">
                    <span className="thank-you-message">✔</span>
                    <p>We will contact you in 24 hours. Thank you!</p>
                </div>
            ) : (
                <form className="donation-form" onSubmit={handleSubmit}>
                    <h2>Food Donation Request Form</h2>

                    <div className="form-section">
                        <h3>About You</h3>
                        <div className="form-group">
                            <label>Your name*</label>
                            <input type="text" name="name" required />
                        </div>
                        <div className="form-group">
                            <label>Email*</label>
                            <input type="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label>Phone*</label>
                            <input type="text" name="phone" required />
                        </div>
                    </div>

                    <div className="form-section">
                        <h3>About Your Organization</h3>
                        <div className="form-group">
                            <label>Name of organization*</label>
                            <input type="text" name="organizationName" required />
                        </div>
                        <div className="form-group">
                            <label>Address*</label>
                            <input type="text" name="address1" placeholder="Address line 1" required />
                            <input type="text" name="city" placeholder="City" required />
                            <input type="text" name="zipCode" placeholder="Postal / Zip Code" required />
                            <select name="country" required>
                                <option value="India">India</option>
                                {/* Add more countries as needed */}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Is your organization a 501(c)(3)?*</label>
                            <div className="radio-group">
                                <label><input type="radio" name="taxExempt" value="Yes" required /> Yes</label>
                                <label><input type="radio" name="taxExempt" value="No" required /> No</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>If your organization is a 501(c)(3) please upload a copy of the tax-exempt certificate.*</label>
                            <input type="file" name="taxCertificate" />
                        </div>
                        <div className="form-group">
                            <label>Your organization's mission*</label>
                            <textarea name="mission" required></textarea>
                        </div>
                        <div className="form-group">
                            <label>Has your organization received a donation from us in the past?*</label>
                            <div className="radio-group">
                                <label><input type="radio" name="previousDonation" value="Yes" required /> Yes</label>
                                <label><input type="radio" name="previousDonation" value="No" required /> No</label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Your relationship to the organization*</label>
                            <input type="text" name="relationship" required />
                        </div>
                        <div className="form-group">
                            <label>Executive Director*</label>
                            <input type="text" name="executiveDirector" required />
                        </div>
                        <div className="form-group">
                            <label>Board President*</label>
                            <input type="text" name="boardPresident" required />
                        </div>
                    </div>

                    <button type="submit">Next page</button>
                </form>
            )}
        </div>
    );
}

export default DonationRequestForm;
