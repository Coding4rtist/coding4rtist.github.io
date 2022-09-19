import React, { useRef, useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
export default function useOuterClick(callback) {
	const callbackRef = useRef() // initialize mutable ref, which stores callback
	const innerRef = useRef() // returned to client, who marks "border" element

	// update cb on each render, so second useEffect has access to current value
	useEffect(() => {
		callbackRef.current = callback
	})

	useEffect(() => {
		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
		function handleClick(e) {
			if (
				innerRef.current &&
				callbackRef.current &&
				!innerRef.current.contains(e.target)
			)
				callbackRef.current(e)
		}
	}, []) // no dependencies -> stable click listener

	return innerRef // convenience for client (doesn't need to init ref himself)
}
