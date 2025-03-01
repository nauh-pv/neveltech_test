import { useState } from "react";
import data from "@/src/assets/dataLayout.json";
import { FaChevronDown } from "react-icons/fa";

const MenuMobile = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="xs:hidden w-full flex flex-col gap-3 px-[16px]">
      {data.menuFooter.map((item, index) => (
        <div key={index} className="w-full">
          <button
            className="w-full flex justify-between items-center bg-thirdAzure text-white p-4 rounded-md"
            onClick={() => toggleMenu(index)}
          >
            <span>{item.title}</span>
            <FaChevronDown
              className={`transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`grid transition-all duration-500 ease-in-out rounded-lg overflow-hidden ${
              openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <ul className="overflow-hidden">
              {item.items.map((menu, idx) => (
                <li
                  key={idx}
                  className="p-3 pl-5 text-secondWhite bg-primaryAzure"
                >
                  <a href={menu.link}>{menu.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuMobile;
