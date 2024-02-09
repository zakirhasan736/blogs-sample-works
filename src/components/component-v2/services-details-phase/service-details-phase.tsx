import Image from "next/image";
import React from "react";

// Define the type for each card item
interface CardItem {
	title: string;
	description: string;
	iconUrl: string;
	ImgWidth?: number;
	ImgHeight?: number;
}

// Define the type for each phase
interface Phase {
	subtitle: string;
	title: string;
	description: string;
	cardItems: CardItem[];
}

interface ServiceDetailsPhaseProps {
	data: Phase[] | undefined; // Accept an array of Phase objects or undefined as props
}

const ServiceDetailsPhase: React.FC<ServiceDetailsPhaseProps> = ({ data }) => {
	// Check if data is undefined or null
	if (!data) {
		return <div>No data available</div>;
	}

	return (
		<div className="service-details-phase-box">
			{data.map((phase, index) => (
				<div key={index} className="development-process-phach-item">
					<div className="process-item-left-cont">
						<h5 className="process-item-subtitle">{phase.subtitle}</h5>
						<h3 className="process-item-title">{phase.title}</h3>
						<p className="process-item-desc">{phase.description}</p>
					</div>
					<div className="process-item-right-cont">
						{phase.cardItems.map((item, idx) => (
							<div key={idx} className="process-item-cards-item">
								<div className="cards-item-icon w-[110px] ">
									<Image
										width={110}
										height={110}
										src={item.iconUrl}
										alt={item.title}
									/>
								</div>
								<div className="cards-item-info">
									<h4 className="cards-item-info-title">{item.title}</h4>
									<p className="cards-item-info-desc">{item.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default ServiceDetailsPhase;
