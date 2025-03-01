import Image from "next/image";

const certifications = [
  { src: "/images/Footer/1.png", alt: "BeGambleAware" },
  { src: "/images/Footer/2.png", alt: "Gamble Responsibly" },
  { src: "/images/Footer/3.png", alt: "GamTalk" },
  { src: "/images/Footer/4.png", alt: "Casino Guru Fair Casino" },
  { src: "/images/Footer/5.png", alt: "The Fairest General T&Cs 2023" },
];

const FooterCertifications = () => {
  return (
    <div className="bg-primaryAzure py-10 px-4 flex justify-center xs:hidden">
      <div className="w-full flex flex-wrap justify-center gap-8 items-center">
        {certifications.map((cert, index) => (
          <Image
            key={index}
            src={cert.src}
            alt={cert.alt}
            width={80}
            height={100}
            className="object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default FooterCertifications;
