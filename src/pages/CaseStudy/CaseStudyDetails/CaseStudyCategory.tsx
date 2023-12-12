import ProjectOverview from "@/components/case-study-project-overview/project-overview";
import ProjectChallenge from "@/components/casestudy-project-challenge/project-challenge";
import ProjectMethode from "@/components/casestudy-project-methode/project-methode";
import ProjectResult from "@/components/casestudy-project-result/project-result";
import CaseStudyBanner from "@/components/common/banner/case-study-banner";
import FeaturedCaseStudise from "@/components/featured-case-study/featured-case-studise";
import FeaturedCaseStudies from "./FeaturedCaseStudies";

interface CaseStudyCategoryProps {
	data: {
		CaseStudyBannerData: any;
		ProjectOverviewData: any;
		ProjectChallengeData: any;
		ProjectMethodeData: any;
		ProjectResultData: any;
		featuredPostData: any;
	};
}
const CasestudyCategoriesPage: React.FC<CaseStudyCategoryProps> = ({
	data,
}) => {
	const {
		CaseStudyBannerData,
		ProjectOverviewData,
		ProjectChallengeData,
		ProjectMethodeData,
		ProjectResultData,
		featuredPostData,
	} = data;

	return (
		<div className="zanbase-page-content-main-wrapper">
			{/* case study banner section */}
			<CaseStudyBanner CaseStudyBannerData={CaseStudyBannerData} />
			{/* projects overview section */}
			<ProjectOverview data={ProjectOverviewData} />
			{/* project overview challenge section */}
			<ProjectChallenge data={ProjectChallengeData} />
			{/* case study project particular methode */}
			<ProjectMethode data={ProjectMethodeData} />
			{/* study-project-result-section */}
			<ProjectResult data={ProjectResultData} />
			{/* featured case study section */}
			<FeaturedCaseStudies data={featuredPostData} />
		</div>
	);
};

export default CasestudyCategoriesPage;
