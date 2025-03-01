import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";
import iconSizes from "../config/iconSizes";

const banners = [
  {
    id: 1,
    title: "Piggy Christmas Tap: €35,000 For Your Wins",
    subtitle: "Exclusive Tournament",
    buttonText: "Join and win",
    image: "/images/Banner/image.png",
    background: "/svg/bg_banner_green.svg",
  },
  {
    id: 2,
    title: "Win or Get Back up to €100",
    subtitle: "CashBack",
    buttonText: "Discover More",
    image: "/images/Banner/image2.png",
    background: "/svg/bg_banner_blue.svg",
    description:
      "See your best cashback offers for Slots, Live Games, and Crash Games. Play and get your money back daily!",
  },
  {
    id: 3,
    title: "Piggy Christmas Tap: €35,000 For Your Wins",
    subtitle: "Exclusive Tournament",
    buttonText: "Join and win",
    image: "/images/Banner/image1.png",
    background: "/svg/bg_banner_blue.svg",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative flex items-center justify-center w-full 3xl:h-[585px] 2xl:h-[530px] xl:h-[450px] h-[350px] overflow-hidden bg-darkBlue">
      {banners.map((banner, index) => {
        const isActive = index === currentIndex;
        const isPrev = (index + 1) % banners.length === currentIndex;
        const isNext =
          (index - 1 + banners.length) % banners.length === currentIndex;

        return (
          <motion.div
            key={banner.id}
            initial={{ opacity: 0.4, scale: 0.8 }}
            animate={{
              opacity: isActive ? 1 : 0.4,
              scale: isActive ? 1 : 0.8,
              x: isPrev ? "-95%" : isNext ? "95%" : "0%",
            }}
            transition={{ duration: 0.5 }}
            className={`absolute w-[60%] flex flex-row items-center justify-between p-6 rounded-lg text-white transition-transform transform ${
              isActive ? "z-10" : ""
            }`}
            onClick={() => goToSlide(index)}
          >
            <Image
              src={banner.background}
              alt="Background image"
              layout="fill"
              className="absolute w-full h-full -z-10"
            />
            <div className="absolute 3xl:top-14 xl:top-10 top-6 3xl:right-8 xl:right-10 right-10 cursor-pointer hover:text-primaryBlue transition duration-200">
              <CiCircleInfo size={iconSizes.medium} />
            </div>
            <div className="flex flex-col items-center justify-center xl:w-[50%] w-[65%] 2xl:gap-3 xl:gap-[8px] gap-1">
              <p className="px-4 py-2 rounded-full bg-white/10">
                {banner.subtitle}
              </p>
              <p className="2xl:text-4xl xl:text-3xl text-2xl font-extrabold 2xl:w-[420px] w-[300px] leading-[40px] 2xl:leading-[59px] text-center">
                {banner.title}
              </p>
              <button
                className="bg-primaryRed hover:bg-primaryRed/90 transition duration-200 xl:py-[14px] py-[10px] 2xl:px-[87px] px-[50px] 2xl:text-[21px] text-[18px] leading-[21px] 
              font-semibold text-white rounded-[10px] uppercase"
              >
                {banner.buttonText}
              </button>
              {banner.description && (
                <p className="text-white leading-[19px] 2xl:px-[60px] xl:px-[30px] px-[15px] xl:block hidden mt-2 text-center">
                  {banner.description}
                </p>
              )}
            </div>
            <Image
              src={banner.image}
              alt="Banner image"
              width={500}
              height={500}
              className="ml-6 3xl:w-[500px] 2xl:w-[400px] xl:w-[350px] w-[250px] h-fit"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Banner;
