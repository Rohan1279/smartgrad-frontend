import testimonial from "../../../assets/testimonial.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel-aptitude";

import student1 from "../../../assets/Students/student 4.png";
import student2 from "../../../assets/Students/student 5.png";
import student3 from "../../../assets/Students/student 6.png";
import icon1 from "../../../assets/TestimonialIcons/Career.png";
import icon2 from "../../../assets/TestimonialIcons/fa-solid_user-graduate.png";
import icon3 from "../../../assets/TestimonialIcons/Group 33.png";
import AnimatedNumber from "../../../components/AnimatedNumber";
import useWindowDimensions from "../../../components/core/windowsDimention";
import TestimonialList from "../../../assets/dummy/testimonial.json";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { useEffect, useRef, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  const { width } = useWindowDimensions();
  const [activeInx, setActiveInx] = useState(0);
  const owlCarouselRef = useRef(null);
  const handleIndexChanged = (e) => {
    const currentIndex = e.item.index;
    console.log(currentIndex);
    // setActiveInx(currentIndex);
  };
  const options = {
    items: width > 992 ? 3 : width > 768 ? 2 : 1,
    loop: true,
    margin: 10,
    autoplay: false,
  };

  return (
    <section className=" text-[#595959] py-[86px] bg-[#F9F9F9] relative mb-[100px] px-4">
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

        <div className="flex justify-between items-center mb-36 px-4">
          <OwlCarousel
            ref={owlCarouselRef}
            className="owl-theme testimonialSwiper"
            onChange={(e) => {
              handleIndexChanged(e);
            }}
            {...options}
          >
            {TestimonialList.map((item, index) => (
              <div className="item" key={index}>
                <div
                  className={`${
                    index === activeInx
                      ? "bg-[#D9D9D9] text-[#595959] pt-[40px] w-[450px] h-[214px] shadow-lg"
                      : "bg-[#595959] text-white py-8 w-[400px] h-[185px] shadow-md leading-3"
                  } rounded-xl px-10 text-center relative testimonial-card`}
                >
                  <p
                    className={`${
                      index === activeInx
                        ? "text-left mt-11 text-5xl h-4"
                        : "text-left mt-8 text-[33px] h-1"
                    }`}
                  >
                    “
                  </p>
                  <p className="text-xs text-right">{item?.content}</p>
                  <p
                    className={`${
                      index === activeInx
                        ? "text-5xl text-right "
                        : "text-[33px] text-right mt-3"
                    }`}
                  >
                    ”
                  </p>
                  <div
                    className={`bg-transparent left-6 flex absolute ${
                      index === activeInx ? "-top-14" : "text-white -top-8"
                    } items-end text-left space-x-[14px]`}
                  >
                    <div
                      className={`${
                        index === activeInx
                          ? "w-[130px] h-[130px]"
                          : "w-[74px] h-[74px]"
                      } rounded-lg overflow-hidden`}
                    >
                      <img
                        src={item?.image}
                        alt=""
                        className=" object-fill mx-auto"
                      />
                    </div>
                    <div
                      className={`leading-3 ${
                        index === activeInx ? "mb-5" : "mb-2 "
                      }`}
                    >
                      <p className="text-sm">{item?.name}</p>
                      <p className="text-md font-bold">{item?.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Add more items as needed */}
          </OwlCarousel>
          {/* <Carousel className="testimonialSwiper" set>
            <CarouselContent className="py-5 item-Container">
              {TestimonialList.map((item, index) => (
                <CarouselItem
                  className="sliderGroup basis-full lg:basis-1/3"
                  key={index}
                >
                  <div
                    className={`${
                      index === activeInx
                        ? "bg-[#D9D9D9] text-[#595959] pt-[40px] w-[450px] h-[214px] shadow-lg"
                        : "bg-[#595959] text-white py-8 w-[400px] h-[185px] shadow-md leading-3"
                    } rounded-xl px-10 text-center relative`}
                  >
                    <p
                      className={`${
                        index === activeInx
                          ? "text-left mt-11 text-5xl h-4"
                          : "text-left mt-8 text-[33px] h-1"
                      }`}
                    >
                      “
                    </p>
                    <p className="text-xs text-right">{item?.content}</p>
                    <p
                      className={`${
                        index === activeInx
                          ? "text-5xl text-right "
                          : "text-[33px] text-right mt-3"
                      }`}
                    >
                      ”
                    </p>
                    <div
                      className={`bg-transparent left-6 flex absolute ${
                        index === activeInx ? "-top-14" : "text-white -top-8"
                      } items-end text-left space-x-[14px]`}
                    >
                      <div
                        className={`${
                          index === activeInx
                            ? "w-[130px] h-[130px]"
                            : "w-[74px] h-[74px]"
                        } rounded-lg overflow-hidden`}
                      >
                        <img
                          src={item?.image}
                          alt=""
                          className=" object-fill mx-auto"
                        />
                      </div>
                      <div
                        className={`leading-3 ${
                          index === activeInx ? "mb-5" : "mb-2 "
                        }`}
                      >
                        <p className="text-sm">{item?.name}</p>
                        <p className="text-md font-bold">{item?.role}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center">
              <CarouselPrevious className="" />
              <CarouselNext className="" />
            </div>
          </Carousel> */}
        </div>
        <div className="text-right mt-20">
          <h2 className="text-2xl font-bold text-center">
            Helping Small Business to Grow and Expand
          </h2>
          <p className="text-center text-[20px]">More Than</p>
          <div className="grid grid-cols-2 md:grid-cols-4 mt-[60px]">
            <div className="flex flex-col mx-auto">
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
            <div className="flex flex-col  mx-auto">
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
            <div className="flex flex-col  mx-auto">
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
            <div className="flex flex-col  mx-auto">
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
