"use client";

import { useEffect, useState } from "react";
import FooterCertifications from "./Certifications";
import DownloadApp from "./DownloadApp";
import HelpCenter from "./HelpCenter";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Footer = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="flex w-full flex-col lg:flex-row justify-between xl:px-[240px] lg:px-[100px] lg:py-[60px] pt-[40px] bg-secondAzure">
      {isMobile && <MenuMobile />}
      <HelpCenter />
      {!isMobile && <MenuDesktop />}
      <DownloadApp />
      <FooterCertifications />
    </footer>
  );
};

export default Footer;
