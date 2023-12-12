
const TestimonialsSection = () => {
  return (
		<section className="testimonials-section px-[71px] pt-[51px] pb-[60px] bg-neu-gray-black-2  overflow-hidden">
			<div className="custom-container-fluid">
				<div className="testimonials-sec-wrapper">
					<div className="testimonials-section-title-box mb-[59px]">
						<div className="section-title-box flex items-center justify-between">
							<h2 className="section-title font-primary font-bold leading-none text-left text-gray-light-2 text-fiveth-heading-4">
								Testimonials
							</h2>
							<p className="testimonials-usersname text-gray-light-2 text-text-medium-4 text-right font-semibold font-primary leading-none">
								Anantara x Particular
							</p>
						</div>
						<p className="section-desc mt-[65px] text-neu-white text-left text-text-accend-5 font-primary font-normal leading-none max-w-[1301px]">
							Anantara, the agency for global luxury travel experiences, hired
							Particular to rebrand into a seamless travel-booking experience
							for their worldwide pool of users.
						</p>
					</div>
					<div className="widgets-pagination flex items-center justify-between">
						<button className="pagination-prev-widgete font-primary font-medium text-gray-light-2 text-left text-text-medium-4 leading-none">
							Back
							<span className="topic-text block">Heat Centre</span>
						</button>
						<button className="pagination-next-widgete font-primary font-medium text-gray-light-2 text-left text-text-medium-4 leading-none">
							Next
							<span className="topic-text block">Knights Academy</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TestimonialsSection
