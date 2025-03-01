"use client";

import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";

import MenuHeaderDesktop from "@/src/components/header/MenuHeaderDesktop";
import iconSizes from "../../config/iconSizes";
import MenuHeaderMobile from "./MenuHeaderMobile";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState<boolean>(false);

  return (
    <>
      <header className="py-[16px] fixed z-50 w-full h-fit flex items-center justify-between xl:px-[240px] lg:px-[100px] px-[16px] border-b-[1px] border-white/5 shadow-[#03193A66]/40 shadow-sm bg-primaryAzure">
        <div className="flex items-center gap-[57px]">
          <div className="gap-[6px] flex items-center">
            <button onClick={() => setIsOpenMenuMobile(true)}>
              <HiOutlineBars3CenterLeft size={iconSizes.large} />
            </button>
            <Link href="/">
              <Image
                src="/images/White_logo.png"
                alt="Logo white"
                width={100}
                height={100}
                className="lg:h-[30px] lg:w-[53px] h-[18px] w-[32px]"
              />
            </Link>
          </div>
          <div className="flex items-center gap-[32px]">
            <button className="hover:text-primaryBlue transition duration-200 text-white min-[1325px]:block hidden">
              <CiSearch size={iconSizes.large} />
            </button>
            <MenuHeaderDesktop />
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
      <MenuHeaderMobile
        {...{ isOpen: isOpenMenuMobile, setIsOpen: setIsOpenMenuMobile }}
      />
    </>
  );
};
export default Header;
