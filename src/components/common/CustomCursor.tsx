import { useEffect } from "react";
import gsap from "gsap";

const CustomCursor = () => {
	useEffect(() => {
		const cursor = document.querySelector(".cursor");
		let mouseX = 0;
		let mouseY = 0;
		const section = document.querySelector(
			".home-banner-section",
		) as HTMLElement;

		function handleMouseMove(e: MouseEvent) {
			mouseX = e.clientX - section.getBoundingClientRect().left;
			mouseY = e.clientY - section.getBoundingClientRect().top;
		}

		gsap.to({}, 0.016, {
			repeat: -1,
			onRepeat: function () {
				gsap.set(cursor, {
					left: mouseX,
					top: mouseY,
				});
			},
		});

		section.addEventListener("mousemove", handleMouseMove);


		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return <div className="cursor"></div>;
};

export default CustomCursor;
