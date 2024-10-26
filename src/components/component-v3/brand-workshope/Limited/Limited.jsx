import React from 'react';
import './Limited.css';

const Limited = () => {
  return (
		<div className="limited-section bg-[#fff]">
			<div className="limited-container">
				<h2 className="limited-title">Limited Spots Available</h2>
				<p className="limited-description">
					As part of our Particular300 Campaign, we’re offering 300 free spots
					to businesses ready to get professional branding help. It’s first
					come, first serve—don’t miss out!
				</p>
				<button className="btn limited-btn">Check Availability</button>
			</div>

			<div className="what-else-we-do-section">
				<div className="left-column">
					<ul className="service-list">
						<li>
							{" "}
							<p className="what-else-title">WHAT ELSE WE DO</p>
						</li>
						<li className="service-item">
							<strong>Digital Strategy & Consultancy</strong>
						</li>
						<li className="service-item">UX/UI Design</li>
						<li className="service-item">Web Development</li>
						<li className="service-item">Brand Visual Identity</li>
						<li className="service-item">Visual Media</li>
						<li>
							<img
								src="/images/brand-workshope/Particular Clutch Award 2.svg"
								alt="Clutch Award"
								className="clutch-award"
							/>
						</li>
					</ul>
				</div>
				<div className="right-column">
					<p className="agency-description">
						We’re a strategy-first agency, working closely with our clients
						across the UK and globally to deliver the B2B digital marketing
						strategy foundations that underpin high-performance website design
						projects.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Limited;
