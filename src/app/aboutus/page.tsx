import ArticleSectionVersionTwo from '@/components/article-section/article-section-v2'
import AboutBanner from '@/components/common/banner/about-banner'
import CareerSection from '@/components/component-v2/career-section/career-section'
import OurTeamSection from '@/components/component-v2/our-team-section/our-team'
import LatestBlogs from "@data/blogs/short-blog-data.json";
import React from 'react'

const AboutUsPage = () => {
	// Sort the latest blogs by date in descending order
	const sortedLatestBlogs = LatestBlogs.sort((a, b) => {
		return new Date(b.date).getTime() - new Date(a.date).getTime();
	});

	// Select the latest three blogs
	const latestThreeBlogs = sortedLatestBlogs.slice(0, 3);
	return (
		<div className="about-page-main-wrapper overflow-hidden">
			<AboutBanner />
			<OurTeamSection />
			<CareerSection />
			<ArticleSectionVersionTwo
				latestBlogs={latestThreeBlogs}
				ShortBlogs={true}
			/>
		</div>
	);
}

export default AboutUsPage
