import { Button } from "../ui/button";

const BannerButton = ({
  IconComponent,
  text,
  isTriggerHovering,
  hoverIcon,
  className,
  fill,
  stroke,
}) => {
  return (
    <div>
      <Button
        className="w-16 h-16 rounded-xl bg-[#F5F5F5F0]/95 hover:bg-primary hover:shadow-xl hover:scale-105 [&_h2]:hover:text-md [&_h2]:hover:text-white px-11 py-10 text-[#595959] transition-all"
        // onClick={() => console.log("")}
      >
        <div className=" flex-col ">
          {/* {isTriggerHovering ? (
            <img src={hoverIcon} alt="" className="mb-1 mx-auto w-7" />
          ) : (
            <img src={icon} alt="" className="mb-1 mx-auto w-7" />
          )} */}
          {/* <img src={icon} alt="" className="mb-1 mx-auto w-7" />
          <img src={icon} alt="" className="mb-1 mx-auto w-7" /> */}
          <IconComponent className={className} fill={fill} stroke={stroke} />
          <h2 className="text-sm transition-all">{text}</h2>
        </div>
      </Button>
    </div>
  );
};

export default BannerButton;
