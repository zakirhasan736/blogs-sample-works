import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
  return (
		<div className="get-started-section bg-[#fff]">
			<div className="form-container">
				<div className="form-left">
					<img
						src="/images/brand-workshope/Group.svg"
						alt="Team working"
						className="form-image"
					/>
				</div>
				<div className="form-right">
					<h2 className="form-title">Ready to get started?</h2>
					<p className="form-subtitle">
						Fast track your growth with Particular
					</p>
					<form className="form">
						<div className="form-row">
							<div className="form-field">
								<label htmlFor="first-name">First name</label>
								<input type="text" id="first-name" className="form-input" />
							</div>
							<div className="form-field">
								<label htmlFor="last-name">Last name</label>
								<input type="text" id="last-name" className="form-input" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-field">
								<label htmlFor="email">Email address</label>
								<input type="email" id="email" className="form-input" />
							</div>
							<div className="form-field">
								<label htmlFor="contact-number">Contact number</label>
								<input type="text" id="contact-number" className="form-input" />
							</div>
						</div>
						<div className="form-row">
							<div className="form-field">
								<label htmlFor="service">Service</label>
								<select id="service" className="form-input">
									<option value="">Select Service</option>
									<option value="">Select Service</option>
									<option value="">Select Service</option>
								</select>
							</div>
							<div className="form-field">
								<label htmlFor="industry">Industry</label>
								<select id="industry" className="form-input">
									<option value="">Select Industry</option>
									<option value="">Select Industry</option>
									<option value="">Select Industry</option>
								</select>
							</div>
						</div>
						<div className="form-field">
							<label htmlFor="message">How can we help?</label>
							<textarea id="message" className="form-textarea"></textarea>
						</div>
						<button type="submit" className="form-button">
							Send
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
