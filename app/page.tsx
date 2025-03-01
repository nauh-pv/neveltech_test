"use client";
import AllProviders from "@/src/components/AllProviders";
import Banner from "@/src/components/Banner";
import ExclusiveGames from "@/src/components/ExclusiveGames";
import FeaturesMenu from "@/src/components/FeaturesMenu";
import DefaultLayout from "@/src/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <Banner />
      <div className="flex flex-col gap-8 w-[75%] ">
        <FeaturesMenu />
        <ExclusiveGames />
        <AllProviders />
      </div>
    </DefaultLayout>
  );
}
