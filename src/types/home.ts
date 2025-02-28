export interface ImageMap {
  [key: string]: string;
}

export interface GameData {
  imgBackground: string;
  imgStatus: keyof ImageMap;
  imgSaleOff: keyof ImageMap;
}

export interface DataHome {
  listImgStatus: ImageMap;
  listImgSaleOff: ImageMap;
  exclusiveGames: GameData[];
}
