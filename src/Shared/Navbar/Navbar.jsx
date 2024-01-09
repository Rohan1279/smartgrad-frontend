import NavIcon from "../../assets/smart-grad.svg";
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
              <div className="flex space-x-4">
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
                  Accelerate
                </a>
                <a
                  href="/network"
                  className="text-gray-700 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Network
                </a>
              </div>
            </div>
          </div>
          {/* Profile and Settings */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Search icon and other action items */}
            <button className="bg-gray-100 p-2 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Search</span>
              {/* Insert search icon here */}
            </button>
            {/* Profile dropdown */}
            <div className="ml-3 relative">
              {/* Insert profile icon here */}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
