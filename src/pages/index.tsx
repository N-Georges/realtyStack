import StatCard from "@/components/ui/card/StatCard";
import { currentDate } from "@/helpers/date";
import { useHorizontalScroll } from "@/utils/useSideScroll";
import {
  Search,
  BuildingCommunity,
  Cash,
  Users,
  FileTime,
} from "tabler-icons-react";

const stats = [
  {
    title: "Total Apartment",
    subTitle: "130",
    Icon: BuildingCommunity,
  },
  {
    title: "On hold Deposits",
    subTitle: "7",
    color: "purple",
    Icon: Cash,
  },
  {
    title: "Total Tenant",
    subTitle: "118",
    color: "purple",
    Icon: Users,
  },
  {
    title: "Pending Inspections",
    subTitle: "13",
    color: "purple",
    Icon: FileTime,
  },
];

export default function Home() {
  const scrollRef = useHorizontalScroll();
  return (
    <div className="grid grid-cols-3">
      <div className="min-w-full col-span-3 p-2 bg-white lg:col-span-2 md:p-5">
        <div className="space-y-2">
          <p className="text-xs font-medium text-black md:text-sm">
            {currentDate()}
          </p>
          <p className="text-xl text-black md:text-2xl">
            Welcome back, Georges
          </p>
          <p className="text-xs text-gray md:text-sm">
            This is property portfolio report.
          </p>
        </div>
        <div
          ref={scrollRef}
          className="flex items-center justify-between w-full gap-5 my-5 overflow-auto snap-x scrollbar-hide whitespace-nowrap"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              subTitle={stat.subTitle}
              Icon={stat.Icon}
            />
          ))}
        </div>
      </div>

      <div className="z-10 hidden w-full p-2 text-black bg-white border-l lg:col-span-1 lg:inline-block md:p-5 border-grayLight">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <p className="">Active Properties</p>
            <span>(118)</span>
          </div>
          <button className="group">
            <Search
              className="w-6 h-6 text-gray group-hover:text-black"
              strokeWidth={1}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
