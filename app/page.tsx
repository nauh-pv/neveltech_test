"use client";
import ExclusiveGames from "@/src/components/ExclusiveGames";
import FeaturesMenu from "@/src/components/FeaturesMenu";
import DefaultLayout from "@/src/layouts/DefaultLayout";

export default function Home() {
  return (
    <DefaultLayout>
      <div className="h-[585px] w-full flex items-center justify-center">
        Banner
      </div>
      <div className="flex flex-col gap-8">
        <FeaturesMenu />
        <ExclusiveGames />
      </div>
    </DefaultLayout>
  );
}
