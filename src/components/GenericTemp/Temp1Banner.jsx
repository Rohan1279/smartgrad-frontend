import CtaButton from "./CtaButton";

const Temp1Banner = ({banner, header, paragraph, cta}) => {
  
  const bannerStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
      <div className="flex flex-col w-full h-[94vh] bg-[#DDE9FF] items-center justify-center" style={bannerStyle}>
        <p className="text-3xl sm:text-4xl mmd:text-6xl font-bold ">
          {header}
        </p>
        <p className="text-sm mmd:text-base mt-8 text-center px-4">
          {paragraph.substring(0, 150) + "..."}
        </p>

        {cta && <CtaButton data={cta} />
        }
      </div>
    
  );
};

export default Temp1Banner;
