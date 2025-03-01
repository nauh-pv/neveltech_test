import FooterCertifications from "./Certifications";
import DownloadApp from "./DownloadApp";
import HelpCenter from "./HelpCenter";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col lg:flex-row justify-between xl:px-[240px] lg:px-[100px] lg:py-[60px] pt-[40px] bg-secondAzure">
      <MenuMobile />
      <HelpCenter />
      <MenuDesktop />
      <DownloadApp />
      <FooterCertifications />
    </footer>
  );
};

export default Footer;
