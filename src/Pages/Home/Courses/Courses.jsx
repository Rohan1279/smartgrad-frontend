import course1 from "../../../assets/Courses/course 1.png";
import course2 from "../../../assets/Courses/course 2.png";
import course3 from "../../../assets/Courses/course 3.png";
import course4 from "../../../assets/Courses/course 4.png";
import course5 from "../../../assets/Courses/course 5.png";
import background from "../../../assets/background-shapes.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "../../../components/ui/carousal-specialization";

const Courses = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" text-primary mb-[100px] mt-[150px] px-4"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="flex flex-col mmd:flex-row justify-between mb-7">
          <div className="flex space-x-2">
            <div>
              <h2 className="text-2xl font-bold">Featured Specializations</h2>
              <p className="text-base">
                Broaden Your Scope with Defined Skill Sets for Personal and
                Professional Growth
              </p>
            </div>
          </div>
        </div>
        <div className="px-12 mt-14">
          <Carousel>
            <CarouselContent className="py-5">
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course1}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">Development</p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course2}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">Design</p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course3}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">Marketing</p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course4}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">
                  Personal Development
                </p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course5}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">
                  Finance and Accounting
                </p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course1}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">Development</p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course2}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">Design</p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course3}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">Marketing</p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course4}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">
                  Personal Development
                </p>
              </CarouselItem>
              <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/5">
                <div className="p-1 flex justify-center">
                  <img
                    src={course5}
                    alt=""
                    className="w-44 h-5w-56 hover:scale-105 transition-all shadow-md"
                  />
                </div>
                <p className="mt-2 font-semibold text-center">
                  Finance and Accounting
                </p>
              </CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious className="" />
            <CarouselNext className="" /> */}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Courses;
