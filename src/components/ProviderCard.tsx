import Image from "next/image";

interface ProviderCardProps {
  name: string;
  totalGame: number;
  logo: string;
}

const ProviderCard = ({ name, totalGame, logo }: ProviderCardProps) => {
  return (
    <div className="cursor-pointer hover:pt-0 xs:w-[155px] !w-[120px] h-[122px] pt-[16px] px-[32px] flex flex-col items-center justify-center hover:pb-0 pb-[76px] bg-secondAzure relative rounded-[8px] group duration-200 transition ease-in-out delay-200">
      <Image
        src={logo}
        alt="Logo Provider"
        width={2000}
        height={1000}
        className="xs:w-full xs:h-auto object-cover h-[50px] w-fit"
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
