"use client";
import React, { useState, useEffect } from "react";
import LoadingScreen from "@/components/common/pre-loader/LoadingScreen";
import { Footer } from "@/components";
import Navbar from "@/components/navbar/navbar";

export default function Template({ children }: { children: React.ReactNode }) {
	const [pageLoaded, setPageLoaded] = useState(false);

	useEffect(() => {
		const onLoad = () => {
			setPageLoaded(true);
		};

		window.addEventListener("load", onLoad);

		return () => {
			window.removeEventListener("load", onLoad);
		};
	}, []);

	return (
		<>
			<Navbar />
			<main className="pca-marketing-main-wraper">{children}</main>
			<Footer />
			{!pageLoaded && (
				<LoadingScreen  />
			)}
		</>
	);
}
