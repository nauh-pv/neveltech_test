import Image from "next/image";

interface ProviderCardProps {
  name: string;
  totalGame: number;
  logo: string;
}

const ProviderCard = ({ name, totalGame, logo }: ProviderCardProps) => {
  return (
    <div className="w-[120px] lg:w-[155px] flex-shrink-0 object-cover cursor-pointer hover:pt-0 h-[122px] pt-[16px] flex flex-col items-center justify-center hover:pb-3 pb-20 lg:pb-[76px] bg-secondAzure relative rounded-[8px] group duration-200 transition ease-in-out delay-200">
      <Image
        src={logo}
        alt="Logo Provider"
        width={500}
        height={500}
        className="w-fit h-fit"
      />
      <div className="absolute w-full h-1/2 bg-[#F5F9FF0D]/5 bottom-0 left-0 flex flex-col justify-center items-center rounded-b-[8px] gap-2 group-hover:hidden duration-200 transition ease-in-out delay-200">
        <p className="underline text-[13px] leading-[18.2px] text-white">
          {name}
        </p>
        <p className="underline text-[11px] leading-[11px] text-secondWhite">
          {totalGame} game
        </p>
      </div>
    </div>
  );
};

export default ProviderCard;
