import Image from "next/image"

const GoogleInsightBrandBox = () => {
  return (
		<div className="google-insight-brand-box-section py-[115px] sm:py-10">
			<div className="custom-container">
				<div className="google-insight-brand-box-wrapper text-center flex items-center justify-center flex-col">
					<Image
						src="/images/icons/flat-color-icons_google.svg"
						alt="google brand box image"
						className="w-[160px] h-[160px] sm:w-[89px] sm:h-[89px]"
						width={160}
						height={160}
					/>
					<h2 className="google-insight-brand-box-title text-fourth-heading text-center text-primary font-primary font-medium leading-none capitalize sm:text-[26px] mt-[50px] sm:mt-4">
						<span className="anim-typing-text text-secondary-2">
							Particular
						</span>{" "}
						for Google
					</h2>
				</div>
			</div>
		</div>
	);
}

export default GoogleInsightBrandBox
