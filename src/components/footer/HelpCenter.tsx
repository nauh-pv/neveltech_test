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
    <div className="flex flex-col items-center gap-10 w-fit">
      <div className="flex gap-4 flex-col items-center">
        <div className="flex flex-col gap-[8px]">
          <h3 className="text-xl">Help Center</h3>
          <h5>If you have any questions?</h5>
        </div>
        <button className="px-[54px] py-[12.85px] text-white rounded-[10px] uppercase bg-primaryBlue text-[13px] leading-[14.3px] tracking-[0.39px]">
          Get answers
        </button>
      </div>
      <div className="flex gap-6 items-center">
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
                className="w-6 h-6"
                width={100}
                height={100}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default HelpCenter;
