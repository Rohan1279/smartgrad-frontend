import Map from "../../Pages/Home/Map/Map";
import socialIcons from "../../assets/Follow icons.png";
export default function Footer() {
  return (
    <footer className="text-[#595959]  bg-[#F5F5F5] text-sm py-28">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-6 ">
          <div className="col-span-2 pr-16">
            <h2 className="text-4xl font-bold lowercase">
              SMART<span className="text-[#00D4D6] ">GRAD</span>
            </h2>
            <p className="mt-5 uppercase text-sm">
              your virtual education and career advisor for life Smartgrad is a
              brand owned by Yugen Group Limited,registered in UK.
            </p>
            <div className="mt-5">
              <h3 className="uppercase text-xl font-bold ">Follow Us</h3>
              <img src={socialIcons} alt="" className="w-1/2" />
            </div>
          </div>
          <div className="col-span-2 pl-10 text-right">
            <h3 className="uppercase text-xl font-bold ">
              join our Newsletter{" "}
            </h3>
            <p className="pl-28 uppercase text-sm">
              Stay updated with our exclusive newsletter, delivering insightful
              educational content, latest industry trends, and exciting
              opportunities right to your inbox.
            </p>

            <div className="relative mt-6">
              <input
                type="text"
                className="w-full  rounded-xl px-5 py-4 "
                placeholder="Enter Your E-mail "
              />
              <button className="absolute bottom-2 right-2 bg-[#595959] text-white px-3 py-2 rounded-xl">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="col-span-2">
            <Map />
          </div>
        </div>
      </div>
    </footer>
  );
}
