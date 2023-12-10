
interface BannerVarientTwoProps {
  data: {
    subHeading?: string;
    title: string;
    description: string;
    colorText?: string;
    isColorText?: boolean; // Add a boolean property to indicate color text
  };
}

const BannerVarientTwo: React.FC<BannerVarientTwoProps> = ({ data }) => {
  
  return (
    <section className="banner-varient-two-section bg-[#424245] px-[71px] py-[171px] h-[871px]">
      <div className="custom-container h-full">
        <div className="banner-varient-two-content flex items-end h-full justify-start">
          <div className="banner-varient-two-text-box">
            <h4 className="banner-varient-sub-title text-neu-white text-left text-text-medium-4 font-primary font-semibold leading-none tracking-[7.62px]">
              {data.subHeading}
            </h4>
            <h1 className="banner-varient-title mt-5 max-w-[1430px] text-secondary-heading-3 text-left text-neu-white font-primary font-bold leading-none tracking-[2.7px]">
              {data.isColorText && <span className="color-text">{data.colorText}</span>}
              {data.title}
            </h1>
            <p className="banner-varient-desc mt-[42px] text-neu-white text-left text-text-accend-1 font-primary font-semibold leading-none">
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerVarientTwo;
