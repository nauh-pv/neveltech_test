"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import data from "@/src/assets/dataLayout.json";

const MenuHeaderDesktop = () => {
  const pathname = usePathname();
  return (
    <ul className=" lg:flex justify-center gap-5 hidden">
      {data.menuHeader.map((item, index) => {
        const isActive = pathname === item.path;
        return (
          <li
            className={`hover:text-primaryBlue font-medium tracking-[0.42px] leading-[19.6px] duration-150${
              isActive ? "text-primaryBlue" : "text-primaryWhite"
            }`}
            key={index}
          >
            <Link href={item.path}> {item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MenuHeaderDesktop;
