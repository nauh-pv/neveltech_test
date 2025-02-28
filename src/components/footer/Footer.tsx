import DownloadApp from "./DownloadApp";
import HelpCenter from "./HelpCenter";
import MenuFooter from "./MenuFooter";

const Footer = () => {
  return (
    <footer className="flex w-full justify-between px-[240px] py-[60px] bg-secondAzure">
      <HelpCenter />
      <MenuFooter />
      <DownloadApp />
    </footer>
  );
};

export default Footer;
