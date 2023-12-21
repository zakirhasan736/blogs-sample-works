import { ArrowUpIcons } from '@/icons';
import React from "react";
interface BackToTopProps {}

const BackToTop: React.FC<BackToTopProps> = () => {
  return (
    <>
      <button className="back-to-top-btn  flex-col items-end gap-2 absolute top-[110px] right-0 hidden">
        <span className="angle-up-icon-item p-[7.5px] bg-neu-light-blue w-[45px] h-[45px]">
         <ArrowUpIcons />
        </span>
        <p className="btn-text text-text-medium-4 text-neu-black-2 text-right font-medium font-primary">
          Back to top
        </p>
      </button>
    </>
  );
}

export default BackToTop;
