import { FaPhone } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const CtaButton = ({ data, className }) => {
  const { type, title, payload } = data;

  return (
    <Button className={twMerge("mt-8 rounded-[50px] px-5 py-5 text-white bg-primary", className)}>
      <FaPhone className="mr-2 h-4 w-4" /> Get In Touch
    </Button>
  );
};

export default CtaButton;
