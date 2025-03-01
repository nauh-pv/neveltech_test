import SeeAll from "./assests/SeeAll";
import data from "@/src/assets/dataHome.json";
import ProviderCard from "./ProviderCard";

const AllProviders = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center justify-between">
        <h2>All Providers</h2>
        <SeeAll />
      </div>
      <div className="flex gap-4">
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
