import student4 from "../../../assets/Students/student 4.png";
import student5 from "../../../assets/Students/student 5.png";
import student6 from "../../../assets/Students/student 6.png";
import advance from "../../../assets/advance.png";
import image1 from "../../../assets/AptitudesImages/study-abroad.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel-aptitude";
import { Card, CardContent } from "../../../components/ui/card";
const Advance = () => {
  return (
    <section className=" text-[#595959] mb-[100px]">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img src={advance} alt="advance-icon" className="w-8 h-8 mr-2" />
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
          <div className="grid grid-cols-3 justify-center items-center  px-20">
            <div className="bg-[#F5F5F5] col-span-2 px-14 pt-11 rounded-xl z-40 relative">
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
            </div>
            <div className="">
              <CarouselContent className="py-5 z-50 ">
                <CarouselItem>
                  <div className="">
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <img
                          src={image1}
                          alt=""
                          className=" hover:scale-105 transition-all"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <img
                          src={image1}
                          alt=""
                          className=" hover:scale-105 transition-all"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex items-center justify-center">
                        <img
                          src={image1}
                          alt=""
                          className=" hover:scale-105 transition-all"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Advance;
