import { Image, Link } from "@packages/packages";

interface Service {
	title: string;
	description: string;
	icon: string;
	link: string;
}

const ServiceCards: React.FC<Service> = ({ title, description, icon, link }) => (
	<div className="service-card-item col-span-4 md:col-span-4 sm:col-span-full">
		<Link href={link}>
			<div className="service-items">
				<div className="service-item-icons">
					<Image src={icon} alt="service icons" width={110} height={110} />
				</div>
				<h4>{title}</h4>
				<p>{description}</p>
			</div>
		</Link>
	</div>
);

export default ServiceCards;