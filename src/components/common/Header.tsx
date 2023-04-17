import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  Bell,
  ChevronDown,
  CirclePlus,
  LayoutSidebarLeftExpand,
  LayoutSidebarRightExpand,
  Search,
} from "tabler-icons-react";

const nav = [
  {
    name: "Dashboard",
    path: "/",
    active: true,
  },
  {
    name: "All Properties",
    path: "/properties",
    active: false,
  },
  {
    name: "Deposits",
    path: "/deposits",
    active: false,
  },
];

const Header = () => {
  const router = useRouter();
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between h-20 px-2 bg-white border-b md:px-5 border-grayLight">
        <div className="flex items-center space-x-10">
          <nav>
            <ul className="items-center hidden space-x-5 text-xs text-black md:flex whitespace-nowrap flex-nowrap">
              {nav.map((item) => (
                <Link
                  key={`item.name`}
                  href={item.path}
                  className={clsx("px-3 py-2 cursor-pointer", {
                    btnActive: router.pathname == item.path,
                  })}
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
        </div>
        <button
          onClick={() => setSidebar((prev) => !prev)}
          className="flex-1 md:hidden group"
        >
          {sidebar ? (
            <LayoutSidebarRightExpand
              className="w-8 h-8 text-gray group-hover:text-black"
              strokeWidth={1}
            />
          ) : (
            <LayoutSidebarLeftExpand
              className="w-8 h-8 text-gray group-hover:text-black"
              strokeWidth={1}
            />
          )}
        </button>
        <div className="flex items-center gap-10">
          <div className="items-center hidden space-x-5 lg:flex">
            <div className="relative w-full sm:block">
              <input
                className="h-10 pl-10 pr-12 text-xs border-none rounded-md w-80 bg-grayLight placeholder:text-xs"
                id="search"
                type="search"
                placeholder="What are you looking for"
              />

              <div className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-md top-1/2 left-1">
                <Search className="w-5 h-5" strokeWidth={1.3} />
              </div>
              <div className="absolute p-1 text-xs text-center text-white transition -translate-y-1/2 rounded-md right-2 bg-gray top-1/2">
                <kbd className="inline-flex items-center font-sans font-medium">
                  ⌘K
                </kbd>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <button className="lg:hidden group">
              <Search
                className="w-6 h-6 text-gray group-hover:text-black"
                strokeWidth={1}
              />
            </button>
            <button className="relative group">
              <Bell
                className="w-6 h-6 text-gray group-hover:text-black"
                strokeWidth={1}
              />
              <span className="absolute block w-2 h-2 border border-white rounded-full right-1 bg-red top-2"></span>
            </button>

            <button
              onClick={() => setSidebar((prev) => !prev)}
              className="flex items-center space-x-2 group"
            >
              <div className="relative w-7 h-7 md:w-8 md:h-8">
                <Image
                  src="/images/avatar.webp"
                  fill
                  alt="avatar"
                  className="object-cover rounded-full"
                />
              </div>
              <ChevronDown
                className={clsx(
                  "text-gray transition duration-300 group-hover:text-black",
                  {
                    "transform rotate-180": sidebar,
                  }
                )}
                size={15}
                strokeWidth={1.3}
              />
            </button>
          </div>
        </div>
      </div>
      {/* nav actions per page */}
      <div className="sticky flex items-center px-2 text-black bg-white border-b top-20 h-14 md:px-5 border-grayLight">
        <div className="flex-1">
          <button
            onClick={() => setSidebar((prev) => !prev)}
            className="flex items-center space-x-2 text-xs whitespace-nowrap group"
          >
            <p>Rental Management</p>
            <ChevronDown
              className={clsx(
                "text-gray transition duration-300 group-hover:text-black",
                {
                  "transform rotate-180": sidebar,
                }
              )}
              size={15}
              strokeWidth={1.3}
            />
          </button>
        </div>
        <div>
          <button className="flex items-center px-3 py-2 space-x-2 text-xs rounded-md group whitespace-nowrap bg-purple/10 text-purple">
            <CirclePlus
              className="w-5 h-5 transition duration-500 group-hover:rotate-90"
              strokeWidth={1.3}
            />
            <p>Add Tenant</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
