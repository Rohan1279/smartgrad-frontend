import img from "../../assets/CompanyLogos/company 1.png";
const CareerCard = ({ logo, role, location, jobType, rating, deadline }) => {
  return (
    <div className="flex justify-start items-start space-x-4">
      <img src={logo} alt="" className="w-28" />
      <div className="flex flex-col bg-red h-full">
        <div className="text-sm">
          <h3 className="font-bold">{role}</h3>
          <p>{location}</p>
          <p>{jobType}</p>
          <span className="text-xs">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-md font-bold mt-auto">Deadline : {deadline}</p>
      </div>
    </div>
  );
};

export default CareerCard;
