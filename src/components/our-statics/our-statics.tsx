
interface OurStaticsProps {
  staticsItems: {
  title?: string;
  description?: string;
  }
}

const OurStatics: React.FC<OurStaticsProps> = ({ staticsItems }) => {
  return (
    <section className="our-statics-section pt-[120px] pb-[160px] sm:py-[70px]">
      <div className="custom-container">
        <div className="our-statics-sec-wrapper grid gap-5 grid-cols-12 sm:flex sm:flex-col">
          {staticsItems?.map((staticsItem, index) => (
            <div key={index} className="our-statics-card-items text-center col-span-4">
              <h3 className="our-statics-card-title text-neu-white text-center text-[44px] font-primary font-bold leading-none px-5 sm:text-[27px]">
                {staticsItem.title}
              </h3>
              <p className="our-statics-card-desc mt-4 text-neu-white text-center text-text-medium-4 font-primary font-medium leading-none sm:text-[13px]">
                {staticsItem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStatics;

