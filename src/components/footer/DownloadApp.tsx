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
    <div className="xs:w-[180px] w-full flex flex-col gap-[8px] px-[16px] xs:px-0 pb-[40px] pb-0">
      <button className="bg-thirdAzure items-center rounded-[8px] py-[6px] px-[10px] hover:bg-white/15 transition duration-200 xs:flex hidden">
        <Image
          src="/images/logo-ios.png"
          alt="Logo IOS"
          width={100}
          height={100}
          className="w-[42px] h-[42px]"
        />
        <h4>Bluechip App for Mac OS</h4>
      </button>
      <div className="w-full gap-[8px] xs:flex hidden">
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
      <div className="flex w-full gap-[8px]">
        {listOperating.map((item, index) => {
          return (
            <button
              key={index}
              className="bg-thirdAzure w-[50%] flex items-center rounded-[10px] px-[11.55px] hover:bg-white/15 transition duration-200 py-[6px]"
            >
              <Image
                src={item.logo}
                alt="Logo IOS"
                width={100}
                height={100}
                className="w-[42px] h-[42px]"
              />
              <div className="flex flex-col items-start justify-start">
                <h4>Bluechip App</h4>
                <p className="text-secondWhite">for {item.name}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadApp;
