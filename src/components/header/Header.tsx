"use client";

import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

import MenuHeader from "@/src/components/header/MenuHeader";
import iconSizes from "../../config/iconSizes";

const Header = () => {
  return (
    <header className="py-[16px] fixed z-50 w-full h-fit flex items-center justify-between px-[240px] border-b-[1px] border-white/5 shadow-[#03193A66]/40 shadow-sm">
      <div className="flex items-center gap-[57px]">
        <div className="gap-[6px] flex items-center">
          <button>
            <HiOutlineBars3CenterLeft size={iconSizes.large} />
          </button>
          <a href="/">
            <Image
              src="/images/White_logo.png"
              alt="Logo white"
              width={100}
              height={100}
              className="h-[30px] w-[53px]"
            />
          </a>
        </div>
        <div className="flex items-center gap-[32px]">
          <button className="hover:text-primaryBlue transition duration-200 text-white">
            <CiSearch size={iconSizes.large} />
          </button>
          <MenuHeader />
        </div>
      </div>
      <div className="gap-[8px] flex items-center">
        <button className="py-[9.3px] px-[12px] text-[14px] leading-[15.4px] rounded-[10px] bg-secondAzure text-white tracking-[0.42px] hover:bg-secondAzure/80 transition duration-200">
          LOGIN
        </button>
        <button className="py-[9.3px] px-[12px] text-[14px] rounded-[10px] bg-primaryGreen text-white leading-[15.4px] tracking-[0.42px] hover:bg-primaryGreen/90 transition duration-200">
          REGISTRATION
        </button>
      </div>
    </header>
  );
};
export default Header;
