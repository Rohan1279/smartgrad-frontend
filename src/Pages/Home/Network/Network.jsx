import background from "../../../assets/Background/background-primary.png";

import AptitudeIcon from "../../../assets/NetworkIcon.png";

// import AptitudeList from "../../../assets/dummy/aptitude.json";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "../../../components/ui/carousel-aptitude";

const Network = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="text-[#595959] relative"
    >
      <div className="py-12" style={{ backdropFilter: "blur(8px)" }}>
        <div className="max-w-7xl mx-auto relative p-8 bg-white bg-opacity-55 rounded-xl">
          <div className="flex">
            <div className="flex justify-between mb-7 w-3/5">
              <div className="flex space-x-10 ">
                <div className="p-4 px-12">
                  <div className="flex items-center">
                    <img
                      src={AptitudeIcon}
                      alt="advance-icon"
                      className="w-12 h-12 mr-4"
                    />
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
                
                  <button className="bg-[#595959] w-fit h-11 px-8 rounded-xl text-white mt-6">
                    Coming Soon
                  </button>
                
                </div>
              </div>
            </div>
            <div className="w-2/5">
              <img
                src={"https://smartgrad.org/assets/image/slider/slider-4.jpg"}
                alt=""
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-40 bottom-0 w-full bg-gradient-to-b from-transparent to-white -mb-2"></div>
    </section>
  );
};

export default Network;
