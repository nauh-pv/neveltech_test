import FacebookIcon from "@/public/svg/facebook.svg";
import InstagramIcon from "@/public/svg/instagram.svg";
import TelegramIcon from "@/public/svg/telegram.svg";
import TwitterIcon from "@/public/svg/twitter.svg";
import Image from "next/image";

const HelpCenter = () => {
  const listSocial = [
    { icon: FacebookIcon, path: "https://facebook.com" },
    { icon: InstagramIcon, path: "https://instagram.com" },
    { icon: TelegramIcon, path: "https://telegram.com" },
    { icon: TwitterIcon, path: "https://twitter.com" },
  ];

  return (
    <div className="flex flex-col items-center lg:gap-10 lg:w-fit w-full px-[16px] lg:px-0">
      <div className="gap-4 flex-col items-center lg:flex hidden">
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-xl">Help Center</h3>
          <h5>If you have any questions?</h5>
        </div>
        <button className="px-[40px] pb-[12px] pt-[14px] text-white rounded-[10px] uppercase bg-primaryBlue hover:bg-primaryBlue/90 transition duration-200 text-[13px] leading-[14.3px] tracking-[0.39px] w-full">
          Get answers
        </button>
      </div>
      <h4 className="lg:hidden w-full flex items-center justify-center py-[20px]">
        Follow Us
      </h4>
      <div className="flex gap-6 items-center lg:px-0 px-[35px] lg:mb-0 mb-14">
        {listSocial.map((icon, index) => {
          return (
            <a
              href={icon.path}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <Image
                src={icon.icon}
                alt="Instagram"
                className="lg:w-6 w-10 h-fit lg:h-6"
                width={100}
                height={100}
              />
            </a>
          );
        })}
      </div>
      <div className="gap-4 items-center justify-center lg:hidden flex bg-thirdAzure rounded-[10px] w-full py-[18px] mb-4">
        <div className="flex flex-col gap-[1px]">
          <h3 className="text-xl">Help Center</h3>
          <h5>If you have any questions?</h5>
        </div>
        <button className="px-[12px] py-[10px] text-white rounded-[10px] uppercase bg-primaryBlue hover:bg-primaryBlue/90 transition duration-200 text-[13px] leading-[14.3px] tracking-[0.39px] w-fit">
          Get answers
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
