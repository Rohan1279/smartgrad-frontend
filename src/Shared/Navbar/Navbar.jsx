import NavIcon from "../../assets/smart-grad.svg";
import search from "../../assets/search.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../components/ui/navigation-menu";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md ">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* Logo and Brand Name */}
            <div className="flex-shrink-0 flex items-center">
              <img
                className="block lg:hidden h-8 w-auto"
                src={NavIcon}
                alt="Your Logo"
              />
              <img
                className="hidden lg:block h-8 w-auto"
                src={NavIcon}
                alt="Your Logo"
              />
            </div>
            {/* Navigation Links */}
            <div className="hidden sm:block sm:ml-6">
              {/* <div className="flex space-x-4 text-[#595959]">
                <a
                  href="/university"
                  className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Universities
                </a>
                <a
                  href="/career"
                  className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Careers
                </a>
                <a
                  href="/skill"
                  className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Aptitude
                </a>
                <a
                  href="/network"
                  className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Network
                </a>
              </div> */}
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative">
                    <NavigationMenuTrigger className="">
                      Universities
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute top-0">
                      <NavigationMenuLink>
                        {" "}
                        University Admission
                      </NavigationMenuLink>
                      <NavigationMenuLink>Essay Writing</NavigationMenuLink>
                      <NavigationMenuLink>Scholarships</NavigationMenuLink>
                      <NavigationMenuLink>
                        Visa processing & travel
                      </NavigationMenuLink>
                      <NavigationMenuLink>
                        Extracurricular activities & soft skills
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Careers</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>CV Review</NavigationMenuLink>
                      <NavigationMenuLink>Mock interview</NavigationMenuLink>
                      <NavigationMenuLink>
                        Soft skill development
                      </NavigationMenuLink>
                      <NavigationMenuLink>Networking</NavigationMenuLink>
                      <NavigationMenuLink>Job app support</NavigationMenuLink>
                      <NavigationMenuLink>Counselling</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Aptitudes</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Soft Skills</NavigationMenuLink>
                      <NavigationMenuLink>
                        Standardized Test Prep
                      </NavigationMenuLink>
                      <NavigationMenuLink>Technical Skills</NavigationMenuLink>
                      <NavigationMenuLink>Business Skills</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Networks</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>
                        Sector Consultants
                      </NavigationMenuLink>

                      <NavigationMenuLink>Mentors</NavigationMenuLink>
                      <NavigationMenuLink>Friends</NavigationMenuLink>
                      <NavigationMenuLink>Community</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          {/* Profile and Settings */}
          <div className="absolute inset-y-0 right-0 flex space-x-7 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <img
              src={search}
              alt="search-icon"
              className="w-5 cursor-pointer"
            />
            <button className="bg-[#09D5D7] hover:shadow-md transition-all text-white text-[12px] rounded-xl px-3 py-2">
              login/register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
