import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel-aptitude";
import CtaButton from "./CtaButton";

const Temp1Slider = ({ data }) => {
  console.log(data);

  return (
    <section className=" text-[#595959] mb-[100px] px-4">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between mb-7"></div>

        <Carousel>
          <div className="px-10 mmd:px-20">
            <CarouselContent className="py-5 z-50">
              {data.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col mmd:flex-row justify-center items-center w-11/12 mx-auto">
                    <div className="order-2 mmd:order-1 bg-[#F5F5F5] px-4 md:px-14 flex-1 pt-11 rounded-xl z-40 relative h-fit">
                      <p className="block text-xl font-bold">{item?.title}</p>
                      <p>
                        {item?.subTitle && item.subTitle.length > 120
                          ? `${item.subTitle.substring(0, 120)}...`
                          : item?.subTitle}
                      </p>
                      <div className="flex justify-between items-center ">
                        {item?.cta && (
                          <CtaButton
                            data={item?.cta}
                            className={"px-3 py-3 my-5"}
                          />
                        )}
                        <div className="ml-auto my-5">
                          <CarouselPrevious className="mr-[18px]" />
                          <CarouselNext className="" />
                        </div>
                      </div>
                    </div>
                    <div className="order-1 mmd:order-2 flex-1 rounded-xl overflow-hidden w-full mmd:w-[375px] h-[417px]">
                      <img
                        src={
                          "https://smartgrad.org/assets/image/slider/slider-4.jpg"
                        }
                        alt=""
                        className="w-full h-full object-cover"
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

export default Temp1Slider;
