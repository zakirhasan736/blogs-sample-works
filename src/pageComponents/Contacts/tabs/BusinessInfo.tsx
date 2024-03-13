import React from "react";

type Props = {};

const BusinessInfo: React.FC = (props: Props) => {
    
  return (
    <form action="">
      <div className="form-second-steps">
        <div className="contact-form-input-grid-box w-full mb-5">
          {/* ======= */}

          <SelectItemWithSearch
            items={industryTypes.map((industry) => industry.label)}
            placeholder="Exp: Select Food Production"
            SearchPlaceholder="Search Industry Type"
            labeltextItem={true}
            labelText="Industry"
            onSelectedItemsChange={handleSelectedIndustryItemsChange}
          />
          {/* ========= */}
        </div>
        <div className="contact-form-input-grid-box w-full mb-5">
          {/* ======= */}
          <SelectItemWithSearch
            items={investmentRabgeTypes.map(
              (investmentRabge) => investmentRabge.label
            )}
            placeholder="£0 - 5,000"
            SearchPlaceholder="Search Investment Range"
            labeltextItem={true}
            labelText="Investment Range"
            onSelectedItemsChange={handleSelectedInvestmentRangeItemsChange}
          />
          {/* ========= */}
        </div>
        <div className="contact-form-input-grid-box w-full mb-5">
          {/* ======= */}
          <SelectItemWithSearch
            items={objectiveTypes.map((objective) => objective.label)}
            placeholder="Increased brand awareness"
            SearchPlaceholder="Search Increased brand awareness"
            labeltextItem={true}
            labelText="Objective"
            onSelectedItemsChange={handleSelectedObjectiveItemsChange}
          />
          {/* ========= */}
        </div>
        <div className="contact-form-input-grid-box w-full mb-5">
          <TextArea
            htmlFor="desc"
            id="desc"
            name="desc"
            value={data.desc}
            error={dataErrors.desc}
            onChange={handlesendDataChange}
            placeholder="Tell us a little more about your company or project so our team can prepare how best to help you immediately. (1-3 lines)"
            labeltextItem={true}
            labelText="Message/Query"
          />
        </div>
        <PivacyCheckmark
          id="checkmark"
          label="By completing this form, I hereby give my consent to Particular Agency to contact me regarding how they can help with things related to my business and marketing. I also give them permission to send me marketing communications such as newsletters, promotional offers, and information about new products and services. I understand that I can withdraw my consent at any time"
          value="By completing this form, I hereby give my consent to Particular Agency to contact me regarding how they can help with things related to my business and marketing. I also give them permission to send me marketing communications such as newsletters, promotional offers, and information about new products and services. I understand that I can withdraw my consent at any time"
          onChange={handlePrivacyChange}
          error={dataErrors.PivacyCheckmark}
        />
        {step === 2 && (
          <div className="finished-step-btn-box mt-5 flex justify-between items-center gap-[30px]">
            <button
              type="button"
              className="glow-button block"
              onClick={prevStep}
            >
              <span className=" py-[15px] px-[19px]">Previous</span>
              <div className="gradient"></div>
            </button>
            <div className="submite-btn-box  flex items-center gap-4">
              {success && !loading && <p>{success}</p>}
              <button
                type="submit"
                className="next-steps-button glow-button block"
              >
                <span className=" py-[15px] px-[19px]">
                  {loading ? "Loading..." : "Send Message"}
                </span>
                <div className="gradient"></div>
              </button>

              {loading ? <SendStatesLoader /> : ""}
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default BusinessInfo;
