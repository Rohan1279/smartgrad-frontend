import student4 from "../../../assets/Students/student 4.png";
import student5 from "../../../assets/Students/student 5.png";
import student6 from "../../../assets/Students/student 6.png";
import advance from "../../../assets/advance.png";
import image1 from "../../../assets/AptitudesImages/study-abroad.png";

import AptitudeIcon from "../../../assets/aptitude-icon.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel-aptitude";
import { Card, CardContent } from "../../../components/ui/card";
import Typewriter from "../../../components/Typewriter/Typewriter";
import AptitudeList from "../../../assets/dummy/aptitude.json";

const Advance = () => {
  return (
    <section className=" text-[#595959] mb-[100px] px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img
              src={AptitudeIcon}
              alt="advance-icon"
              className="w-10 h-10 mr-4"
            />
            <div>
              <h2 className="text-2xl font-bold">Aptitude</h2>
              <p>
                Welcome to our multifaceted service platform designed to cater
                to various aspects of your personal and professional development
              </p>
            </div>
          </div>
        </div>

        <Carousel>
          <div className="px-10 mmd:px-20">
            {/* <div className="bg-[#F5F5F5] col-span-2 px-14 pt-11 rounded-xl z-40 relative">
              <p className="pr-24 font-bold">Well-Being Counseling</p>
              <p>
                Prioritize your mental health with our well-being counseling
                services.Qualified counselors provide support and guidance to
                help you navigate life's challenges and enhance your overall
                emotional wellness.
              </p>
              <div className="flex justify-between items-center">
                <button className="bg-[#595959] w-fit h-10 px-4 rounded-xl text-white mt-[30px] mb-6">
                  Explore
                </button>
                <div className=" ">
                  <CarouselPrevious className="mr-[18px]" />
                  <CarouselNext className="" />
                </div>
              </div>
            </div> */}
            {/* <Typewriter>
              Prepare for exams like IELTS, GMAT, and GRE with tailored courses
              and practice materials. Expert instructors and adaptive learning
              methods ensure an effective and personalized study experience.
            </Typewriter> */}
            <CarouselContent className="py-5 z-50">
              {AptitudeList.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col mmd:flex-row justify-center items-center w-11/12 mx-auto">
                    <div className="order-2 mmd:order-1 bg-[#F5F5F5] shadow-md px-4 md:px-14 flex-1 pt-11 rounded-xl z-40 relative h-fit">
                      <p className="block text-xl font-bold">{item?.heading}</p>
                      <p>
                        {/* <Typewriter> */}
                        {item?.content}
                        {/* </Typewriter> */}
                      </p>
                      <div className="flex justify-between items-center">
                        <button className="bg-[#595959] w-fit h-10 px-4 rounded-xl text-white mt-[30px] mb-6">
                          Explore
                        </button>
                        <div className=" ">
                          <CarouselPrevious className="mr-[18px]" />
                          <CarouselNext className="" />
                        </div>
                      </div>
                    </div>
                    <div className="order-1 mmd:order-2 flex-1 rounded-xl overflow-hidden w-full mmd:w-[375px] h-[417px] shadow-md">
                      <img
                        src={
                          "https://smartgrad.org/assets/image/slider/slider-4.jpg"
                        }
                        alt=""
                        className="w-full h-full object-cover "
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Advance;
