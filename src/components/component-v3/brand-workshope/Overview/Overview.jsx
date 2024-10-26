import React from 'react'
import './Overview.css'
const Overview = () => {
  return (
    <div className='workshop-container bg-[#fff]'>

         {/* Workshop Overview Section */}
      <section className="workshop-overview">
            <div className="overview-header">
                <h1>Workshop Overview</h1>
                <button className="talk-button">Talk to us</button>
            </div>
            <div>
                <div  className="overview-description"> 
                    <p>Our free branding workshop is designed to give you exactly what you need -</p>
                    <p> the clarity, insights, and tools to create a more effective brand. We get it,</p>
                    <p> branding can feel overwhelming at times. Whether you're struggling to stand </p>
                <p> out, unsure how to communicate your brand's value, or simply don’t have the </p>
                    <p>time to focus on it, we’ve got your back.</p>
                </div>
                <div  className="overview-description"> 
                    <p>At Particular, we don’t just help catch your audience’s eye - we help you</p>
                    <p> connect with them in a way that sticks. And don't worry, you don’t need to be a</p>
                    <p> branding expert to benefit. We guide you through the process, step by step,  </p>
                <p>and make sure it's as simple and enjoyable as possible.  </p>
                    <p>We handle the hard work, so you can focus on what matters most - moving</p>
                    <p>your business forward.</p>
                </div>
                <div  className="overview-description"> 
                    <p>We believe branding should empower you, not burden you. That’s why we’ve</p>
                    <p>designed this workshop to not only provide practical value but also to ensure </p>
                    <p> you walk away feeling confident and ready to take action.  </p>
                </div>
            </div>
        </section>
                 {/* Statistics Section */}
     <section className="workshop-stats">
            <div className='main-stat'>
                <div className="stat">
                <h2>33</h2>
                <p>Available monthly 1-on-1 workshop opportunities</p>
                </div>
                <hr className='line'></hr>
            </div>
            <div className='main-stat'>
                <div className="stat">
                <h2>98%</h2>
                <p>of workshop participants rated the workshop 8/10 or above</p>
                </div>
                <hr className='line'></hr>
            </div>
            <div className="stat">
            <h2>64%</h2>
            <p>of consumers make purchases based on a brand name</p>
            </div>
      </section>

      {/* What you will experience section */}
      <section className="workshop-experience">
             <p className='workshop-experience-desc'>Behind Our Thoughtfulness</p>
            <h2>What you will experience in our workshop</h2>
            <div >
                        <div className="experience-cards">
                                <div className="card">
                                <span class="card-icon gray"></span>
                                    <h3>Brand Substance Discovery</h3>
                                    <p className='card-desc'>Define the heart of your brand and clarify your mission and vision.</p>
                                </div>
                                <div className="card">
                                <span class="card-icon blue"></span>
                                    <h3>Problem-Solving Framework</h3>
                                    <p className='card-desc'>Define the heart of your brand and clarify your mission and vision.</p>
                                </div>
                                <div className="card">
                                <span class="card-icon green"></span>
                                    <h3>Tagline Development</h3>
                                    <p className='card-desc'>Define the heart of your brand and clarify your mission and vision.</p>
                                </div>
                        </div>
            </div>


                {/* <!-- Testimonial Section --> */}
                <div class="testimonial">
                    <div className="testimonial-min-box">
                        <img src="/images/brand-workshope/Sam Murphy.svg" alt="Sam Murphy" class="testimonial-img"/>
                            <h2>Sam Murphy </h2>
                            <p>Founder, Retail</p>
                        
                        </div>
                    <p>"I never realized how much our brand needed this until now, Particular had some fantastic ideas!"</p>
                </div>
            


            
      </section>


    </div>
  )
}

export default Overview
