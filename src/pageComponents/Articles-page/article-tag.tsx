// article-tag.tsx
import React from "react";

interface TagsListProps {
	tags?: string[];
}

const TagsList: React.FC<TagsListProps> = ({ tags }) => {
	return (
		<ul className="articles-tags-list flex flex-wrap gap-[10px] items-center">
			{tags &&
				tags.map((tag, index) => (
					<li
						key={index}
						className="tags-list-item text-neu-white text-[16px] sm:text-[14px] font-normal font-tertery px-[15px] py-[10px] bg-[#ffffff20]">
						{tag}
					</li>
				))}
		</ul>
	);
};

export default TagsList;
