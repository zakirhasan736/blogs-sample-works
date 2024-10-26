import React from 'react'
import './Workshop.css'

const Workshop = () => {
  return (
		<div className="workshop-page bg-[#fff]   pt-[177px]">
			<div className="custom-container">
				<header className="workshop-header">
					<p className="mini-title"> Our Services </p>
					<h1>FREE Brand Workshop</h1>
					<div className="title-dec">
						<p>
							Our workshop blends creativity and strategy, to help your brand
							strike a chord{" "}
						</p>
						<p>with the people who matter most.</p>
					</div>

					<a href="#register" className="btn-secure">
						Secure your spot →
					</a>
				</header>

				<section className="images-section container">
					<div className="image-card">
						<img
							src="/images/brand-workshope/Businessman.svg"
							alt="Businessman"
						/>
					</div>
					<div className="image-card">
						<img
							src="/images/brand-workshope/Workshop Participantsvg.svg"
							alt="Workshop Participant"
						/>
					</div>
					<div className="image-card">
						<img
							src="/images/brand-workshope/Workshop Recording.svg"
							alt="Workshop Recording"
						/>
					</div>
					<div className="image-card">
						<img
							src="/images/brand-workshope/Person at Desk.svg"
							alt="Person at Desk"
						/>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Workshop
