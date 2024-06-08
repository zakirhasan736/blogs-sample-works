const packages = [
  {
    btnType: "btn-dark",
    imgSrc: "accelerated.png",
    title: " Accelerated",
    price: "£1079",
    idealFor: "Founders, Small businesses (1-5 staff members)",
    includes: [
      "10 Pages",
      "SEO Optimisation",
      "1-to-1 Design Consultation",
      "1 month FREE Hosting & Maintenance",
    ],
    buttonLabel: "Select",
    bgColor: "bg-[#E3F0FF]",
  },
  {
    btnType: "btn-dark",
    imgSrc: "online.png",
    title: "Get Online Custom",
    price: "£2079",
    idealFor:
      "Founders, Small businesses (2-10 staff members), SMEs (teams of 10 or more staff)",
    includes: [
      "15 Pages",
      "Basic Animations",
      "SEO Optimisation",
      "1-to-1 Design Consultation",
      "1 month FREE Hosting & Maintenance",
    ],
    buttonLabel: "Select",
    bgColor: "bg-[#CBD7E3]",
    popular: true,
  },
  {
    btnType: "",
    imgSrc: "plan-brand.png",
    title: "Brand",
    price: "£3479",
    idealFor:
      "Founders, small Businesses (teams of 2 to 10 staff) SMEs (teams of 10 or more staff)",
    includes: [
      "20 Pages",
      "Simple/Bespoke Animations",
      "SEO Optimisation",
      "1-to-1 Design Consultation",
      "2 months FREE Hosting & Maintenance",
    ],
    buttonLabel: "Select",
    bgColor: "bg-[#181725] text-white",
  },
  {
    btnType: "",
    imgSrc: "plan-expand.png",
    title: "Brand & Expand",
    price: "£5479",
    idealFor:
      "Founders, small Businesses (teams of 2 to 10 staff) SMEs (teams of 10 or more staff)",
    includes: [
      "25 Pages",
      "Simple/Bespoke Animations",
      "SEO Optimisation",
      "1-to-1 Design Consultation",
      "1 month of Local or National SEO",
      "1 month FREE Hosting & Maintenance",
    ],
    buttonLabel: "Select",
    bgColor: "bg-[#1A1A1A] text-white",
  },
];

export default function Packages() {
  return (
    <div className="custom-container grid grid-cols-2 sm:grid-cols-1 gap-6 p-6">
      {packages.map((plan, index) => (
        <div key={index} className={`rounded p-2 ${plan.bgColor}`}>
          <header
            className="text-center relative mb-5 text-white p-[22px]"
            style={{
              backgroundImage: `url(/images/${plan.imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p className="mdp">
              Particular Lite <br />{" "}
              <span className="font-bold">{plan.title}</span>
            </p>
            <span className="block my-2">from</span>
            <h5 className="text-[24px] font-bold">{plan.price}</h5>
            {plan.popular && (
              <div className="absolute top-2 right-2 text-[white] bg-[#026FEE] py-2 px-3 h-10 w-20 rounded-[96px]">
                Popular
              </div>
            )}
          </header>
          <div className="text-sm p-2">
            <div className="flex gap-6">
              <p>Ideal for:</p>
              <p className="!font-medium">{plan.idealFor}</p>
            </div>
            <div className="flex gap-8 mt-[41px]">
              <p className="underline">Includes*:</p>
              <ul className="!list-disc space-y-2 sm:ml-4">
                {plan.includes.map((item, idx) => (
                  <li key={idx} className="!list-disc">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-right">
            <button className={`btn w-[118px] ${plan.btnType}`}>
              {plan.buttonLabel}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
