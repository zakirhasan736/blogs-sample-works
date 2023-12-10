import ProjectOverview from '@/components/case-study-project-overview/project-overview';
import ProjectChallenge from '@/components/casestudy-project-challenge/project-challenge';
import ProjectMethode from '@/components/casestudy-project-methode/project-methode';
import ProjectResult from '@/components/casestudy-project-result/project-result';
import CaseStudyBanner from '@/components/common/banner/case-study-banner'
import FeaturedCaseStudise from '@/components/featured-case-study/featured-case-studise';

const ZanbasePage = () => {
  return (
		<div className="zanbase-page-content-main-wrapper">
			{/* case study banner section */}
			<CaseStudyBanner />
			{/* projects overview section */}
			 <ProjectOverview />
			{/* project overview challenge section */}
			<ProjectChallenge />
			{/* case study project particular methode */}
			<ProjectMethode />
			{/* study-project-result-section */}
			<ProjectResult />
			{/* featured case study section */}
		      <FeaturedCaseStudise />
		</div>
	);
}

export default ZanbasePage
