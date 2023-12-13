import ContactBanner from '@/components/common/banner/contact-banner'
import {Link} from '@packages/packages'
import {  InstagrameIcons, TwitterIcons, YoutubeIcons } from "@/icons";
import Button from '@/components/elements/button/button';
 
const ContactPage = () => {
  return (
    <div className='contact-page-main-wrapper'>
      <ContactBanner />
      <div className="contact-page-main-cont-wrapper pt-[100px] pb-[146px] sm:pt-[45px] sm:pb-[45px]">
         <div className="custom-container">
         <div className="contact-page-main-content grid grid-cols-16 gap-5 sm:gap-[45px] sm:flex sm:flex-col-reverse">
         <div className="contact-page-main-left-cont col-span-7   pl-4 laptop-m:pl-0 max-w-[546px] sm:max-w-full w-full">
           <p className="contact-page-nfo-desc mb-16 sm:mb-[35px]  text-left text-light-gray font-primary font-normal leading-normal sm:max-w-[332px] text-text-accend-2 sm:text-[18px]">Lorem ipsum dolor sit amet consectetur. Senectus habitant scelerisque mauris magna vitae et.</p>
           <div className="contact-address-info-box mb-16 sm:mb-[35px]">
            <h6 className="info-title text-left text-primary font-primary font-normal leading-normal mb-5 sm:mb-2 sm:max-w-[311px] text-text-accend-2 sm:text-[18px]">Prefer to talk?</h6>
            <p className="contact-addres-info-desc text-left text-primary font-primary font-normal leading-normal sm:max-w-[311px] mb-5 text-body-text-3 sm:text-[7px]">Call us on +44 (0) 208 068 2102 on Monday to Friday between 9am - 6pm and our Relationships team will discuss how we may best help you.</p>
           </div>
           <ul className="socials-widgets flex items-center gap-12">
                <li className="socials-widgets-list-item"><Link href="/" className='block'><TwitterIcons isWhiteVariant={true} /></Link></li>
                <li className="socials-widgets-list-item"><Link href="/" className='block'><InstagrameIcons isWhiteVariant={true} /></Link></li>
                <li className="socials-widgets-list-item"><Link href="/" className='block'><YoutubeIcons isWhiteVariant={true} /></Link></li>
              </ul>
         </div>
         <div className="contact-page-main-right-cont col-span-9  pl-16 laptop-m:pl-0 w-full">
               <h6 className="contact-form-title mb-10 text-text--large text-left text-light-gray font-primary font-normal leading-none">Form</h6>
               <form action="get" className="contact-form-boxc w-full flex flex-col gap-5">

                 <div className="contact-form-input-grid-box flex items-center gap-5 w-full">
                  {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="firstName" className="contact-form-input-fild w-full">
                       <input type="text" name="firstName" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='firstName'  placeholder='First Name' />
                    </label>
                  </div>
                  {/* ========= */}
                 {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="lastName" className="contact-form-input-fild w-full">
                       <input type="text" name="lastName" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='lastName'  placeholder='Last Name' />
                    </label>
                  </div>
                  {/* ========= */}
                 </div>
                 {/* ========= */}
                 <div className="contact-form-input-grid-box flex items-center gap-5 w-full">
                  {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="call" className="contact-form-input-fild w-full">
                       <input type="text" name="call" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='call'  placeholder='Phone number' />
                    </label>
                  </div>
                  {/* ========= */}
                 {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="call" className="contact-form-input-fild w-full">
                       <input type="text" name="call" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='call'  placeholder='Phone number' />
                    </label>
                  </div>
                  {/* ========= */}
                 </div>
                 {/* =====services list of points=============== */}
                 <div className="contact-form-input-grid-box w-full">
                  <h6 className='title-checkbox-services mb-5 text-[18px] font-normal font-primary text-left text-neu-white leading-none'>Which Service(s) are you looking for?</h6>
                     <div className="contacts-forms-service-lists-box flex items-start gap-5 sm:flex-col sm:items-center sm:justify-center">
                       <div className="contact-form-check-list-item">
                        <label htmlFor="services1" className="checkmark-services flex flex-col items-center justify-center gap-3">
                          <input type="checkbox" name="checkbox" className='hidden' id="services1" />
                          <p className="checkbox-services-text text-dark-gray text-[18px] text-center leading-none font-primary font-normal">Web Design and Development</p>
                          <div className="check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                        </label>
                       </div>
                       <div className="contact-form-check-list-item">
                        <label htmlFor="services1" className="checkmark-services flex flex-col items-center justify-center gap-3">
                          <input type="checkbox" name="checkbox" className='hidden' id="services1" />
                          <p className="checkbox-services-text text-dark-gray text-[18px] text-center leading-none font-primary font-normal">Visual Media</p>
                          <div className="check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                        </label>
                       </div>
                       <div className="contact-form-check-list-item">
                        <label htmlFor="services1" className="checkmark-services flex flex-col items-center justify-center gap-3">
                          <input type="checkbox" name="checkbox" className='hidden' id="services1" />
                          <p className="checkbox-services-text text-dark-gray text-[18px] text-center leading-none font-primary font-normal">Branding</p>
                          <div className="check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                        </label>
                       </div>
                       <div className="contact-form-check-list-item">
                        <label htmlFor="services1" className="checkmark-services flex flex-col items-center justify-center gap-3">
                          <input type="checkbox" name="checkbox" className='hidden' id="services1" />
                          <p className="checkbox-services-text text-dark-gray text-[18px] text-center leading-none font-primary font-normal">SEO</p>
                          <div className="check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                        </label>
                       </div>
                       <div className="contact-form-check-list-item">
                        <label htmlFor="services1" className="checkmark-services flex flex-col items-center justify-center gap-3">
                          <input type="checkbox" name="checkbox" className='hidden' id="services1" /> 
                          <p className="checkbox-services-text text-dark-gray text-[18px] text-center leading-none font-primary font-normal">PPC</p>
                          <div className="check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                        </label>
                       </div>
                       <div className="contact-form-check-list-item">
                        <label htmlFor="services1" className="checkmark-services flex flex-col items-center justify-center gap-3">
                          <input type="checkbox" name="checkbox" className='hidden' id="services1" />
                          <p className="checkbox-services-text text-dark-gray text-[18px] text-center leading-none font-primary font-normal">Social Media</p>
                          <div className="check-mark-input-mark w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                        </label>
                       </div>
                     </div>
                 </div>
                 {/* ============ */}
                 <div className="contact-form-input-grid-box flex items-center gap-5 w-full">
                  {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="industry" className="contact-form-input-fild w-full">
                       <input type="text" name="industry" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='industry'  placeholder='Industry' />
                    </label>
                  </div>
                  {/* ========= */}
                 {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="investmentRabge" className="contact-form-input-fild w-full">
                       <input type="text" name="investmentRabge" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='investmentRabge'  placeholder='Project Investment Range' />
                    </label>
                  </div>
                  {/* ========= */}
                 </div>
                 {/* ========= */}
                 <div className="contact-form-input-grid-box flex items-center gap-5 w-full">
                  {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="bussinesSize" className="contact-form-input-fild w-full">
                       <input type="text" name="bussinesSize" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='bussinesSize'  placeholder='How Would You describe your business size?' />
                    </label>
                  </div>
                  {/* ========= */}
                 {/* ======= */}
                  <div className="contact-form-input-fild-box w-full">
                    <label htmlFor="projectIdea" className="contact-form-input-fild w-full">
                       <input type="text" name="projectIdea" className='input-fild-item w-full text-neu-white h-[45px] border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='projectIdea'  placeholder='How particular you have been about your idea?' />
                    </label>
                  </div>
                  {/* ========= */}
                 </div>
                 <div className="contact-form-input-grid-box flex items-center gap-5 w-full">
                 <div className="contact-form-input-textarea-box w-full">
                    <label htmlFor="desc" className="contact-form-input-fild w-full">
                    <textarea name="desc" className='input-fild-item w-full h-[210px] text-neu-white border border-light-gray focus:border-light-gray focus:outline-0 bg-transparent focus:bg-transparent text-left py-[10px] px-5 text-[18px] font-primary font-normal leading-none placeholder:text-[18px] placeholder:text-dark-gray' id='desc'  placeholder='Message'></textarea>
                    </label>
                  </div>
                 </div>
                 <div className="submite-btn-box my-[10px]">
                  <Button btnText="Send" btnVariant='primary-submit-button form-btn max-w-[122px]' />
                 </div>
                 <div className="requred-privacy-checkmark">
                  <label htmlFor="checkmark" className="chekmark-privary-box flex items-start gap-3">
                    <input type="checkbox" name="checkbox" className='hidden' id="checkmark" />
                    <div className="check-mark-input-mark w-[33px] min-w-[33px] h-[33px] border border-light-gray bg-transparent block"></div>
                    <p className="checkmark-text text-dark-gray">I hereby give my consent to Particular Agency to send me marketing communications
such as newsletters, promotional offers, and information about new products and services. 
I understand that I can withdraw my consent at any time.</p>
                  </label>
                 </div>
               </form>
         </div>
      </div>
         </div> 
      </div>

    </div>
  )
}

export default ContactPage
