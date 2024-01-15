import NavIcon from "../../assets/smart-grad.svg";
import search from "../../assets/search.png";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md text-[#595959]">
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
            <div className="hidden sm:flex justify-center items-center space-x-11 sm:ml-8 ">
              {/* <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="relative">
                    <NavigationMenuTrigger className="">
                      Universities
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute flex flex-col  space-y-3">
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        {" "}
                        University Admission
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Essay Writing
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Scholarships
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Visa Processing & Travel
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Extracurricular Activities & Soft Skills
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem className="">
                    <NavigationMenuTrigger className="relative">
                      Careers
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="absolute  flex flex-col  space-y-3 bg-blue-500">
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        CV Review
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Mock Interview
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Soft Skill Development
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Networking
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Job App Support
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Counselling
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Aptitudes</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col  space-y-3">
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Soft Skills
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Standardized Test Prep
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Technical Skills
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Business Skills
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Networks</NavigationMenuTrigger>
                    <NavigationMenuContent className="flex flex-col  space-y-3">
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Sector Consultants
                      </NavigationMenuLink>

                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Mentors
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Friends
                      </NavigationMenuLink>
                      <NavigationMenuLink className="py-2 bg-red-400  w-96">
                        Community
                      </NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu> */}
              <DropdownMenu>
                <DropdownMenuTrigger className="font-normal focus:outline-none text-[15px] ">
                  Universities
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>University Admission</DropdownMenuItem>
                  <DropdownMenuItem>Essay Writing</DropdownMenuItem>
                  <DropdownMenuItem>Visa Processing & Travel</DropdownMenuItem>
                  <DropdownMenuItem>
                    {" "}
                    Extracurricular Activities & Soft Skills
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu className="">
                <DropdownMenuTrigger className="font-normal focus:outline-none text-[15px] ">
                  Careers
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>CV Review</DropdownMenuItem>
                  <DropdownMenuItem>Mock Interview</DropdownMenuItem>
                  <DropdownMenuItem>Soft Skill Development</DropdownMenuItem>
                  <DropdownMenuItem>Networking</DropdownMenuItem>
                  <DropdownMenuItem>Job App Support</DropdownMenuItem>
                  <DropdownMenuItem>Counselling</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="font-normal focus:outline-none text-[15px]">
                  Aptitudes
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Soft Skills</DropdownMenuItem>
                  <DropdownMenuItem>Standardized Test Prep</DropdownMenuItem>
                  <DropdownMenuItem>Technical Skills</DropdownMenuItem>
                  <DropdownMenuItem>Networking</DropdownMenuItem>
                  <DropdownMenuItem>Business Skills</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger className="font-normal focus:outline-none text-[15px] ">
                  Networks
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Sector Consultants</DropdownMenuItem>
                  <DropdownMenuItem>Mentors</DropdownMenuItem>
                  <DropdownMenuItem>Friends</DropdownMenuItem>
                  <DropdownMenuItem>Networking</DropdownMenuItem>
                  <DropdownMenuItem>Community</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
