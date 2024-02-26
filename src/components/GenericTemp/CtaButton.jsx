import { FaEnvelope, FaExternalLinkAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";
import { Button } from "../ui/button";

const CtaButton = ({ data, className }) => {
  const { type, title, payload } = data;

  const handleClick = () => {
    if (type === "phone") window.location.href = `tel:${payload.phone}`;
    else if (type === "email") window.location.href = `mailto:${payload.email}`;
    else if (type === "url") window.open(payload.url, "_blank");
  };

  const iconMap = {
    phone: <FaPhone className="mr-2 h-4 w-4" />,
    email: <FaEnvelope className="mr-2 h-4 w-4" />,
    url: <FaExternalLinkAlt className="mr-2 h-4 w-4" />,
  };
  

  return (
    <Button className={twMerge("mt-8 rounded-[50px] px-5 py-5 text-white bg-primary", className)} onClick={handleClick}>
      {iconMap[type]}
      {title}
    </Button>
  );
};

export default CtaButton;
