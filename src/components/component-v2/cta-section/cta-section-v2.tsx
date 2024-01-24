import GlowButton from "@/components/elements/button/glow-button";
import { Link, Image } from "@packages/packages";

const CTASectionVersionTwo = () => {
	return (
		<section className="cta-section-v2 pt-[60px] pb-[87px]">
			<div className="custom-container">
				<div className="promotion">
					<h2 className="mb-9 text-[#F2EFEF] text-center text-[38px] sm:text-[32px] font-medium font-primary capitalize leading-normal">
						Find out the marketing strength of your business
					</h2>
					<Link
						href="https://www.particularagency.co.uk/self-assess"
						className="inline-block">
						<GlowButton glowBtnText="Get your free brand strength assessment" />
					</Link>
					<p className="mt-9 max-w-[543px] mx-auto">
						Unlock valuable insights into your brand's potential and performance
						with our complimentary self-assessment survey.
					</p>
				</div>
			</div>
		</section>
	);
};

export default CTASectionVersionTwo;
