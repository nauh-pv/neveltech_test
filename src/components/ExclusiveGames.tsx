import data from "@/src/assets/dataHome.json";
import GameCard from "./GameCard";
import { DataHome } from "../types/home";
import SeeAll from "./assests/SeeAll";
import { useRef } from "react";

const ExclusiveGames = () => {
  const { listImgStatus, listImgSaleOff } = data as DataHome;

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Hàm xử lý khi kéo chuột
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const startX = e.clientX;
    const scrollLeft = scrollContainerRef.current
      ? scrollContainerRef.current.scrollLeft
      : 0;

    const handleMouseMove = (moveEvent: MouseEvent) => {
      const moveX = moveEvent.clientX;
      const distance = startX - moveX;
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = scrollLeft + distance;
      }
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2>Exclusive Games</h2>
        <SeeAll />
      </div>
      <div
        className="flex gap-4 w-[calc(100vw - 480px)] justify-between overflow-x-auto hide-scrollbar"
        ref={scrollContainerRef}
        onMouseDown={handleMouseDown}
      >
        {data.exclusiveGames.map((game, index) => {
          return (
            <GameCard
              key={index}
              {...{
                image: game.imgBackground,
                imgSale: listImgSaleOff[game.imgSaleOff] || "",
                imgStatus: listImgStatus[game.imgStatus] || "",
                name: game.name || "",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExclusiveGames;
