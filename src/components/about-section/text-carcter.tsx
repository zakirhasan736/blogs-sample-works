"use client";
import React, { useState } from "react";

const TextCarecter: React.FC = () => {

	return (
			<section className="carecter-text">
				<p>
					<span contentEditable={true}>
						Particular: The London Digital Agency For People-First Marketing
					</span>
				</p>
			</section>
	);
};

export default TextCarecter;
