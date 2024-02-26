import ColorCraftSwitch from "./colorcraftswitch";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Colour Craft - Particular Agency London",
	description:
		"Unleash your creativity with our intuitive color picker feature! Easily explore and select the perfect shades for your design projects. Ideal for graphic designers, artists, and anyone looking to find their ideal color palette. Start crafting visually stunning works now",
};
export default function page() {
	return <ColorCraftSwitch />;
}
