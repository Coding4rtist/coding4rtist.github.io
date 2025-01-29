import * as React from 'react';

function Content({ title, body, colorText, children }) {
	return (
		<>
			{title && (
				<h2
					className={`text-3xl font-bold m-0 z-20 ${colorText || 'text-white'}`}
				>
					{title}
				</h2>
			)}
			{body && <p className="m-0 font-light text-base">{body}</p>}
			{children}
		</>
	);
}

export default Content;
