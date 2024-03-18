import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

interface SelectItemWithSearchProps {
  items: string[];
  onSelectedItemsChange: (selectedItems: string) => void;
  placeholder: string;
  SearchPlaceholder: string;
  error: string;
  value: any;
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
  error,
  value
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    const updatedSelectedItems = selectedItems.includes(item)
      ? selectedItems.filter((i) => i !== item)
      : [...selectedItems, item];

    setSelectedItems(updatedSelectedItems);
    onSelectedItemsChange(updatedSelectedItems.join(", "));
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
		<div className="select-item-with-search relative" ref={dropdownRef}>
			{labeltextItem && labelText && (
				<label className="label-text text-[16px] text-left text-neu-white font-tertery font-bold leading-normal mb-[5px] block">
					{labelText}
				</label>
			)}
			<div className="input-item-select-filed-box relative">
				<input
					className="input-selected-data"
					type="text"
					value={value}
					onClick={toggleDropdown}
					placeholder={placeholder}
					readOnly
				/>
				<span className="w-[6px] h-[19px] absolute top-0 bottom-0 right-3 mx-auto">
					<Image
						src="/images/icon.svg"
						alt="arrow icons"
						width={6}
						height={19}
					/>
				</span>
				{error ? <span className="text-red-700">{error}</span> : ""}
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
								<label htmlFor={`checkbox-${item}`} className="select-none">
									<input
										type="checkbox"
										id={`checkbox-${item}`}
										checked={selectedItems.includes(item)}
										onChange={() => handleItemClick(item)}
									/>
									{item}
								</label>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default SelectItemWithSearch;
