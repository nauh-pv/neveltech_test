import Image from "next/image";

const DownloadApp = () => {
  const listOperating = [
    {
      name: "Android",
      logo: "/images/logo-android.png",
    },
    {
      name: "IOS",
      logo: "/images/logo-ios.png",
    },
  ];
  return (
    <div className="w-[180px] flex flex-col gap-[8px]">
      <button className="bg-thirdAzure flex items-center rounded-[8px] py-[6px] px-[10px] hover:bg-white/15 transition duration-200">
        <Image
          src="/images/logo-ios.png"
          alt="Logo IOS"
          width={100}
          height={100}
          className="w-[42px] h-[42px]"
        />
        <h4>Bluechip App for Mac OS</h4>
      </button>
      <div className="flex w-full gap-[8px]">
        {listOperating.map((item, index) => {
          return (
            <button
              key={index}
              className="bg-thirdAzure w-[50%] flex flex-col items-center rounded-[10px] px-[11.55px] hover:bg-white/15 transition duration-200"
            >
              <Image
                src={item.logo}
                alt="Logo IOS"
                width={100}
                height={100}
                className="w-[42px] h-[42px]"
              />
              <h5>{item.name}</h5>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadApp;
