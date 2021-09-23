import React, { useEffect, useRef  } from 'react'

import {useGlobalStateContext} from '@components/../context/globalContext'

import { Cursor } from "@styles/globalStyles"

const CustomCursor = () => {
  const { cursorType } = useGlobalStateContext()
  const cursor = useRef(null);

  // const result = !!cursorType ? 'hovered' : '';
  // console.log(cursorType, result)

  const onMouseMove = event => {
    const { clientX, clientY } = event
    cursor.current.style.left = `${clientX}px`;
    cursor.current.style.top = `${clientY}px`;
  }

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove)
    return () => {
      document.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <>
      <Cursor
        className={`cursor ${!!cursorType ? 'hovered' : ''} ${cursorType}`}
        // style={{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}
        ref = {cursor}
      />
    </>
  )
}

export default CustomCursor