import Analytics from "@/components/common/Analytics";
import MenuTab from "@/components/common/MenuTab";
import StatCard from "@/components/ui/card/StatCard";
import { currentDate } from "@/helpers/date";
import NumberCountAnimation from "@/helpers/number-count-animation";
import { useHorizontalScroll } from "@/utils/useSideScroll";
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
  Message2,
  Tool,
  InfoCircle,
  AlignBoxBottomCenter,
} from "tabler-icons-react";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const scrollRef = useHorizontalScroll();

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
      Icon: Message2,
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
    <div className="grid grid-cols-3">
      <div className="max-h-screen col-span-3 p-2 overflow-y-scroll bg-white scrollbar-hide lg:col-span-2 md:p-5">
        <div className="space-y-2">
          <p className="text-xs font-medium text-black md:text-sm">
            {currentDate()}
          </p>
          <p className="text-xl text-black md:text-2xl">
            Welcome back, Georges
          </p>
          <p className="text-xs text-secondary md:text-sm">
            This is property portfolio report.
          </p>
        </div>

        <div
          // ref={scrollRef}
          className="flex items-center justify-between w-full gap-5 my-5 overflow-auto snap-x scrollbar-hide whitespace-nowrap"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              count={NumberCountAnimation({ targetNumber: stat.count })}
              Icon={stat.Icon}
            />
          ))}
        </div>

        <div className="">
          <ul className="flex w-full border-b whitespace-nowrap border-secondaryLight scrollbar-hide">
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
          </ul>
        </div>
        {Tab.map((tab, index) => (
          <div
            key={index}
            className={clsx("w-full my-10", {
              hidden: activeTabIndex !== index,
            })}
          >
            {tab.content && tab.content}
          </div>
        ))}
      </div>

      <div className="hidden w-full max-h-screen p-2 overflow-y-scroll text-black bg-white border-l scrollbar-hide lg:col-span-1 lg:inline-block md:p-5 border-secondaryLight">
        <div className="flex items-center justify-between">
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
      </div>
    </div>
  );
}
