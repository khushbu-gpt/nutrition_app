"use client";
import { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AnimationWrapper({children}:{children:ReactNode}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,       
      easing: 'ease-in-out',
      once: false,          
      offset: 120,          
    });
  }, []);
 return <>{children}</>
}
