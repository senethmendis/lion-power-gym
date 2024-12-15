import React from "react";

const Section = ({ children, className }) => {
	return (
		<section
			className={`${className} py-2 sm:py-4 md:py-10 px-3 sm:px-3 lg:px-0 flex flex-col gap-3`}>
			{children}
		</section>
	);
};

export default Section;
