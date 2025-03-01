import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";
import iconSizes from "../config/iconSizes";
import data from "@/src/assets/dataHome.json";

const BannerMobile = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const banners = data.banners || [];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 810);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [banners]);

  return (
    <>
      <div className="relative flex items-center justify-center w-full lg:h-[500px] md:h-[350px] min-[810px]:h-[300px] xs:h-[58vh] h-[40vh] overflow-hidden bg-darkBlue">
        {banners.map(
          (banner, index) =>
            index === currentIndex && (
              <motion.div
                key={banner.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute w-[90%] flex md:flex-row flex-col items-center justify-center p-6 rounded-lg text-white bg-darkBlue"
              >
                <Image
                  src={isMobile ? banner.backgroundMobile : banner.background}
                  alt="Background image"
                  layout="fill"
                  className="absolute w-fit h-full -z-10"
                />
                <Image
                  src={banner.image}
                  alt="Banner image"
                  width={250}
                  height={250}
                  className="mb-4 min-[810px]:w-[250px] min-[810px]:h-[250px] sm:w-[400px] xs:w-[280px] w-[200px] h-fit md:block"
                />
                <div className="flex flex-col items-center justify-center sm:gap-3 gap-1 md:w-[50%] xs:w-[80%] w-[95%]">
                  <p className="px-4 py-2 rounded-full bg-white/10 text-sm">
                    {banner.subtitle}
                  </p>
                  <p className="text-2xl font-medium text-center max-w-[350px] leading-[32px]">
                    {banner.title}
                  </p>
                  <button className="bg-primaryRed hover:bg-primaryRed/90 transition duration-200 py-3 px-[57px] text-lg font-semibold text-white rounded-[10px] uppercase mt-3">
                    {banner.buttonText}
                  </button>
                  {banner.description && (
                    <p className="text-white text-sm text-center mt-2 px-4 sm:block hidden">
                      {banner.description}
                    </p>
                  )}
                </div>
              </motion.div>
            )
        )}
      </div>
      <div className="flex space-x-2 pb-10">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`w-2 h-2 rounded-full transition duration-200 ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default BannerMobile;
