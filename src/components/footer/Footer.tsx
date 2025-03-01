import FooterCertifications from "./Certifications";
import DownloadApp from "./DownloadApp";
import HelpCenter from "./HelpCenter";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col xs:flex-row justify-between xl:px-[240px] xs:px-[100px] xs:py-[60px] pt-[40px] bg-secondAzure">
      <MenuMobile />
      <HelpCenter />
      <MenuDesktop />
      <DownloadApp />
      <FooterCertifications />
    </footer>
  );
};

export default Footer;
