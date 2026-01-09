import * as React from 'react';

const Layout = ({ children }) => {
	return (
		<div className="relative min-h-screen w-full bg-dark-bg text-white selection:bg-primary-500 selection:text-black">
			<main className="relative z-10 w-full h-full">{children}</main>
		</div>
	);
};

export default Layout;
