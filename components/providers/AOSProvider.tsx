"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
