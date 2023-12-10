import React from 'react'

const OurStatics = () => {
  return (
    <section className="our-statics-section pt-[160px] pb-[290px]">
    <div className="custom-container">
        <div className="our-statics-title-box mb-[250px]">
            <h2 className="our-statics-ttitle text-neu-white text-center text-fiveth-heading-4 sm:text-text-accend-2 font-primary font-bold leading-none">Growth, revenue, results</h2>
        </div>
        <div className="our-statics-sec-wrapper grid gap-5 grid-cols-12">
            {/* ===our statics card items==== */}
          <div className="our-statics-card-items text-center col-span-4">
            <h3 className="our-statics-card-title text-neu-white text-center text-fiveth-heading-4 font-primary font-bold leading-none px-5">50+</h3>
            <p className="our-statics-card-desc mt-4 text-neu-white text-center text-text-medium-4 font-primary font-medium leading-none">Completed marketing projects</p>
          </div>
            {/* ===our statics card items end==== */}
             {/* ===our statics card items==== */}
          <div className="our-statics-card-items text-center col-span-4">
            <h3 className="our-statics-card-title text-neu-white text-center text-fiveth-heading-4 sm:text-sixth-heading font-primary font-bold leading-none px-5">£1-15k</h3>
            <p className="our-statics-card-desc mt-4 text-neu-white text-center text-text-medium-4 sm:text-body-text-6 font-primary font-medium leading-none">Our current infrastructure allows us to easily cater for projects in this budgetrange </p>
          </div>
            {/* ===our statics card items end==== */}
             {/* ===our statics card items==== */}
          <div className="our-statics-card-items text-center col-span-4">
            <h3 className="our-statics-card-title text-neu-white text-center text-fiveth-heading-4 sm:text-sixth-heading font-primary font-bold leading-none px-5">35%</h3>
            <p className="our-statics-card-desc mt-4 text-neu-white text-center text-text-medium-4 sm:text-body-text-6 font-primary font-medium leading-none">Over 1 in 3 clients come back to us within the first 3 months for additional marketing and branding support.</p>
          </div>
            {/* ===our statics card items end==== */}

        </div>
    </div>
</section>
  )
}

export default OurStatics
