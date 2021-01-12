import React, { useState, useEffect } from 'react'

import {useGlobalStateContext} from '@components/../context/globalContext'

const CustomCursor = () => {
  const {cursorType} = useGlobalStateContext()
  const [mousePosition, setMousePosition] = useState({
    x: null,
    y: null
  })

  const onMouseMove = event => {
    const {pageX: x, pageY: y} = event;
    setMousePosition({x, y})
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    return () => {
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <div className={`cursor ${!!cursorType ? 'hovered' : ''} ${cursorType}`} style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}/>
    </>
  )
}

export default CustomCursor