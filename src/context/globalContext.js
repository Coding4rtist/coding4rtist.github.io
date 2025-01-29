import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Define the conext
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// Reducer
const globalReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME': {
			// Add the dark class for tailwindcss
			const root = document.documentElement;
			if (action.theme === 'light') {
				root.classList.remove('dark');
			} else {
				root.classList.add('dark');
			}

			// Store the theme preference in localStorage
			if (typeof window !== 'undefined') {
				window.localStorage.setItem('theme', action.theme);
			}

			return {
				...state,
				currentTheme: action.theme,
			};
		}
		case 'CURSOR_TYPE': {
			return {
				...state,
				cursorType: action.cursorType,
			};
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const GlobalProvider = ({ children }) => {
	// Initial state
	let theme = 'light';
	if (typeof window !== 'undefined') {
		// Access local storage only on the client side
		// theme = window.localStorage.getItem('theme') || theme;
	}

	const [state, dispatch] = useReducer(globalReducer, {
		currentTheme: theme,
		cursorType: false,
		cursorStyles: ['theme', 'hovered', 'plus', 'minus'],
	});

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Access local storage only on the client side
			const newTheme = window.localStorage.getItem('theme') || theme;
			dispatch({ type: 'TOGGLE_THEME', theme: newTheme });
		}
	}, [theme]);

	return (
		<GlobalDispatchContext.Provider value={dispatch}>
			<GlobalStateContext.Provider value={state}>
				{children}
			</GlobalStateContext.Provider>
		</GlobalDispatchContext.Provider>
	);
};

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
