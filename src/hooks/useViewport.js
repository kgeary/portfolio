import React, { createContext, useContext, useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const MAX_MOBILE_WIDTH = 700;

const ViewportContext = createContext({
  width: window.innerWidth,
  isLarge: window.innerWidth > MAX_MOBILE_WIDTH,
})

export const ViewportProvider = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    AOS.refresh();
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    AOS.init();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <ViewportContext.Provider value={{ width, isLarge: width > MAX_MOBILE_WIDTH }}>
      {children}
    </ViewportContext.Provider>
  )
}
export function useViewport() {
  return useContext(ViewportContext)
}