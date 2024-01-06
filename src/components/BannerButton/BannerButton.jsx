import { Button } from "../ui/button";

const BannerButton = ({ icon, text }) => {
  return (
    <div>
      <Button
        className="w-16 h-16 rounded-xl bg-[#00D4D6] hover:bg-[#595959] px-9"
        // onClick={() => console.log("")}
      >
        <div className=" flex-col ">
          <img src={icon} alt="" className="mb-1 mx-auto" />
          <h2 className="text-xs">{text}</h2>
        </div>
      </Button>
    </div>
  );
};

export default BannerButton;
