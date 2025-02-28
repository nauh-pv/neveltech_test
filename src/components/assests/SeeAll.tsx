import iconSizes from "@/src/config/iconSizes";
import { CgMenuGridR } from "react-icons/cg";

const SeeAll = () => {
  return (
    <button className="flex items-center justify-center gap-2 hover:text-primaryBlue duration-200">
      <span className="uppercase">See all</span>
      <CgMenuGridR size={iconSizes.medium} />
    </button>
  );
};

export default SeeAll;
