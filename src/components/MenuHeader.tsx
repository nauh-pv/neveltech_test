"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuHeader = () => {
  const pathname = usePathname();

  const listMenu = [
    { name: "HOME", path: "/" },
    { name: "GAME", path: "/game" },
    { name: "INFOR", path: "/infor" },
    { name: "NEWS", path: "/news" },
    { name: "PROMOTIONS", path: "/promotions" },
    { name: "VIP", path: "/vip" },
  ];
  return (
    <ul className="flex justify-center gap-5">
      {listMenu.map((item, index) => {
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
export default MenuHeader;
