import React, { useRef, useCallback, useState, useEffect } from 'react'
import { Cursor, CursorOuter } from '@styles/globalStyles'

// Context
import { useGlobalStateContext } from '@context/globalContext'

// Hooks
import { useEventListener } from '@hooks/useEventListener'

// const CustomCursor = () => {
// 	return <div></div>
// }

const CustomCursor = () => {
	const { cursorType } = useGlobalStateContext()
	const [mousePosition, setMousePosition] = useState({ x: 400, y: 400 })
	const [isVisible, setIsVisible] = useState(false)
	const [isActive, setIsActive] = useState(false)

	// const onMouseMove = event => {
	//   const {pageX: x, pageY: y} = event;
	//   setMousePosition({x, y})
	// }

	const cursorOuterRef = useRef()
	const cursorInnerRef = useRef()
	const requestRef = useRef()
	const previousTimeRef = useRef()
	const trailingSpeed = 8
	let endX = useRef(0)
	let endY = useRef(0)

	const onMouseMove = useCallback(({ clientX, clientY }) => {
		setMousePosition({ x: clientX, y: clientY })
		cursorInnerRef.current.style.top = `${clientY}px`
		cursorInnerRef.current.style.left = `${clientX}px`
		endX.current = clientX
		endY.current = clientY
	}, [])

	// Outer Cursor Animation Delay
	const animateOuterCursor = useCallback(
		time => {
			if (previousTimeRef.current !== undefined) {
				mousePosition.x += (endX.current - mousePosition.x) / trailingSpeed
				mousePosition.y += (endY.current - mousePosition.y) / trailingSpeed
				cursorOuterRef.current.style.top = `${mousePosition.y}px`
				cursorOuterRef.current.style.left = `${mousePosition.x}px`
			}
			previousTimeRef.current = time
			requestRef.current = requestAnimationFrame(animateOuterCursor)
		},
		[requestRef]
	)

	// RAF for animateOuterCursor
	useEffect(() => {
		requestRef.current = requestAnimationFrame(animateOuterCursor)
		return () => {
			cancelAnimationFrame(requestRef.current)
		}
	}, [animateOuterCursor])

	// Mouse Events State updates
	const onMouseDown = useCallback(() => {
		setIsActive(true)
	}, [])

	const onMouseUp = useCallback(() => {
		setIsActive(false)
	}, [])

	const onMouseEnterViewport = useCallback(() => {
		setIsVisible(true)
	}, [])

	const onMouseLeaveViewport = useCallback(() => {
		setIsVisible(false)
	}, [])

	useEventListener('mousemove', onMouseMove)
	useEventListener('mousedown', onMouseDown)
	useEventListener('mouseup', onMouseUp)
	useEventListener('mouseover', onMouseEnterViewport)
	useEventListener('mouseout', onMouseLeaveViewport)

	// Cursors Hover/Active State
	useEffect(() => {
		if (isActive) {
			cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${0.8})`
			cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${1.5})`
		} else {
			cursorInnerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
			cursorOuterRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
		}
	}, [isActive])

	// Cursor Visibility State
	useEffect(() => {
		if (isVisible) {
			cursorInnerRef.current.style.opacity = 1
			cursorOuterRef.current.style.opacity = 1
		} else {
			cursorInnerRef.current.style.opacity = 0
			cursorOuterRef.current.style.opacity = 0
		}
	}, [isVisible])

	return (
		<>
			<Cursor
				inner
				ref={cursorInnerRef}
				className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
			/>
			<Cursor
				outer
				ref={cursorOuterRef}
				className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
			/>
			{/* <Cursor
				ref={cursorInnerRef}
				className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
				// style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
			/>
			<CursorOuter
				ref={cursorOuterRef}
				className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
				// style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
			/> */}
		</>
	)
}

export default CustomCursor
