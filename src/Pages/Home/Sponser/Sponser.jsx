import supporter from "../../../assets/supporter.png";
import sponser1 from "../../../assets/Sponsers/sponser 1.png";
import sponser2 from "../../../assets/Sponsers/sponser 2.png";
import sponser3 from "../../../assets/Sponsers/sponser 3.png";
import sponser4 from "../../../assets/Sponsers/sponser 4.png";
import sponser5 from "../../../assets/Sponsers/sponser 5.png";

const Sponser = () => {
  return (
    <section className="text-[#595959] py-[70px] bg-[#F5F5F5] mb-[100px] px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <div>
              <h2 className="text-3xl font-bold">Our Supporters</h2>
              <p className="text-base">
                Look for the jobs that suit you and start applying now
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 justify-center mmd:justify-between mt-16">
              <div className=" sm:border-r sm:border-[#595959] px-5 ">
                {" "}
                <img
                  src={sponser1}
                  alt=""
                  className="saturate-100 hover:scale-105 transition-all duration-300  "
                />
              </div>
              <div className=" sm:border-r sm:border-[#595959] px-5 ">
                {" "}
                <img
                  src={sponser2}
                  alt=""
                  className="saturate-100 hover:scale-105 transition-all duration-300 "
                />
              </div>
              <div className=" sm:border-r sm:border-[#595959] px-5 ">
                <img
                  src={sponser4}
                  alt=""
                  className="saturate-100 hover:scale-105 transition-all duration-300 "
                />
              </div>
              <div className="sm:border-r sm:border-[#595959] px-5 ">
                <img
                  src={sponser3}
                  alt=""
                  className="saturate-100 hover:scale-105 transition-all duration-300 "
                />
              </div>
              <div className="sm:col-auto col-span-2 px-5">
                <img
                  src={sponser5}
                  alt=""
                  className="saturate-0 mx-auto sm:mx-none w-1/2 sm:w-44 mmd:w-auto hover:saturate-100 hover:scale-105 transition-all duration-300 "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponser;
