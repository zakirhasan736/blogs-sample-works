import React from "react";
import Image from "next/image";
import Link from "next/link";

interface SingleBlogDetailsInfoProps {
  data: {
    singleBlogDetailsDesc?: string;
    blogDetailsInfoItems?: {
      title?: string;
      desc?: string;
      itemListDesc: string[];
      itemList: string[];
      itemDescList: string[][];
      listDesc?: string[];
      image?: string;
      video?: string;
    }[];
  };
}

const SingleBlogDetailsInfo: React.FC<SingleBlogDetailsInfoProps> = ({
  data,
}) => {
  return (
    <>
      {data.singleBlogDetailsDesc && (
        <p className="!opacity-100 blog-first-desc text-[16px] text-center text-[#181725] font-accent font-normal leading-6 mb-10">
          {data.singleBlogDetailsDesc}
        </p>
      )}
      <div className="blog-details-info-wrap mb-[67px] md:mb-[45px] sm:mb-[30px]">
        {data.blogDetailsInfoItems &&
          data.blogDetailsInfoItems.map((item, index) => (
            <div className="blog-details-info-item mb-7" key={index}>
              {(item.image || item.video) && (
                <div className="blog-details-info-image mb-[77px] md:mb-[45px] sm:mb-[35px] w-full max-w-[694px] h-[400px]">
                  {item.image && (
                    <Image
                      src={`/images/blogs/${item.image}`}
                      alt="blog details modal image"
                      width={655}
                      className="w-full h-full"
                      height={400}
                    />
                  )}
                  {item.video && (
                    <video
                      autoPlay
                      muted
                      loop
                      className="w-full h-full object-cover"
                    >
                      <source
                        src={`/images/blogs/${item.video}`}
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
              {item.title && (
                <h3 className="blog-details-info-title mb-4 sm:mb-7 text-[16px] text-left text-[#181725] font-primary font-bold leading-6">
                  {item.title}
                </h3>
              )}
              {item.desc && (
                <p className="!opacity-100 blog-details-desc text-[16px] sm:text-[14px] text-left text-[#181725] font-accent font-normal leading-6">
                  {item.desc}
                </p>
              )}

              <div className="blog-details-list-info-box mt-[34px]">
                {item.itemListDesc.map((listDesc, listIndex) => (
                  <p
                    key={listIndex}
                    className="!opacity-100 list-info-box-text mb-5 text-[18px] sm:text-[16px] text-left text-[#181725] font-accent font-normal leading-[150%]"
                  >
                    {listDesc}
                  </p>
                ))}
                {item.itemList && (
                  <ul className="info-box-list-items mb-5 pl-5">
                    {item.itemList.map((listItem, listItemIndex) => (
                      <li
                        key={listItemIndex}
                        className="list-disc info-box-list-item text-[18px] sm:text-[16px] text-left text-[#181725] font-accent font-normal leading-[150%]"
                      >
                        {listItem}
                      </li>
                    ))}
                  </ul>
                )}
                {item.listDesc && (
                  <div>
                    {item.listDesc.map((desc, descIndex) => (
                      <p
                        key={descIndex}
                        className="!opacity-100 list-info-box-text mb-5 text-[18px] sm:text-[16px] text-left text-[#181725] font-accent font-normal leading-[150%]"
                      >
                        {desc}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default SingleBlogDetailsInfo;
