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
import Typewriter from "../../../components/Typewriter";
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
          <div className="px-20">
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
            <CarouselContent className="py-5 z-50 ">
              <CarouselItem>
                <div className="grid grid-cols-3 place-items-center">
                  <div className="bg-[#F5F5F5] col-span-2 px-14 pt-11 rounded-xl z-40 relative h-fit">
                    <p className="pr-24 font-bold">Standardized Test Prep</p>
                    <p>
                      {/* <Typewriter> */}
                      Prepare for exams like IELTS, GMAT, and GRE with tailored
                      courses and practice materials. Expert instructors and
                      adaptive learning methods ensure an effective and
                      personalized study experience.
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
                  <div className="col-span-1 w-[375px] h-[417px] rounded-xl overflow-hidden">
                    <img
                      src={
                        "https://instagram.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/416459088_18010966109162204_1356082550630320440_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=a_FErz4QqiEAX8QwTmj&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI3MjY1MDY5NTQ1MDg0MDc1OA%3D%3D.2-ccb7-5&oh=00_AfBgiT58WsD0DaX515tbI9ZRpU08SlpIU6T4ulQlTOQZsg&oe=65AD4C2C&_nc_sid=ee9879"
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <Card className="col-span-1">
                    <CardContent className="flex items-center justify-center">
                      <img
                        src={
                          "https://instagram.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/416459088_18010966109162204_1356082550630320440_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=a_FErz4QqiEAX8QwTmj&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI3MjY1MDY5NTQ1MDg0MDc1OA%3D%3D.2-ccb7-5&oh=00_AfBgiT58WsD0DaX515tbI9ZRpU08SlpIU6T4ulQlTOQZsg&oe=65AD4C2C&_nc_sid=ee9879"
                        }
                        alt=""
                        className=" hover:scale-105 transition-all"
                      />
                    </CardContent>
                  </Card> */}
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-3 place-items-center">
                  <div className="bg-[#F5F5F5] col-span-2 px-14 pt-11 rounded-xl z-40 relative h-fit">
                    <p className="pr-24 font-bold">Soft Skills Development</p>
                    <p>
                      Hone essential soft skills such as presentation and
                      negotiation to excel in your professional interactions.
                      Interactive workshops and practical exercises empower you
                      to communicate effectively and navigate diverse
                      situations.
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
                  <div className="col-span-1 w-[375px] h-[417px] rounded-xl overflow-hidden border">
                    <img
                      src={
                        "https://instagram.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/418091761_18011245370162204_2786921879532010556_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=q6hlVRxoheMAX-rnSR_&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI3NDQzNTg0MTk1OTIwNjc3Ng%3D%3D.2-ccb7-5&oh=00_AfADsEtx5apGNn5hGObeDorwxsiW9wNszjpBRLRHMSdMuQ&oe=65ADDA2D&_nc_sid=ee9879"
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-3 place-items-center">
                  <div className="bg-[#F5F5F5] col-span-2 px-14 pt-11 rounded-xl z-40 relative h-fit">
                    <p className="pr-24 font-bold">Well-Being Counseling</p>
                    <p>
                      Prioritize your mental health with our well-being
                      counseling services. Qualified counselors provide support
                      and guidance to help you navigate life's challenges and
                      enhance your overall emotional wellness.
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
                  <div className="col-span-1 w-[375px] h-[417px] rounded-xl overflow-hidden">
                    <img
                      src={
                        "https://instagram.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/387215605_18000512972162204_6077430351365124313_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi45Mzl4Nzg3LnNkciJ9&_nc_ht=instagram.fcgp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=EA03fkwXwqoAX_dYfsz&edm=ABmJApAAAAAA&ccb=7-5&ig_cache_key=MzIxMDQyMjk5ODI4NDk5NzE2Mw%3D%3D.2-ccb7-5&oh=00_AfDmcJXMQKn0rTS6hP6zgVg9_EwhR74RNYhjWvZkfB6QIQ&oe=65AF9E49&_nc_sid=b41fef"
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="grid grid-cols-3 place-items-center">
                  <div className="bg-[#F5F5F5] col-span-2 px-14 pt-11 rounded-xl z-40 relative h-fit">
                    <p className="pr-24 font-bold">
                      Business Skills Enhancement
                    </p>
                    <p>
                      Elevate your business acumen with courses in project
                      management, financial modeling, and valuation. Learn from
                      industry professionals and gain practical insights to
                      excel in the dynamic world of business. Explore our
                      diverse offerings and embark on a journey of continuous
                      improvement across academics, interpersonal skills, mental
                      well-being, and professional competence. Your success
                      starts here
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
                  <div className="col-span-1 w-[375px] h-[417px] rounded-xl overflow-hidden">
                    <img
                      src={
                        "https://instagram.fcgp3-1.fna.fbcdn.net/v/t39.30808-6/418091761_18011245370162204_2786921879532010556_n.jpg?stp=dst-jpg_e15&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyIn0&_nc_ht=instagram.fcgp3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=q6hlVRxoheMAX-rnSR_&edm=ACWDqb8AAAAA&ccb=7-5&ig_cache_key=MzI3NDQzNTg0MTk1OTIwNjc3Ng%3D%3D.2-ccb7-5&oh=00_AfADsEtx5apGNn5hGObeDorwxsiW9wNszjpBRLRHMSdMuQ&oe=65ADDA2D&_nc_sid=ee9879"
                      }
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Advance;
