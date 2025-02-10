import * as React from 'react';

function Button({ rounded, children }) {
	return (
		// <button
		// 	className={`custom-btn text-xl max-h-[50px] shadow-custom shadow-primary-500 active:shadow-none active:translate-x-[3px] active:translate-y-[3px] text-gray-200 px-5 py-2 border border-primary-500 hover:text-primary-500 transition-colors duration-100 ease-in-out bg-gray-900 cursor-pointer ${
		// 		rounded ? 'rounded-full' : 'rounded-lg'
		// 	}`}
		// >
		// 	{children}
		// </button>
		<button
			className={`group/button relative flex w-fit items-center justify-center overflow-hidden cursor-pointer rounded-md border-2 border-slate-900 bg-darkslate-200 px-4 py-2 font-bold transition-transform ease-out  hover:scale-105' ${''}
				}`}
		>
			<span
				className={
					'absolute inset-0 z-0 h-full translate-y-[90%] bg-yellow-500 transition-transform  duration-300 ease-in-out group-hover/button:translate-y-0'
				}
			></span>
			<span className="relative flex items-center justify-center gap-2">
				{children}
			</span>
		</button>
	);
}

export default Button;
