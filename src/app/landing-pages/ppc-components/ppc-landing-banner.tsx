import React from 'react'

const PPCLandingBanner = () => {
  return (
<section  className='ppc-landing-banner-sec-wrap pt-[160px] pb-[75px]'>
            <div className="custom-container max-w-[1090px]">  
                <div className="landingpage-hero-section">
                    <div className="hero-content">
                        <h1>PPC - Pay Per Click</h1>
                        <p className="tagline">Fuelling Your Success, One Click at a Time: Unleash the Power of Precision with Our Pay-Per-Click Expertise!</p>
                        <div className="features">
                            <ul>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Vivamus pellentesque augue tortor lacinia sagittis elementum morbi.</li>
                                <li>Vitae interdum suspendisse iaculis convallis mattis sed porta.</li>
                                <li>Nulla interdum morbi vitae tellus rutrum platea massa elit.</li>
                            </ul>
                        </div>
                        <div className="actions">
                            <div className="left">
                                <a href="#">Get your free brand strength assessment</a>
                                <p>Explore your business's digital potential with our bespoke scorecard.</p>
                            </div>
                            <div className="vertical-sep"></div>
                            <div className="right">
                                <div className="badges">
                                    <iframe width="100" height="100" src="https://shareables.clutch.co/share/badges/2319008/76629?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch Jquery Company United Kingdom 2024"></iframe>
                                    <iframe width="100" height="100" src="https://shareables.clutch.co/share/badges/2319008/76630?utm_source=clutch_top_company_badge&utm_medium=image_embed" title="Top Clutch Jquery Company London 2024"></iframe>
                                </div>
                                <p>Awarded by Clutch</p>
                            </div>
                        </div>
                    </div>

                    <div className="usp-form">
                        <div className="curve-graph">
                            <img src="/images/illustration-curve-chart.svg" alt="cta modal images" />
                        </div>
                        <div className="bar-graph">
                            <img src="/images/illustration-bar-graph.svg" alt="cta modal images"/>
                        </div>
                        <div className="hero-form">
                                <form action="">
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder="John Doe"/>
                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder="john@domain.com" />
                                    <label htmlFor="">Message/Query</label>
                                    <textarea name="" id=""  placeholder="Start Typing Here..."></textarea>
                                    <button type="submit" className="cta-form">Send Message</button>
                                </form>
                                 
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default PPCLandingBanner
