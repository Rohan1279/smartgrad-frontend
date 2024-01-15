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
import icon1 from "../../../assets/TestimonialIcons/Career.png";
import icon2 from "../../../assets/TestimonialIcons/fa-solid_user-graduate.png";
import icon3 from "../../../assets/TestimonialIcons/Group 33.png";

const Testimonials = () => {
  return (
    <section className=" text-[#595959] py-[86px] bg-[#F9F9F9] relative mb-[100px]">
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

        <div className="flex justify-between items-center mb-36">
          <div className="bg-[#595959] text-white rounded-xl   px-10 py-8 text-center  w-[400px] h-[185px] ">
            <p className="relative text-xs  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit ipsum possimus tempore voluptatum provident illo
              cumque nam dolorem, facere fugiat labore autem deserunt accusamus
              impedit nobis veritatis hic quos tenetur?
              <div className="bg-transparent text-[#595959] absolute -bottom-40 w-full mr-auto ">
                <img src={student1} alt="" className="w-24 mx-auto" />
                <p className="mt-2">Richie Moor</p>
                <p className="text-lg font-bold">MIT University</p>
              </div>
            </p>
          </div>
          <div className="bg-[#00D4D6] text-white rounded-xl   px-10 pt-[40px] text-center w-[450px] h-[210px]">
            <p className="relative text-[12px]  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit ipsum possimus tempore voluptatum provident illo
              cumque nam dolorem, facere fugiat labore autem deserunt accusamus
              impedit nobis veritatis hic quos tenetur?
              <div className="bg-transparent text-[#595959] absolute -bottom-52 w-full mr-auto ">
                <img src={student2} alt="" className="w-28 mx-auto" />
                <p className="mt-2">Richie Moor</p>
                <p className="text-lg font-bold">MIT University</p>
              </div>
            </p>
          </div>
          <div className="bg-[#595959] text-white rounded-xl   px-10 py-8 text-center  w-[400px] h-[185px]">
            <p className="relative text-xs  ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Reprehenderit ipsum possimus tempore voluptatum provident illo
              cumque nam dolorem, facere fugiat labore autem deserunt accusamus
              impedit nobis veritatis hic quos tenetur?
              <div className="bg-transparent text-[#595959] absolute -bottom-40 w-full mr-auto ">
                <img src={student3} alt="" className="w-24 mx-auto" />
                <p className="mt-2">Richie Moor</p>
                <p className="text-lg font-bold">MIT University</p>
              </div>
            </p>
          </div>
        </div>
        <div className="text-right mt-20">
          <h2 className="text-2xl font-bold text-center">
            Helping Small Business to Grow and Expand
          </h2>
          <p className="text-center text-[20px]">More Than</p>
          <div className="grid grid-cols-4 mt-[60px]">
            <div>
              <div className="w-20 h-20 mx-auto">
                <img src={icon1} alt="" className=" " />
              </div>
              <div className=" my-2">
                <h3 className="text-center text-3xl font-bold">33+</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div>
              <div className="w-20 h-20 mx-auto">
                <img src={icon2} alt="" className=" " />
              </div>
              <div className="my-2">
                <h3 className="text-center text-3xl font-bold">33+</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div>
              <div className="w-20 h-20 mx-auto">
                <img src={icon3} alt="" className=" " />
              </div>
              <div className=" my-2">
                <h3 className="text-center text-3xl font-bold">33+</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div>
              <div className="w-20 h-20 mx-auto">
                <img src={icon1} alt="" className=" " />
              </div>
              <div className=" my-2">
                <h3 className="text-center text-3xl font-bold">33+</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
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
