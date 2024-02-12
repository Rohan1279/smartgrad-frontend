import Map from "../../Pages/Home/Map/Map";
import socialIcons from "../../assets/Follow icons.png";
import FacebookIcon from "../../assets/SocialIcons/Facebook.png";
import InstagramIcon from "../../assets/SocialIcons/Instagram.png";
import XIcon from "../../assets/SocialIcons/X.png";
import LinkedInIcon from "../../assets/SocialIcons/LinkedIn.png";
import YoutubeIcon from "../../assets/SocialIcons/Youtube.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="text-primary bg-secondary text-sm py-28 px-4">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-col-2 mmd:grid-cols-6 gap-y-12">
          <div className="col-span-2 pr-16">
            <h2 className="text-4xl font-bold lowercase">
              <span className="text-[#00d4d6]">SMART</span>
              <span className="text-primary">GRAD</span>
            </h2>
            <p className="mt-5 uppercase text-sm">
              your virtual education and career advisor for life Smartgrad is a
              brand owned by Yugen Group Limited,registered in UK.
            </p>
            <div className="mt-5">
              <h3 className="uppercase text-xl font-bold ">Follow Us</h3>
              <div className="flex justify-start items-center gap-x-[9px]">
                <Link
                  to={"https://www.facebook.com/smartgrad.org"}
                  target="_blank"
                >
                  <img src={FacebookIcon} alt="" className="w-[24px] " />
                </Link>
                <Link
                  to={"https://www.linkedin.com/company/smartgrad-org/"}
                  target="_blank"
                >
                  <img src={LinkedInIcon} alt="" className="w-[24px] " />
                </Link>
                <Link
                  to={"https://www.instagram.com/smartgrad_"}
                  target="_blank"
                >
                  <img src={InstagramIcon} alt="" className="w-[24px] " />
                </Link>
                <Link
                  to={"https://www.instagram.com/smartgrad_"}
                  target="_blank"
                >
                  <img src={XIcon} alt="" className="w-[24px] " />
                </Link>
                <Link
                  to={"https://www.youtube.com/@smartgraduk451"}
                  target="_blank"
                >
                  <img src={YoutubeIcon} alt="" className="w-8" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-2 mmd:pl-10 text-left mmd:text-right">
            <h3 className="uppercase text-xl font-bold ">
              join our Newsletter{" "}
            </h3>
            <p className="mmd:pl-28 uppercase text-sm">
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
              <button className="absolute bottom-2 right-2 bg-primary text-white px-3 py-2 rounded-xl">
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
