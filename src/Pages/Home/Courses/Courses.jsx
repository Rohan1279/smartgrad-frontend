import bookmark from "../../../assets/bookmark.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import course1 from "../../../assets/Courses/course 1.png";
import course2 from "../../../assets/Courses/course 2.png";
import course3 from "../../../assets/Courses/course 3.png";
import course4 from "../../../assets/Courses/course 4.png";
import course5 from "../../../assets/Courses/course 5.png";
const Courses = () => {
  return (
    <section className=" text-[#595959] my-24">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img src={bookmark} alt="course-icon" className="w-7 h-10" />
            <div>
              <h2 className="text-2xl font-bold">Featured Courses</h2>
              <p className="text-base">
                Look for the jobs that suit you and start applying now
              </p>
            </div>
          </div>
          <span className="underline text-base font-bold">See More</span>
        </div>
        <div className="px-12 mt-14">
          <Carousel>
            <CarouselContent className="py-5">
              <CarouselItem>
                <div className="flex justify-evenly space-x-4">
                  <img
                    src={course1}
                    alt=""
                    className="w-56 h-5w-56 hover:scale-105 transition-all"
                  />
                  <img
                    src={course2}
                    alt=""
                    className="w-56 h-5w-56 hover:scale-105 transition-all"
                  />
                  <img
                    src={course3}
                    alt=""
                    className="w-56 h-5w-56 hover:scale-105 transition-all"
                  />
                  <img
                    src={course4}
                    alt=""
                    className="w-56 h-5w-56 hover:scale-105 transition-all"
                  />
                  <img
                    src={course5}
                    alt=""
                    className="w-56 h-5w-56 hover:scale-105 transition-all"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="" />
            <CarouselNext className="" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Courses;
