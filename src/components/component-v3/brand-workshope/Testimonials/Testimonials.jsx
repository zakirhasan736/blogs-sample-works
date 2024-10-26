"use client";
import React, { useState } from "react";
import "./Testimonials.css";

const TestimonialSlider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			imageSrc: "/images/brand-workshope/woman.svg",
			contentSrc: "/images/brand-workshope/tone.svg",
			alt: "Testimonial 1",
		},
		{
			imageSrc: "/images/brand-workshope/woman.svg",
			contentSrc: "/images/brand-workshope/tone.svg",
			alt: "Testimonial 2",
		},
		{
			imageSrc: "/images/brand-workshope/woman.svg",
			contentSrc: "/images/brand-workshope/tone.svg",
			alt: "Testimonial 3",
		},
	];

	const goToSlide = index => {
		setCurrentSlide(index);
	};

	return (
		<div className="testimonial-section">
			<h2>Our Testimonials</h2>
			<div className="slider">
				<div className="slide-container">
					<div className="slide-image">
						<img
							src={slides[currentSlide].imageSrc}
							alt={slides[currentSlide].alt}
						/>
					</div>
					<div className="slide-content">
						<img
							src={slides[currentSlide].contentSrc}
							alt={`${slides[currentSlide].alt} content`}
						/>
					</div>
				</div>
			</div>
			<div className="slider-nav">
				{slides.map((_, index) => (
					<button
						key={index}
						className={`nav-button ${index === currentSlide ? "active" : ""}`}
						onClick={() => goToSlide(index)}>
						{index + 1}
					</button>
				))}
			</div>
		</div>
	);
};

export default TestimonialSlider;
 