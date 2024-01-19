import TeamCard from "./TeamCard";
import member1 from "../../../assets/TeamImages/member1.png";
import member2 from "../../../assets/TeamImages/member2.png";
import member3 from "../../../assets/TeamImages/member3.png";
const About = () => {
  return (
    <section className="text-[#595959] py-10 mb-[100px] ">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-3 items-center w-full  text-center justify-between">
          <hr className="border border-t-black  w-full"></hr>
          <h2 className="text-4xl font-bold text-center">About Us</h2>
          <hr className="border border-t-black w-full"></hr>
        </div>
        <div className="grid grid-cols-3 space-x-11 mt-20">
          <div className="bg-[#F5F5F5F0]  py-12 rounded-xl">
            <img src={member1} alt="" className="w-36  mx-auto" />
            <h3 className="text-[27px] font-bold text-center mt-[25px]">
              Raihan Alauddin
            </h3>
            <p className="text-center font-bold text-[17px] mb-2">
              Co-Founder & Director
            </p>
            <p className="mx-16 text-center">
              Loves teaching so much that he has been doing it for 20+ years, in
              addition to his corporate and startup career. Sakib is an Oxford
              alumnus and holds a 1st Class Economics & Finance bachelors degree
              from Brunel.
            </p>
            {/* USE THIS TOOLTIP */}
            {/* https://uiverse.io/PriyanshuGupta28/dry-mole-12 */}
          </div>
          <div className="bg-[#F5F5F5F0]  py-12 rounded-xl">
            <img src={member2} alt="" className="w-36  mx-auto" />
            <h3 className="text-[27px] font-bold text-center mt-[25px]">
              Raihan Alauddin
            </h3>
            <p className="text-center font-bold text-[17px] mb-2">
              Co-Founder & Director
            </p>
            <p className="mx-16 text-center">
              Loves teaching so much that he has been doing it for 20+ years, in
              addition to his corporate and startup career. Sakib is an Oxford
              alumnus and holds a 1st Class Economics & Finance bachelors degree
              from Brunel.
            </p>
          </div>
          <div className="bg-[#F5F5F5F0]  py-12 rounded-xl">
            <img src={member3} alt="" className="w-36  mx-auto" />
            <h3 className="text-[27px] font-bold text-center mt-[25px]">
              Raihan Alauddin
            </h3>
            <p className="text-center font-bold text-[17px] mb-2">
              Co-Founder & Director
            </p>
            <p className="mx-16 text-center">
              Loves teaching so much that he has been doing it for 20+ years, in
              addition to his corporate and startup career. Sakib is an Oxford
              alumnus and holds a 1st Class Economics & Finance bachelors degree
              from Brunel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
