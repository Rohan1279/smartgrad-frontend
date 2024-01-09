import socialIcons from "../../assets/Follow icons.png";
export default function Footer() {
  return (
    <footer className="text-[#595959]  bg-[#D9D9D9] text-sm py-28">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-6 ">
          <div className="col-span-2 pr-16">
            <h2 className="text-4xl font-bold lowercase">
              SMART<span className="text-[#00D4D6] ">GRAD</span>
            </h2>
            <p className="mt-5 uppercase">
              unlock your potential,navigating education and career success with
              expert guidance Smartgrad is a brand owned by Yugen Group
              Limited,registered in UK.
            </p>
            <div className="relative">
              <input
                type="text"
                className="w-full mt-7 rounded-xl px-5 py-4 "
                placeholder="Enter Your E-mail "
              />
              <button className="absolute bottom-2 right-2 bg-[#595959] text-white px-3 py-2 rounded-xl">
                Subscribe Now
              </button>
            </div>
          </div>
          <div className="col-span-1 pr-10 ">
            <h3 className="text-xl font-bold">London</h3>
            <p>hello@smartgrad.org</p>
            <p>0790 324 0546</p>
            <p>514, Coventry Road,</p>
            <p>Birmingham, B10 0UN</p>
            <h3 className="text-xl font-bold underline uppercase underline-offset-2 mt-12">
              See on Map
            </h3>
          </div>
          <div className="col-span-1 ">
            <h3 className="text-xl font-bold">BANGLADESH</h3>
            <p>hello@smartgrad.org</p>
            <p>+880 1400-442120</p>
            <p className="uppercase">Floor 10, Alauddin Tower,</p>
            <p className="uppercase">Plot 17, Road 113/A,</p>
            <p className="uppercase">Gulshan-2, Dhaka 1212</p>
            <h3 className="text-xl font-bold underline uppercase underline-offset-2 mt-7">
              See on Map
            </h3>
          </div>

          <div className="col-span-2 pl-10 text-right">
            <h3 className="uppercase text-xl font-bold ">
              join our Newsletter{" "}
            </h3>
            <p>
              Stay updated with our exclusive newsletter, delivering insightful
              educational content, latest industry trends, and exciting
              opportunities right to your inbox.
            </p>
            <div className="mt-10">
              <h3 className="uppercase text-xl font-bold ">Follow Us</h3>
              <img src={socialIcons} alt="" className="w-1/2 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
