import {Image,Link} from "@packages/packages";

interface Service {
	title: string;
	description: string;
	icon: string;
	link: string;
}

const ServiceCard: React.FC<Service> = ({ title, description, icon, link }) => (
	<div className="service-items col-span-3 md:col-span-4 sm:col-span-full">
		<div className="service-item-icons">
			<Image src={icon} alt="service icons" width={110} height={110} />
		</div>
		<Link href={link}>
			<h4>{title}</h4>
		</Link>
		<p>{description}</p>
	</div>
);

export default ServiceCard;