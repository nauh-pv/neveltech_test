import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const banners = [
  {
    id: 1,
    title: "Piggy Christmas Tap: €35,000 For Your Wins",
    subtitle: "Exclusive Tournament",
    buttonText: "Join and win",
    image: "/images/Banner/image.png",
    background: "/svg/bg_banner.svg",
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
    <div className="relative flex items-center justify-center w-full h-[585px] overflow-hidden bg-darkBlue">
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
            <div className="flex flex-col items-center justify-center w-[50%] gap-3">
              <p className="px-4 py-2 rounded-full bg-white/10">
                {banner.subtitle}
              </p>
              <p className="text-4xl font-extrabold w-[420px] leading-[59px] text-center">
                {banner.title}
              </p>
              <button className="bg-primaryRed hover:bg-primaryRed/90 transition duration-200 py-[14px] px-[87px] text-[21px] leading-[21px] font-semibold text-white rounded-[10px] uppercase">
                {banner.buttonText}
              </button>
              {banner.description && (
                <p className="text-white leading-[19px] px-[60px] mt-2 text-center">
                  {banner.description}
                </p>
              )}
            </div>
            <Image
              src={banner.image}
              alt="Banner image"
              width={500}
              height={500}
              className="ml-6"
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default Banner;
