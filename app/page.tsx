"use client";
import AllProviders from "@/src/components/AllProviders";
import Banner from "@/src/components/Banner";
import BannerMobile from "@/src/components/BannerMobile";
import ExclusiveGames from "@/src/components/ExclusiveGames";
import FeaturesMenu from "@/src/components/FeaturesMenu";
import DefaultLayout from "@/src/layouts/DefaultLayout";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1280);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <DefaultLayout>
      {isMobile ? <BannerMobile /> : <Banner />}
      <div className="flex flex-col gap-8 responsive-padding">
        <FeaturesMenu />
        <ExclusiveGames />
        <AllProviders />
      </div>
    </DefaultLayout>
  );
}
