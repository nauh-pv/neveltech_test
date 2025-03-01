import Image from "next/image";
import { CiCircleInfo } from "react-icons/ci";
import iconSizes from "../config/iconSizes";

const Banner = () => {
  return (
    <div className="min-h-[585px] w-[100vw] relative overflow-hidden items-center justify-center gap-10 xs:flex hidden">
      <div className="absolute top-0 -left-[37%] h-full overflow-hidden w-[60%] opacity-40 scale-[0.8]">
        <CiCircleInfo
          size={iconSizes.medium}
          className="absolute top-24 right-10"
        />
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <div className="flex flex-col items-center justify-center gap-2 w-[50%]">
            <p className="px-[16.4px] py-[5.7px] rounded-full text-white bg-white/10">
              Exclusive Tournament
            </p>
            <p className="text-[42px] leading-[59px] font-extrabold text-white flex items-center justify-center max-w-[480px] text-center">
              Piggy Christmas Tap: €35,000 For Your Wins
            </p>
            <button className="bg-primaryRed pt-[16px] pb-[12px] px-[87px] text-[21px] leading-[21px] font-semibold text-white rounded-[10px] uppercase">
              Join and win
            </button>
          </div>
          <Image
            src="/images/Banner/image1.png"
            alt="Image pig banner"
            width={500}
            height={500}
          />
        </div>
        <Image
          src="/svg/bg_banner_blue.svg"
          alt="banner"
          width={500}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-0 h-full flex items-center justify-center w-[60%] overflow-hidden">
        <CiCircleInfo
          size={iconSizes.medium}
          className="absolute top-24 right-8"
        />
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <div className="flex flex-col items-center justify-center gap-2 w-[50%]">
            <p className="px-[16.4px] py-[5.7px] rounded-full text-white bg-white/10">
              Exclusive Tournament
            </p>
            <p className="text-[42px] leading-[59px] font-extrabold text-white flex items-center justify-center max-w-[480px] text-center">
              Piggy Christmas Tap: €35,000 For Your Wins
            </p>
            <button className="bg-primaryRed pt-[16px] pb-[12px] px-[87px] text-[21px] leading-[21px] font-semibold text-white rounded-[10px] uppercase">
              Join and win
            </button>
          </div>
          <Image
            src="/images/Banner/image.png"
            alt="Image pig banner"
            width={500}
            height={500}
          />
        </div>
        <Image
          src="/svg/bg_banner.svg"
          alt="banner"
          width={500}
          height={1000}
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-0 -right-[37%] h-full overflow-hidden w-[60%] opacity-40 scale-[0.8]">
        <CiCircleInfo
          size={iconSizes.medium}
          className="absolute top-24 right-8"
        />
        <div className="absolute w-full h-full flex items-center justify-center top-0 left-0">
          <div className="flex flex-col items-center justify-center gap-2 w-[50%]">
            <p className="px-[16.4px] py-[5.7px] rounded-full text-white bg-white/10">
              CashBack
            </p>
            <p className="text-[42px] leading-[59px] font-extrabold text-white flex items-center justify-center max-w-[480px] text-center">
              Win or Get Back up to €100
            </p>
            <button className="bg-primaryRed pt-[16px] pb-[12px] px-[87px] text-[21px] leading-[21px] font-semibold text-white rounded-[10px] uppercase">
              Discover More
            </button>
            <p className="text-white text-[13.75px] leading-[19.25px] w-[367px] flex content-center text-center mt-2">
              See your best cashback offers for Slots, Live Games, and Crash
              Games. Play and get your money back daily!
            </p>
          </div>
          <Image
            src="/images/Banner/image.png"
            alt="Image pig banner"
            width={500}
            height={500}
          />
        </div>
        <Image
          src="/svg/bg_banner_blue.svg"
          alt="banner"
          width={500}
          height={1000}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Banner;
