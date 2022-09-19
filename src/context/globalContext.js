import React, { createContext, useReducer, useContext } from 'react'

// Define the conext
const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {
	switch (action.type) {
		case 'TOGGLE_THEME': {
			return {
				...state,
				currentTheme: action.theme,
			}
		}
		case 'CURSOR_TYPE': {
			return {
				...state,
				cursorType: action.cursorType,
			}
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

export const GlobalProvider = ({ children }) => {
	// Initial state
	let theme = 'light'
	if (
		typeof window !== `undefined` &&
		window.localStorage.getItem('theme') != null
	) {
		theme = window.localStorage.getItem('theme')
	}
	const [state, dispatch] = useReducer(globalReducer, {
		currentTheme: theme,
		cursorType: false,
		cursorStyles: ['theme', 'hovered', 'plus', 'minus'],
	})

	return (
		<GlobalDispatchContext.Provider value={dispatch}>
			<GlobalStateContext.Provider value={state}>
				{children}
			</GlobalStateContext.Provider>
		</GlobalDispatchContext.Provider>
	)
}

// Custom hooks to use dispatch and state
export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
