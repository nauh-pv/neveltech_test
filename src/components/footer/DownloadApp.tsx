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
      <div className="bg-secondAzure flex items-center rounded-[8px] py-[6px] px-[10px]">
        <Image
          src="/images/logo-ios.png"
          alt="Logo IOS"
          width={100}
          height={100}
          className="w-[42px] h-[42px]"
        />
        <h4>Bluechip App for Mac OS</h4>
      </div>
      <div className="flex w-full gap-[8px]">
        {listOperating.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-secondAzure w-[50%] flex flex-col items-center rounded-[10px] px-[11.55px]"
            >
              <Image
                src={item.logo}
                alt="Logo IOS"
                width={100}
                height={100}
                className="w-[42px] h-[42px]"
              />
              <h5>{item.name}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DownloadApp;
