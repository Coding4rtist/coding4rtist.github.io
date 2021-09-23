// import { useState, useEffect } from "react"
// // import useWindowSize from './useWindowSize'


// export default function useElementRect(el, displayElement) {
//   const [elementTransform, setElementTrasnform] = useState({transform: ""})

//   useEffect(() => {
//     function handleRect() {
//       // let element = el.current
//       const { top, left, width, height } = el.getBoundingClientRect()
//       // const size = useWindowSize();
//       var leftOffset = left - (window.innerWidth - width) / 2;
//       const centerTop = top - (window.innerHeight - height) / 2
//       const scaleWidth = el.clientWidth / displayElement.clientWidth
//       const scaleHeight = el.clientHeight / displayElement.clientHeight

//       // let x = element.getBoundingClientRect().left + document.documentElement.scrollLeft + element.offsetWidth / 2
//       // let y = element.getBoundingClientRect().top + document.documentElement.scrollTop + element.offsetHeight / 2
//       setElementTrasnform({transform: `transform:translate3D(${leftOffset}px, ${centerTop}px, 0) scale3D(${scaleWidth}, ${scaleHeight}, 0)`})
//     }
//     handleRect()
//   }, [el, displayElement])

//   return elementTransform
// }