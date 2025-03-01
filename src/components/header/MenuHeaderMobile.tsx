"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import data from "@/src/assets/dataLayout.json";

interface MenuHeaderMobileProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MenuHeaderMobile = ({ isOpen, setIsOpen }: MenuHeaderMobileProps) => {
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden block relative z-50 w-full">
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 w-full h-full bg-gray-900 text-white shadow-lg flex flex-col items-center py-6"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-3xl focus:outline-none"
          >
            <FiX />
          </button>

          <ul className="mt-10 w-full flex flex-col items-center gap-6">
            {data.menuHeader.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <li key={index} className="w-full text-center">
                  <Link
                    href={item.path}
                    className={`block py-3 text-lg font-medium tracking-wide transition-colors duration-200 ${
                      isActive ? "text-primaryBlue" : "text-white"
                    } hover:text-primaryBlue`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default MenuHeaderMobile;
