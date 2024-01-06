import img from "../../assets/CompanyLogos/company 1.png";
const CareerCard = () => {
  return (
    <div className="flex justify-start items-start space-x-4">
      <img src={img} alt="" className="w-32" />
      <div className="flex flex-col bg-red h-full">
        <div className="text-sm">
          <h3 className="font-bold">Software Engineer</h3>
          <p>Chittagong, Bangladesh</p>
          <p>(On-Site Job)</p>
          <span className="text-xs">⭐⭐⭐⭐⭐</span>
        </div>
        <p className="text-md font-bold mt-auto">Deadline : 6 January 2023</p>
      </div>
    </div>
  );
};

export default CareerCard;
