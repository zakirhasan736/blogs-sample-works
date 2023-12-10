import AboutSection from "@/components/about-section/about-section"
import ArticlesSection from "@/components/article-section/articles-section"
import CaseStudySlider from "@/components/case-study-slider/case-study-slider"
import HomeBanner from "@/components/common/banner/home-banner"
import GuidedSection from "@/components/guided-section/guided-section"
import ParticularSecModal from "@/components/particular-sec-modal/particular-sec-modal"
import TestimonialsSection from "@/components/testimonials-section/testimonials-section"


const Home = () => {
  return (
    <div className="home-page-main-wrapper">
      {/* home banner section */}
        <HomeBanner />
      {/* home banner section end*/}

      {/* home about section  */}
      <AboutSection />
      {/* home about section  end*/}

      {/* home guided section */}
      <GuidedSection />
      {/* home guided section end*/}

      {/* home particular modal section */}
      <ParticularSecModal />
      {/* home particular modal section end*/}

      {/* case study slider section */}
        <CaseStudySlider />
      {/* case study slider section end*/}

      {/* home article section */}
      <ArticlesSection />
      {/* home article section end*/}

      {/* home testimonials section */}
      <TestimonialsSection />
      {/* home testimonials section end*/}
    </div>
  )
}

export default Home
