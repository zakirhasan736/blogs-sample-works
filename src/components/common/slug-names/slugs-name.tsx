import React from "react";
type SlugListProps = {
	slugs?: string[]; // Assuming the slugs are an array of strings
};

const SlugList: React.FC<SlugListProps> = ({ slugs }) => {
	return (
		<ul className="thought-division-slug flex flex-col-reverse md:flex-row items-start left-0 top-20 md:top-0 absolute gap-10 md:gap-2 md:relative">
			{slugs?.map((slug, index) => (
				<li
					key={index}
					className="slugs-item whitespace-nowrap text-neu-white text-left uppercase text-text-xxs-small font-normal font-primary tracking-[.56px]">
					{slug || ""}
				</li>
			))}
		</ul>
	);
};

export default SlugList;
