import SeeAll from "./assests/SeeAll";
import data from "@/src/assets/dataHome.json";
import ProviderCard from "./ProviderCard";

const AllProviders = () => {
  return (
    <div className="flex flex-col xs:gap-8 gap-3 w-full">
      <div className="flex items-center justify-between">
        <h2>All Providers</h2>
        <SeeAll />
      </div>
      <div className="flex xs:gap-4 gap-[6px] xs:justify-center xs:w-[calc(100vw-480px)] w-[calc(100vw-32px)] justify-start overflow-x-auto hide-scrollbar">
        {data.allProviders
          ? data.allProviders.map((provider, index) => (
              <ProviderCard
                key={index}
                {...{
                  logo: provider.logo,
                  name: provider.name,
                  totalGame: provider.totalGmaes,
                }}
              />
            ))
          : "No data"}
      </div>
    </div>
  );
};

export default AllProviders;
