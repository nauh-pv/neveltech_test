import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import iconSizes from "../config/iconSizes";

interface GameCardProps {
  image: string;
  imgStatus: string;
  imgSale: string;
  name: string;
}

const GameCard = ({ image, imgStatus, imgSale, name }: GameCardProps) => {
  return (
    <div className="w-[156px] h-[201.6px] shadow-xl rounded-[8px] relative flex-shrink-0 object-cover group">
      <div className="w-full h-full rounded-[8px] group-hover:opacity-100 opacity-0 bg-secondBlack absolute transition-opacity duration-300 flex flex-col items-center justify-center gap-[30px] z-10">
        <div className="rounded-full h-[70px] w-[70px] bg-primaryRed flex items-center justify-center cursor-pointer play-group">
          <FaPlay
            size={iconSizes.large}
            color="white"
            className="play-group-hover:scale-110 transition duration-200 pl-1"
          />
        </div>
        <button className="text-[13px] leading-[18.79px] font-medium px-[18px] py-[7.8px] rounded-[10px] bg-secondWhite hover:bg-primaryBlue duration-200">
          DEMO
        </button>
      </div>
      <div
        className="shadow-inner absolute bottom-0 w-full text-[8px] leading-[8px] flex justify-center pb-[6px] bg-gradient-to-t from-black/50 to-transparent
"
      >
        {name}
      </div>
      {imgStatus && (
        <Image
          height={50}
          width={50}
          src={imgStatus}
          alt="Status game"
          className="absolute -left-[3px] top-[14.74px] w-[36px] h-fit z-20"
        />
      )}
      {imgSale && (
        <Image
          height={50}
          width={50}
          src={imgSale}
          alt="Sale Off game"
          className="absolute -right-[3px] top-[14.74px] w-[36px] h-fit z-20"
        />
      )}
      <Image
        width={300}
        height={300}
        src={image}
        alt="Image card"
        className="w-full h-full rounded-[8px]"
      />
    </div>
  );
};

export default GameCard;
