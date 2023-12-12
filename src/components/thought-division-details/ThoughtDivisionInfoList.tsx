


interface ThoughtDivisionItem {
  detailsinfo_title?: string;
  detailsinfo_description?: string;
    infoList?: string[];
}

interface ThoughtDivisionInfoListProps {
  items: ThoughtDivisionItem[];
  division: {
  modalScrollText?: string;
  thoughtDivisionTitle?: string;
  thoughtDivisionSubtitle?: string;
  }

}

const ThoughtDivisionInfoList: React.FC<ThoughtDivisionInfoListProps> = ({ items, division }) => {
  return (
    <div className="thought-division-details-cont-box col-span-14 col-start-3 w-full relative">
      <div className="modal-text-box absolute z-[-10]">
        <div className="modal-scroll-text scrolling-text whitespace-nowrap text-transparent text-modal-heading font-primary font-normal leading-[170%]">
          {division.modalScrollText || ''}
        </div>
      </div>
      <div className="thought-division-title-box relative z-10">
        <h2 className="thought-division-title whitespace-nowrap text-left text-text--large font-primary font-normal tracking-[.8px] uppercase leading-normal">
          {division.thoughtDivisionTitle || ''}
        </h2>
        <span className="divider-shape h-[1px] w-[61px] bg-neu-white block"></span>
      </div>
      <div className="thought-division-info-text-box max-w-[940px] w-full ml-auto mt-[17px] relative z-10">
        <h4 className="thought-division-subtitle mb-5 thought-division-title text-neu-white text-left text-text--large font-primary font-bold tracking-[.8px] leading-[190%]">
          {division.thoughtDivisionSubtitle || 'Free-thought at Particular involves pursuing new and often non-conventional ideas'}
        </h4>
        <div className="thought-division-details-box">
          {items?.map((item, index) => (
            <div key={index} className="thought-division-details-info-item mb-5">
              <p className="details-info-text text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal mb-3">
                {item.detailsinfo_title}
              </p>
              <p className="info-desc text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal">
                {item.detailsinfo_description}
              </p>
              {item.infoList && (
                <ul className="thought-division-info-list pl-5">
                  {item.infoList.map((info, idx) => (
                    <li key={idx} className="thought-division-info-text text-text-medium-4 text-left text-neu-white font-primary font-medium leading-normal mb-3 list-disc">
                      {info}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThoughtDivisionInfoList;
