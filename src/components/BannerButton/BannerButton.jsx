import { Button } from "../ui/button";

const BannerButton = ({ icon, text }) => {
  return (
    <div>
      <Button
        className="w-16 h-16 rounded-xl bg-[#D9D9D9] hover:bg-[#00D4D6] px-9 text-[#595959] transition-all"
        // onClick={() => console.log("")}
      >
        <div className=" flex-col ">
          <img src={icon} alt="" className="mb-1 mx-auto" />
          <h2 className="text-xs ">{text}</h2>
        </div>
      </Button>
    </div>
  );
};

export default BannerButton;
