import Analytics from "@/components/common/Analytics";
import MenuTab from "@/components/common/MenuTab";
import StatCard from "@/components/ui/card/StatCard";
import { currentDate } from "@/helpers/date";
import NumberCountAnimation from "@/helpers/number-count-animation";
// import { useHorizontalScroll } from "@/utils/useSideScroll";
import clsx from "clsx";
import { useState } from "react";
import {
  Search,
  BuildingCommunity,
  Cash,
  Users,
  FileTime,
  HexagonLetterA,
  FileText,
  Tool,
  InfoCircle,
  AlignBoxBottomCenter,
  UserCircle,
  MessageCircle,
} from "tabler-icons-react";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  // const scrollRef = useHorizontalScroll();

  const handleClickTab = ({ index }: { index: number }) => {
    setActiveTabIndex(index);
  };

  const stats = [
    {
      title: "Total Apartment",
      count: 130,
      Icon: BuildingCommunity,
    },
    {
      title: "On hold Deposits",
      count: 7,
      color: "primary",
      Icon: Cash,
    },
    {
      title: "Total Tenant",
      count: 118,
      color: "primary",
      Icon: Users,
    },
    {
      title: "Pending Inspections",
      count: 13,
      color: "primary",
      Icon: FileTime,
    },
  ];

  const Tab = [
    {
      title: "About",
      Icon: HexagonLetterA,
      content: "about",
    },
    {
      title: "Agreement",
      Icon: FileText,
      content: "agreement",
    },
    {
      title: "Enquiry Message",
      Icon: MessageCircle,
      notif: true,
      countNotif: 2,
      content: "enquiry",
    },
    {
      title: "Maintenance Request",
      Icon: Tool,
      content: "maintenance",
    },
    {
      title: "Reporting",
      Icon: InfoCircle,
      notif: true,
      countNotif: 20,
      content: "reporting",
    },
    {
      title: "Analytics",
      Icon: AlignBoxBottomCenter,
      content: <Analytics sidebar={sidebar} setSidebar={setSidebar} />,
    },
  ];

  return (
    <div className="flex">
      <section className="w-full py-5 bg-white lg:w-2/3 md:pr-5">
        <div className="space-y-2">
          <p className="text-xs text-black md:text-xs ">{currentDate()}</p>
          <div>
            <p className="text-xl text-black md:text-2xl">
              Welcome back, Georges
            </p>
          </div>
          <p className="text-xs font-light text-secondary md:text-xs">
            This is property portfolio report.
          </p>
        </div>
        <div className="flex items-center justify-between w-full gap-5 mt-5 overflow-x-auto snap-x scrollbar-hide whitespace-nowrap">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              count={NumberCountAnimation({ targetNumber: stat.count })}
              Icon={stat.Icon}
            />
          ))}
        </div>
        <div className="h-screen">
          <div className="sticky z-30 flex w-full pb-px overflow-x-scroll bg-white border-b snap-x top-32 whitespace-nowrap border-secondaryLight scrollbar-hide">
            {Tab.map((tab, index) => (
              <MenuTab
                key={index}
                title={tab.title}
                Icon={tab.Icon}
                activeTabIndex={activeTabIndex}
                index={index}
                notif={tab.notif}
                countNotif={tab.countNotif}
                handleClick={() => handleClickTab({ index })}
              />
            ))}
          </div>
          <div className="">
            {Tab.map((tab, index) => (
              <div
                key={index}
                className={clsx("w-full my-5", {
                  hidden: activeTabIndex !== index,
                })}
              >
                {tab.content}
                {tab.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="hidden w-1/3 pl-5 text-black bg-white border-l overscroll-auto lg:inline-block md:py-5 border-secondaryLight">
        <div className="">
          <div className="flex items-center justify-between bg-white">
            <div className="flex items-center space-x-1">
              <p className="">Active Properties</p>
              <span>(118)</span>
            </div>
            <button className="group">
              <Search
                className="w-6 h-6 text-secondary group-hover:text-black"
                strokeWidth={1}
              />
            </button>
          </div>
          <div className="divide-y divide-secondaryLight">
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
            <div className="py-5">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-black">
                  20’ 1st floor Family building
                </p>
                <span className="px-3 py-1 text-xs rounded-full bg-green/10 text-green">
                  ACTIVE
                </span>
              </div>
              <div className="flex items-center justify-between font-light">
                <div className="flex items-center space-x-5">
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <UserCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>2 Tenant</p>
                  </div>
                  <div className="flex items-center space-x-1 text-xs text-secondary">
                    <InfoCircle className="w-5 h-5" strokeWidth={1.3} />
                    <p>1 Request</p>
                  </div>
                </div>
                <div className="text-xs text-black">
                  <span>124 sq m</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="text-xs text-black underline">
              See 111 more
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
