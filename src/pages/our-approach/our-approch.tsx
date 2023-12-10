
import BannerVarientTwo from '@/components/common/banner/banner-varient-2';
import OurApproachParticulasSection from '@/components/our-approach-particular-sec/our-approach-particular';
import OurStatics from '@/components/our-statics/our-statics';

const OurApproach: React.FC = () => {
  const bannerData = {
    subHeading: 'Our approach',
    title: 'Particular believes in delivering better.',
    description: 'Our gift is observation. It just so happens that we’re a marketing agency.',
  };
  return (
    <div className='our-approach-page-main-wrapper'>
      {/* our approach banner section */}
      <BannerVarientTwo data={bannerData} />
      {/* our approach banner section end*/}

      {/* our approach particular wrapper main box */}
        <OurApproachParticulasSection />
      {/* our approach particular wrapper main box end*/}

      {/* our statics section */}
      <OurStatics />
      {/* our statics section end*/}
    </div>
  );
};

export default OurApproach;
