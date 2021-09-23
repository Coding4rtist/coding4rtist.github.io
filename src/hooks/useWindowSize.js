import { useState, useEffect } from "react";

let defaultWidth;
let defaultHeight;

if (typeof window !== `undefined`) {
  defaultWidth = window.innerWidth;
  defaultHeight = window.innerHeight;
}

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: defaultWidth,
    height: defaultHeight,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}