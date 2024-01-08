import testimonial from "../../../assets/testimonial.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel";
import TestomonialCard from "./TestomonialCard";
import student1 from "../../../assets/Students/student 1.png";
import student2 from "../../../assets/Students/student 2.png";
import student3 from "../../../assets/Students/student 3.png";
const Testimonials = () => {
  return (
    <section className=" text-[#595959] pt-36 pb-56 bg-[#F9F9F9] relative">
      <div className="max-w-7xl mx-auto ">
        {/* SECTION HEADING */}
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <img
              src={testimonial}
              alt="convocation-cap"
              className="w-10 h-10"
            />
            <div>
              <h2 className="text-2xl font-bold">Testimonials</h2>
              <p className="text-base">
                Look at what others want to say about us
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div className="bg-[#595959] text-white rounded-md mx-5  px-10 py-8 text-center">
            <p className="relative">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit ipsum possimus tempore voluptatum provident illo
              cumque nam dolorem, facere fugiat labore autem deserunt accusamus
              impedit nobis veritatis hic quos tenetur?
              <div className="bg-transparent text-[#595959] absolute -bottom-40 w-full mr-auto ">
                <img src={student1} alt="" className="w-24 mx-auto" />
                <span>Richie Moor</span>
                <p className="text-lg font-bold">MIT University</p>
              </div>
            </p>
          </div>
          <div className="bg-[#00D4D6] text-white rounded-md mx-5  px-10 py-8 text-center">
            <p className="relative">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit ipsum possimus tempore voluptatum provident illo
              cumque nam dolorem, facere fugiat labore autem deserunt accusamus
              impedit nobis veritatis hic quos tenetur?
              <div className="bg-transparent text-[#595959] absolute -bottom-40 w-full mr-auto ">
                <img src={student2} alt="" className="w-24 mx-auto" />
                <span>Richie Moor</span>
                <p className="text-lg font-bold">MIT University</p>
              </div>
            </p>
          </div>
          <div className="bg-[#595959] text-white rounded-md mx-5  px-10 py-8 text-center">
            <p className="relative">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit ipsum possimus tempore voluptatum provident illo
              cumque nam dolorem, facere fugiat labore autem deserunt accusamus
              impedit nobis veritatis hic quos tenetur?
              <div className="bg-transparent text-[#595959] absolute -bottom-40 w-full mr-auto ">
                <img src={student3} alt="" className="w-24 mx-auto" />
                <span>Richie Moor</span>
                <p className="text-lg font-bold">MIT University</p>
              </div>
            </p>
          </div>
        </div>
        <div className="text-right absolute bottom-8 translate-x-full">
          <p>
            <span className="font-bold"> 478+</span> Individuals have shown
            interest and also applied to the universities via{" "}
            <span className="font-bold">SmartGrad</span>.
          </p>
          <p>
            <span className="font-bold"> 100+</span> Applications were
            confirmed. Congratulations to the applicants.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
