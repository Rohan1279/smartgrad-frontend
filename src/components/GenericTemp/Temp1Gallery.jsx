
const Temp1Gallery = ({data, title, subTitle}) => {
  
  const truncateParagraph = (paragraph) => {
    return paragraph.length > 110 ? `${paragraph.substring(0, 110)}...` : paragraph;
  };

  return (
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        {title}
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        {subTitle}
      </p>
    </div>
    <div className="flex flex-wrap -m-4">
      {data.map((item, index) => <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative h-60">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-contain object-center"
            src={item?.url}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              {item?.title}
            </h1>
            <p className="leading-relaxed">
            {truncateParagraph(item?.paragraph)}
            </p>
          </div>
        </div>
      </div>)}
    </div>
  </div>
</section>

  );
};

export default Temp1Gallery;