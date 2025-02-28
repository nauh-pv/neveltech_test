import data from "@/src/assets/dataHome.json";
import GameCard from "./GameCard";
import { DataHome } from "../types/home";
import SeeAll from "./assests/SeeAll";

const ExclusiveGames = () => {
  const { listImgStatus, listImgSaleOff } = data as DataHome;
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2>Exclusive Games</h2>
        <SeeAll />
      </div>
      <div className="flex gap-4 w-[calc(100vw - 480px)] justify-between overflow-hidden">
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
