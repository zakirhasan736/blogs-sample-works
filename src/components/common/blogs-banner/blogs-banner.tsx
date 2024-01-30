import Image from 'next/image';
import React from 'react'

const BlogsBanner = () => {
  return (
		<section className="blogs-banner-section pt-[193px] pb-[29px]">
			<div className="custom-container max-w-[1180px]">
				<div className="blogs-banner-wrapper">
					<h1 className="banner-title text-center mb-5 text-[#fff] text-[46px] md:text-[34px] sm:text-[32px] font-semibold font-primary leading-[1.2] capitalize">
						Explore, Engage, Evolve: Unleashing the Power of Words on our
						Blogging Odyssey
					</h1>
					<p className="banner-desc text-center mb-[70px] text-[16px] text-neu-white opacity-70 font-semibold font-tertery leading-[24px] italic">
						‘’To Be The Biggest Catalyst To{" "}
						<span className="underline">Web</span> and{" "}
						<span className="underline">App</span> Experiences To Everyone,
						Everywhere.’’
					</p>
					<div className="featured-blogs-card max-w-[857px] mx-auto">
						<div className="featured-img-modal-box relative mb-5">
							<Image
								src="/images/article-cad-img-1.png"
								alt="blogs featured image"
								width={805}
								height={268}
								className="h-[268px] object-cover"
							/>
							<ul className="category-tags absolute top-[17px] left-[19px] px-3 py-[6px] text-center text-[14px] text-neu-white font-primary font-medium leading-normal bg-[#00000080]">
								<li>Featured</li>
							</ul>
						</div>
						<div className="featured-image-cont-box">
							<h2 className="featured-blog-title text-[22px] sm:text-[18px] text-left text-neu-white font-tertery font-medium leading-[24px] mb-4">
								Revolutionise Your Digital Marketing Strategy.
							</h2>
							<div className="featured-blog-info flex items-center justify-between">
								<p className="author-name text-neu-white text-[14px] font-medium text-left font-tertery leading-normal  opacity-70">
									- Particular Agency
								</p>
								<p className="posted-date text-neu-white text-[14px] font-medium text-right font-tertery leading-normal  opacity-70">
									15th Jan 2024
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default BlogsBanner
