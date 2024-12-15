import React from "react";
import { Outlet, useParams } from "react-router-dom";
import { Header } from "@/components/common/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

const Layout = () => {
	return (
		<main className="w-full h-screen max-w-[1280px] mx-auto">
			{/* header */}
			<ThemeProvider
				defaultTheme="dark"
				storageKey="vite-ui-theme">
				<Header />
				{/* children for all the other pages */}
				<Outlet />
			</ThemeProvider>
			{/* Footer */}
		</main>
	);
};

export default Layout;
