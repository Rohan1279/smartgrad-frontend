import CtaButton from "./CtaButton";

const BriefDetails = ({ data, index }) => {
  const isOddIndex = index % 2 !== 0;


    return (
        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 justify-between py-[20px] mmd:py-[50px] px-4 md:px-auto">
        <div className={`flex ${isOddIndex ? 'md:order-2' : ''} justify-center items-center`}>
          <img
            src={data?.image}
            alt="image data"
            className="w-full max-w-sm max-h-[350px] rounded-xl"
          />
        </div>
        <div
          className={`flex flex-col ${isOddIndex ? 'md:items-start' : ''} justify-center items-center mmd:items-start px-4`}
        >
          <h1 className="text-[30px] mmd:text-[45px] font-bold text-[#595959]">
            {data?.title}
          </h1>
          <p className="text-justify text-[#595959] font-normal text-base">
          {data?.paragraph}
          </p>

          {data?.cta && <CtaButton data={data.cta} />}
        </div>
      </div>
    );
};

export default BriefDetails;