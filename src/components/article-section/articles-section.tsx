import Button from "@/components/elements/button/button"
import {Image} from "@packages/packages"
import articlesData from "@/data/home-page-data/home-article.json"
interface Article {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
}

const ArticlesSection = () => {
  return (
		<section className="article-section pt-[120px] pb-[140px] sm:pb-14 sm:pt-[70px]">
			<div className="custom-container">
				<div className="article-sec-wrapper  mx-auto max-w-[1356px]">
					<div className="article-section-title-box mb-[41px] sm:mb-[45px]">
						<h2 className="section-title font-primary font-bold leading-none md:text-[38px] sm:text-[36px] text-left text-gray-light-2 text-[48px]">
							Articles
						</h2>
						<p className="section-desc mt-[10px] max-w-[584px] font-primary font-semibold text-left text-gray-light-2 sm:text-[19px] text-[16px]">
							Read now or Bookmark for later. Have a read of our latest articles
							to learn what’s happening at Particular and in the world of
							marketing.
						</p>
					</div>
					<div className="article-cards-content-wrapper grid gap-10 md:gap-4 sm:gap-8 grid-cols-12 w-full sm:flex sm:flex-col">
						{articlesData.map((article: Article) => (
							<div
								className="article-card-items sm:w-full col-span-4"
								key={article.id}>
								<div className="article-card-head md:h-[300px] h-[459px] sm:h-[280px]  w-full relative z-10 flex items-end justify-start">
									<Image
										src={article.imageSrc}
										alt="article images"
										width={409}
										height={459}
										className="article-image h-full w-full z-[-2]"
									/>
									<div className="article-title-box  p-7 md:p-5 sm:p-4 absolute h-full w-full left-0 top-0 flex items-end justify-start">
										<h3 className="article-card-title capitalize max-w-[345px] md:text-[24px]   sm:text-[22px] text-gray-light-2 text-left text-[34px] font-primary font-bold leading-none">
											{article.title}
										</h3>
									</div>
								</div>
								<div className="article-card-text-cont pt-[27px] pb-[21px] px-[13px] bg-gray-light">
									<p className="article-desc md:text-[18px] sm:text-[18px] text-neu-black font-primary font-medium text-left text-[20px] leading-none">
										{article.description}
									</p>
									<Button
										btnText="Discover More"
										btnVariant="primary-button max-w-[179px] text-[20px] md:text-[18px] shadow-box-shadow-primary whitespace-nowrap mt-[29px] sm:text-[17px]"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ArticlesSection
