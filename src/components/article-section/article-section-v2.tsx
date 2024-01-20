import {Link, Image} from '@packages/packages'
import React from 'react'

const ArticleSectionVersionTwo = () => {
  return (
		<section className="article-blogs-section pb-[100px]">
			<div className="custom-container max-w-[1220px]">

				<div>
					<div className="comon-title mb-6">
						<h2>Our Work</h2>
						<span></span>
					</div>
					<div className="articles-blogs-main-wrap grid grid-cols-12 gap-[13px]">
						<div className="blog articles-blogs-item col-span-4">
							<Image
								width={330}
								height={237}
								src="/images/article-cad-img-1.png"
								alt="blog article image"
								className="rounded-3 h-[237px] object-cover"
							/>
							<h4>Revolutionise Your Digital Marketing Strategy.</h4>
							<div className="blog-info">
								<div>
									<p>John Doe</p>
								</div>
								<div>
									<p>15th Jan 2023</p>
								</div>
							</div>
						</div>
						<div className="blog  articles-blogs-item col-span-4">
							<Image
								width={330}
								height={237}
								src="/images/article-cad-img-2.png"
								alt="blog article image"
								className="rounded-3 h-[237px] object-cover"
							/>
							<h4>Revolutionise Your Digital Marketing Strategy.</h4>
							<div className="blog-info">
								<div>
									<p>John Doe</p>
								</div>
								<div>
									<p>8th January 2024</p>
								</div>
							</div>
						</div>
						<div className="blog  articles-blogs-item col-span-4">
							<Image
								width={330}
								height={237}
								src="/images/article-cad-img-3.png"
								alt="blog article image"
								className="rounded-3 h-[237px] object-cover"
							/>
							<h4>Revolutionise Your Digital Marketing Strategy.</h4>
							<div className="blog-info">
								<div>
									<p>John Doe</p>
								</div>
								<div>
									<p>1th Jan 2023</p>
								</div>
							</div>
						</div>
					</div>
					{/* <div className="articles-blogs-bottom-info end-info mt-[55px]">
						<p className='mb-[21px]'>
							Explore the latest trends and insights in our informative blog
							posts.
						</p>
						<Link className="cta-white" href="#">
							View All Blogs
						</Link>
					</div> */}
				</div>
			</div>
		</section>
	);
}

export default ArticleSectionVersionTwo
