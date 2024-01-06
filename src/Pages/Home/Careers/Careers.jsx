import CareerCard from "../../../components/CareerCard/CareerCard";
import company1 from "../../../assets/CompanyLogos/company 1.png";
const Careers = () => {
  return (
    <section className="text-[#595959]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img src={""} alt="convocation-cap" className="w-10 h-10" />
            <div>
              <h2 className="text-2xl font-bold">Featured Careers</h2>
              <p className="text-base">
                Look for the jobs that suit you and start applying now
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5">
          <div className="col-span-2">
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
          </div>
          {/* <hr  className="w-64 "/> */}
          <div className="col-span-3">
            <div className="flex justify-between items-start">
              <h2 className="text-3xl">
                <span className="text-[#00D4D6] font-bold">Nybsys</span>{" "}
                <p>is looking for</p>
              </h2>
              <span className="">⭐⭐⭐⭐⭐</span>
            </div>

            <div className="flex justify-start items-start space-x-4 mt-4">
              <img src={company1} alt="" className="w-32" />
              <div className="flex flex-col bg-red h-full">
                <div className="text-sm">
                  <h3 className="font-bold text-3xl">UI/UX Designer</h3>
                  <p>Chittagong, Bangladesh</p>
                  <p>On-Site Job</p>
                  <p className="text-sm">5 Days Remaining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
