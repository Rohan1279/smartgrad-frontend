import icon1 from "../../../assets/TestimonialIcons/Career.png";
import icon2 from "../../../assets/TestimonialIcons/fa-solid_user-graduate.png";
import icon3 from "../../../assets/TestimonialIcons/Group 33.png";
import AnimatedNumber from "../../../components/AnimatedNumber";
import useWindowDimensions from "../../../components/core/windowsDimention";
import TestimonialList from "../../../assets/dummy/testimonial.json";
import { useEffect, useRef, useState } from "react";
// Import Swiper styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const { width } = useWindowDimensions();
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [currentInx, setCurrentInx] = useState(width > 1215 ? 1 : 0);
  const [prevInx, setPrevInx] = useState(0);
  const [activeInx, setActiveInx] = useState(width > 1215 ? 1 : 0);
  const slider = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: width > 1215 ? 3 : width > 868 ? 2 : 1,
    slidesToScroll: 1,
    beforeChange: (current, inx) => {
      console.log(width);
      if (width > 1215) {
        if (TestimonialList.length - 2 === inx) {
          setActiveInx(inx + 1);
          setCurrentInx(inx + 1);
          setPrevInx(inx);
        } else if (TestimonialList.length - 1 === inx) {
          setActiveInx(0);
          setCurrentInx(0);
          setPrevInx(-1);
        } else if (inx > -1) {
          setActiveInx(inx + 1);
          setCurrentInx(inx + 1);
          setPrevInx(inx);
        } else {
          setActiveInx(inx);
          setCurrentInx(inx);
          setPrevInx(inx - 1);
        }
      } else {
        if (TestimonialList.length - 2 === inx) {
          setActiveInx(inx);
          setCurrentInx(inx);
          setPrevInx(inx - 1);
        } else if (TestimonialList.length - 1 === inx) {
          setActiveInx(TestimonialList.length - 1);
          setCurrentInx(TestimonialList.length - 1);
          setPrevInx(TestimonialList.length - 2);
        } else if (inx > -1) {
          setActiveInx(inx);
          setCurrentInx(inx);
          setPrevInx(inx - 1);
        } else {
          setActiveInx(inx);
          setCurrentInx(inx);
          setPrevInx(inx - 1);
        }
      }
    },
  };

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      console.log(activeInx);
      if (currentWidth >= 1215 && newWindowWidth < 1215) {
        // Window is decreasing in size, switch to left card
        setActiveInx((prev) => prev - 1);
      } else if (currentWidth < 1215 && newWindowWidth >= 1215) {
        // Window is increasing in size, switch to center card
        setActiveInx((prev) => prev + 1);
      }

      // Update the state with the new window width
      setCurrentWidth(newWindowWidth);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentWidth]);

  return (
    <section className=" text-[#595959] py-[86px] bg-[#F9F9F9] relative mb-[100px] px-4">
      <div className="max-w-7xl mx-auto ">
        {/* SECTION HEADING */}
        <div className="flex justify-between mb-7">
          <div className="flex space-x-2">
            <div>
              <h2 className="text-2xl font-bold">Testimonials</h2>
              <p className="text-base">
                Look at what others want to say about us
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between items-center mb-36 px-4">
          <Slider
            ref={slider}
            className="custom-carousel-container"
            {...settings}
          >
            {TestimonialList.map((item, index) => (
              <div className="custom-carousel-item" key={index}>
                <div
                  className={`${
                    index === activeInx
                      ? "bg-[#D9D9D9] text-[#595959] pt-[40px] w-[450px] h-[214px] shadow-lg"
                      : "bg-[#595959] text-white py-8 w-[400px] h-[185px] shadow-md leading-3"
                  } rounded-xl px-4 sm:px-10 text-center relative testimonial-card ease-in-out duration-300`}
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
          </Slider>
          <div className="flex mt-8 gap-4">
            <button
              className="slick-prev-btn"
              onClick={() => {
                slider.current.slickPrev();
              }}
            >
              &lt;
            </button>
            <button
              className="slick-next-btn"
              onClick={() => {
                slider.current.slickNext();
              }}
            >
              {" "}
              &gt;
            </button>
          </div>
        </div>
        <div className="text-right mt-20">
          <h2 className="text-2xl font-bold text-center">
            Empowering Your Educational and Professional Journey, From
            Application to Career Advancement
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
                <p className="text-center">Acquired Aptitudes</p>
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
                <p className="text-center">Connected through smartgrad</p>
              </div>
            </div>
          </div>

          <p className="text-[20px] text-center mt-[60px]">
            Streamlining Your Pathway to Success: Expert Assistance in
            University Admissions, Strategic Job Placements, Aptitude
            Enhancement, and Building Valuable Professional and Alumni Networks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
