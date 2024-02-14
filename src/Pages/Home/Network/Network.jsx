import background from "../../../assets/Hero-Banner-Bg.png";

import NetworkIcon from "../../../assets/ThemeIcons/NetworkIcon";
import SakibImage from "../../../assets/TeamImages/Sakib.png";
import RaihanImage from "../../../assets/TeamImages/Raihan.png";
import KlaraImage from "../../../assets/TeamImages/Klara.png";
import MansurImage from "../../../assets/TeamImages/Mansur.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../../components/ui/carousel-aptitude";
import { Card, CardContent } from "../../../components/ui/card";
import NetworkCard from "./NetworkCard";

const Network = () => {
  const team = [
    {
      name: "Sakib Ahmed",
      designation: "Finance Counselor",
      image: SakibImage,
      link: "https://www.linkedin.com/in/sakib-ahmed-10836315/",
    },
    {
      name: "Raihan Ahmed",
      designation: "Career Counselor",
      image: RaihanImage,
      link: "https://www.linkedin.com/in/raihanalauddin/",
    },
    {
      name: "Klara Klarowicz",
      designation: "Investment Manager",
      image: KlaraImage,
      link: "https://www.linkedin.com/in/klara-klarowicz/",
    },
    {
      name: "Mansur Abbasi",
      designation: "Finance Counselor",
      image: MansurImage,
      link: "https://www.linkedin.com/in/mansur-abbasi-59a08bb2/",
    },
  ];

  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-[#595959] relative text-primary "
    >
      <div className="py-12" style={{ backdropFilter: "" }}>
        <div className="max-w-7xl mx-auto relative p-8 bg-white bg-opacity-55 rounded-xl">
          <div className="flex">
            <div className="flex justify-between mb-7 w-3/5">
              <div className="flex space-x-10 ">
                <div className="p-4 px-12">
                  <div className="flex items-center gap-x-2">
                    <NetworkIcon className={"w-10 stroke-primary fill-none"} />
                    <h2 className="text-3xl font-bold">Network</h2>
                  </div>
                  <p className="text-5xl mt-3 font-medium ">
                    Unleashing Potential Through Connection
                  </p>
                  <p className="text-lg mt-6 my-4 font-bold">
                    Smartgrad - The Premier Hub for Engaging with Professionals
                    and Academics. Join Smartgrad and be part of a community
                    dedicated to growth, learning, and professional excellence.
                  </p>
                  <ul class="list-disc ml-5 text-xl font-medium">
                    <li>Broaden your professional network significantly</li>
                    <li>
                      Interact with and learn from esteemed thought leaders in
                      your specific field
                    </li>
                    <li>
                      Forge meaningful connections with elite professionals and
                      renowned academics
                    </li>
                  </ul>

                  <button className="bg-[#1C244B] w-fit h-11 px-8 rounded-xl text-white mt-6">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
            <div className="w-2/5 ">
              <Carousel className="w-full ">
                <CarouselContent>
                  {team.map((item, index) => (
                    <CarouselItem key={index} className="">
                      <div className="p-1 ">
                        <Card className="overflow-hidden">
                          <CardContent className="flex aspect-square items-center justify-center relative ">
                            <NetworkCard
                              key={index}
                              img={item.image}
                              name={item.name}
                              designation={item.designation}
                              link={item.link}
                            />
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-24 -bottom-10 w-full bg-gradient-to-t from-white from-60%  to-transparent  -mb-2 "></div>
      <div className="absolute h-24 top-0 -translate-y-1/2 w-full bg-gradient-to-t from-transparent  to-white to-40% -mb-2 "></div>
      {/* <div className="absolute w-full h-20 bg-transparent -bottom-10 backdrop-blur-md"></div> */}
    </section>
  );
};

export default Network;
