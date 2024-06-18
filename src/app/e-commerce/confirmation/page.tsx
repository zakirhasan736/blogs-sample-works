import React from 'react'

const ConfirmationPage = () => {
  return (
		<div className="confirmation-page-main-wrapper  bg-white text-mono-100 pt-[199px] h-[100vh]">
			<div className="custom-container">
				<div className="confirmation-page-cont-box grid grid-cols-12 gap-6 sm:grid-cols-6 pb-[84px]">
					<div className="col-span-8 sm:col-span-6">
						<ul className="breadcrump-box mb-2 !flex items-center gap-3 border-b w-full border-b-[#CBD7E3]">
							<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
								Purchase
							</li>
							<li className="relative top-[-4px]">{">"}</li>
							<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
								Checkout
							</li>
							<li className="relative top-[-4px]">{">"}</li>
							<li className="breadcrump-list-item text-[#181725] opacity-100 font-accent font-medium text-[18px] sm:text-[14px] leading-[150%] pb-2">
								Confirmation
							</li>
						</ul>
						<div className="payment-confirmation-screen pt-6">
							<h1 className="!text-[#181725] opacity-100 !font-accent !font-medium !text-[18px] !leading-[150%] mb-4">
								Thanks for your purchase!
							</h1>
							<p className="body-regular-1">
								You will recieve an email in the next couple days containing the
								next steps for your Web Package.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConfirmationPage
