"use client";
import React, { useState } from "react";
import ColorCraftUIModal from "@/app/features/colour-craft/steps/ColorCraftUi";
import ColorCraftEnterModal from "@/app/features/colour-craft/steps/ColorCraftEnter";

const ColorCraftSwitch = () => {
	const [isEntered, setIsEntered] = useState(false);

	const handleEnter = () => {
		// Perform any actions you need when entering the ColorCraftUIPage
		setIsEntered(true);
	};
	return (
		<>
			{!isEntered ? (
				<ColorCraftEnterModal onEnter={handleEnter} />
			) : (
				<ColorCraftUIModal />
			)}
		</>
	);
};

export default ColorCraftSwitch;
