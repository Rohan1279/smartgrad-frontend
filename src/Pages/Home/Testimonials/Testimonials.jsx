import testimonial from "../../../assets/testimonial.png";

import TestomonialCard from "./TestomonialCard";
import student1 from "../../../assets/Students/student 4.png";
import student2 from "../../../assets/Students/student 5.png";
import student3 from "../../../assets/Students/student 6.png";
import icon1 from "../../../assets/TestimonialIcons/Career.png";
import icon2 from "../../../assets/TestimonialIcons/fa-solid_user-graduate.png";
import icon3 from "../../../assets/TestimonialIcons/Group 33.png";
import AnimatedNumber from "../../../components/AnimatedNumber";

const Testimonials = () => {
  return (
    <section className=" text-[#595959] py-[86px] bg-[#F9F9F9] relative mb-[100px] px-4 ">
      <div className="max-w-7xl mx-auto ">
        {/* SECTION HEADING */}
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            {/* <img
              src={testimonial}
              alt="convocation-cap"
              className="w-10 h-10"
            /> */}
            <div>
              <h2 className="text-2xl font-bold">Testimonials</h2>
              <p className="text-base">
                Look at what others want to say about us
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mmd:grid-cols-2 gap-y-12 mmd:gap-y-auto xl:flex justify-between items-center mb-36">
          <div className="bg-[#595959] m-auto text-white rounded-xl  px-10 py-8 text-center w-full sm:w-[400px] h-[185px] relative leading-3 shadow-md">
            <p className="text-left mt-8 text-[33px] h-1">“</p>
            <p className="text-xs text-right">
              Coming just out of college I was not sure of what I wanted to
              concentrate my studies on. Having consulted Smartgrad, I
              immediately started feeling confident and slowly gained clarity as
              to what I should do to achieve my career goals in the future
            </p>
            <p className="text-[33px] text-right mt-3">”</p>
            <div className="bg-transparent text-white absolute -top-6 left-6  flex items-end text-left space-x-[14px] ">
              <div className="w-[74px] h-[74px] rounded-lg overflow-hidden">
                <img src={student2} alt="" className=" object-fill mx-auto" />
              </div>
              <div className="leading-3 mb-2 ">
                <p className="text-sm">Nash</p>
                <p className="text-md font-bold">Student</p>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] m-auto text-[#595959] rounded-xl px-10 py-8 xl:py-auto xl:pt-[40px] text-center w-full sm:w-[400px] h-[185px] xl:w-[450px] xl:h-[250px] relative shadow-lg">
            <p className="text-left mt-6 mb-4 text-[33px] h-1 xl:mt-11 xl:text-5xl xl:h-4">
              “
            </p>
            <p className="text-xs  text-right">
              Worked with Smartgrad ahead of my MBA applications and loved their
              service. Consultations were always professional and constructive
              and being able to speak to alumni from universities I was
              interested in made the application process seem more personal and
              familiar!
            </p>
            <p className="text-[33px] xl:text-5xl text-right ">”</p>
            <div className="bg-transparent absolute -top-4 xl:-top-14 left-6  flex items-end text-left space-x-[14px] ">
              <div className="w-[74px] h-[74px] xl:w-[130px] xl:h-[130px] rounded-lg overflow-hidden">
                <img src={student3} alt="" className=" object-fill mx-auto" />
              </div>
              <div className="leading-3 mb-2 mmd:mb-5 ">
                <p className="text-sm">Subhi</p>
                <p className="text-md font-bold">Student</p>
              </div>
            </div>
          </div>
          <div className="bg-[#595959] m-auto text-white rounded-xl  px-10 py-8 text-center w-full sm:w-[400px] h-[185px] relative leading-3 shadow-md">
            <p className="text-left mt-8 text-[33px] h-1 ">“</p>
            <p className="text-xs text-right">
              The service felt sincere and personal, we connected virtually and
              over the course of 4 weeks and multiple revisions, my application
              to INSEAD got accepted! Very happy with the help I was provided,
              highly recommend it :)
            </p>
            <p className="text-[33px] text-right mt-3">”</p>
            <div className="bg-transparent text-white absolute -top-6 left-6  flex items-end text-left space-x-[14px] ">
              <div className="w-[74px] h-[74px] rounded-lg overflow-hidden">
                <img src={student1} alt="" className=" object-fill mx-auto" />
              </div>
              <div className="leading-3 mb-2 ">
                <p className="text-sm">Liudmilla</p>
                <p className="text-md font-bold">Student</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-20">
          <h2 className="text-2xl font-bold text-center">
            Helping Small Business to Grow and Expand
          </h2>
          <p className="text-center text-[20px]">More Than</p>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-[60px]">
            <div className="flex flex-col justify-center items-center ">
              <div className="w-20 h-20 mx-auto">
                <img src={icon1} alt="" className=" " />
              </div>
              <div className=" my-2">
                <h3 className="text-center text-3xl font-bold">
                  <AnimatedNumber targetNumber={33} />+
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="w-20 h-20 mx-auto ">
                <img src={icon2} alt="" className=" " />
              </div>
              <div className="my-2">
                <h3 className="text-center text-3xl font-bold">
                  <AnimatedNumber targetNumber={78} />+
                </h3>
                <p className="text-center">Individuals were Offered</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="w-20 h-20 mx-auto">
                <img src={icon3} alt="" className=" " />
              </div>
              <div className=" my-2">
                <h3 className="text-center text-3xl font-bold">
                  <AnimatedNumber targetNumber={42} />+
                </h3>
                <p className="text-center">Got Employed</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center ">
              <div className="w-20 h-20 mx-auto">
                <img src={icon1} alt="" className=" " />
              </div>
              <div className=" my-2">
                <h3 className="text-center text-3xl font-bold">
                  <AnimatedNumber targetNumber={33} />+
                </h3>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
              </div>
            </div>
          </div>
          <p className="text-[20px] text-center mt-[60px]">
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum lorem ipsum
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
