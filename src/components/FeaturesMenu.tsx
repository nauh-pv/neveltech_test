import data from "@/src/assets/dataHome.json";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import iconSizes from "../config/iconSizes";

const FeaturesMenu = () => {
  return (
    <div className="pb-[30px] gap-[10px] grid h-fit w-full grid-cols-4 2xl:grid-cols-7 border-b-[1px] border-white/5">
      <div
        className="flex items-center justify-center rounded-[10px] border-[1px] col-span-1 border-white/10 gap-[13px] h-[57px]
      bg-secondAzure min-[1325px]:hidden"
      >
        <CiSearch size={iconSizes.medium} />
        <span className="text-[14px] leading-[22.4px]">Search</span>
      </div>
      {data.featuresMenu.map((item, index) => {
        return (
          <div
            key={index}
            className={`xs:flex items-center justify-center rounded-[10px] border-[1px] col-span-1 border-white/10 gap-[13px] pt-[12.7px] pb-[13.5px] ${
              item.feature === 1 ? "bg-secondAzure flex" : "hidden"
            }`}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="xs:w-[24px] w-[20px] h-fit"
            />
            <span className="xs:text-[16px] text-[14px] xs:leading-[22.4px] leading-[14px]">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesMenu;
