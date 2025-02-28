import data from "@/src/assets/dataHome.json";
import Image from "next/image";

const FeaturesMenu = () => {
  return (
    <div className="pb-[30px] gap-[10px] grid h-fit w-full grid-cols-7">
      {data.featuresMenu.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-center rounded-[10px] border-[1px] col-span-1 border-white/10 gap-[13px] h-[57px] ${
              item.feature === 1 && "bg-secondAzure"
            }`}
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={50}
              height={50}
              className="w-[24px] h-fit"
            />
            <span className="text-[16px] leading-[22.4px]">{item.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturesMenu;
