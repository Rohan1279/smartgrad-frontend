const FeatureCard = ({ icon, title, description }) => {

    console.log(title);
    return (
      <div className={`flex justify-start items-center space-x-3 hover:bg-primary/50 cursor-pointer transition-all duration-300 px-5 py-3 bg-white hover:bg-primary hover:text-white w-full lsm:w-[25rem] h-[70px] rounded-xl my-2 ${title === "university" ? "[&_svg]:hover:fill-white": "[&_svg]:hover:stroke-white"} `}>
        {icon}
        <p>{description}</p>
      </div>
    );
  };

export default FeatureCard;