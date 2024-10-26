import Image from "next/image";
import React from "react";

interface ServiceDetailsFinalPhaseProps {
	data:
		| {
				serviceMainSubtitle: string;
				serviceMainTitle: string;
				serviceMainDesc: string;
				serviceItemModalImage: string;
		  }
		| undefined; // Define the shape of the data object or allow it to be undefined
}

const ServiceDetailsFinalPhase: React.FC<ServiceDetailsFinalPhaseProps> = ({
	data,
}) => {
	// Check if data is undefined
	if (!data) {
		return <div>No data available</div>;
	}

	return (
		<div className="development-process-phach-item phrase-4-item">
			<div className="process-item-left-cont">
				<h5 className="process-item-subtitle">{data.serviceMainSubtitle}</h5>
				<h3 className="process-item-title">{data.serviceMainTitle}</h3>
				<p className="process-item-desc max-w-[420px] ">
					{data.serviceMainDesc}
				</p>
			</div>
			<div className="process-item-right-cont">
				<Image
					width={517}
					height={353}
					src={data.serviceItemModalImage}
					alt="phrase item modal image"
				/>
			</div>
		</div>
	);
};

export default ServiceDetailsFinalPhase;
