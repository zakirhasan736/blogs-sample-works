import Image from "next/image";
import React, { useState } from "react";

interface SelectItemWithSearchProps {
	items: string[];
	onSelectedItemsChange: (selectedItems: string) => void;
	placeholder: string;
	SearchPlaceholder: string;
	labelText?: string;
	labeltextItem?: boolean;
}

const SelectItemWithSearch: React.FC<SelectItemWithSearchProps> = ({
	items,
	onSelectedItemsChange,
	placeholder,
	SearchPlaceholder,
	labeltextItem,
	labelText,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleItemClick = (item: string) => {
		const updatedSelectedItems = selectedItems.includes(item)
			? selectedItems.filter(i => i !== item)
			: [...selectedItems, item];

		setSelectedItems(updatedSelectedItems);
		onSelectedItemsChange(updatedSelectedItems.join(", ")); // Pass the selected items as a comma-separated string
	};

	const filteredItems = items.filter(item =>
		item.toLowerCase().includes(searchTerm.toLowerCase()),
	);

	return (
		<div className="select-item-with-search relative">
			{labeltextItem && labelText && (
				<label className="label-text text-[16px] text-left text-neu-white font-tertery font-bold leading-normal mb-[5px] block">
					{labelText}
				</label>
			)}
			<div className="input-item-select-filed-box relative">
				<input
					className="input-selected-data"
					type="text"
					value={selectedItems.join(", ")}
					onClick={toggleDropdown}
					placeholder={placeholder}
					readOnly // Make the input read-only to prevent direct editing
				/>
				<span className="w-[6px] h-[19px] absolute top-0 bottom-0 right-3 mx-auto">
					<Image
						src="/images/icon.svg"
						alt="arrow icons"
						width={6}
						height={19}
					/>
				</span>
			</div>
			{isOpen && (
				<div className="dropdown-box">
					<div className="search-bar px-[14px] py-[15px]">
						<input
							type="text"
							value={searchTerm}
							onChange={e => setSearchTerm(e.target.value)}
							placeholder={SearchPlaceholder}
						/>
					</div>
					<ul>
						{filteredItems.map(item => (
							<li key={item}>
								<input
									type="checkbox"
									checked={selectedItems.includes(item)}
									onChange={() => handleItemClick(item)}
								/>
								{item}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SelectItemWithSearch;
