import MenuTab from "@/components/common/MenuTab";
import Layout from "@/components/layout";
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
  InfoCircle,
  AlignBoxBottomCenter,
  MessageCircle,
  Key,
} from "tabler-icons-react";
import { Properties } from "../../mock_data";
import PropertyCard from "@/components/common/PropertyCard";
import About from "@/components/About";
import * as ScrollArea from "@radix-ui/react-scroll-area";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [propertyData, setPropertyData] = useState(
    Properties.filter((property) => property.active === true)
      .slice(0, 8)
      .map((property) => {
        return {
          ...property,
        };
      })
  );

  const [activePropertyIndex, setActivePropertyIndex] = useState(0);
  const [activeProperty, setActiveProperty] = useState(
    propertyData[activePropertyIndex]
  );

  const scrollRef = useHorizontalScroll();

  const handleClickTab = ({ index }: { index: number }) => {
    setActiveTabIndex(index);
  };

  const handleClickProperty = ({ index }: { index: number }) => {
    setActivePropertyIndex(index);
    setActiveProperty(propertyData[index]);
  };

  const handleMoreProperty = () => {
    setPropertyData(
      Properties.filter((property) => property.active === true)
        .slice(0, propertyData.length + 10)
        .map((property) => {
          return {
            ...property,
          };
        })
    );
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
      content: <About {...activeProperty} />,
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
      Icon: Key,
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
      content: "analytics",
    },
  ];

  return (
    <Layout>
      <div className="flex">
        <section className="w-full py-5 bg-white lg:w-2/3 lg:pr-5">
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
          <div className="">
            <div className="sticky z-30 flex w-full pb-px overflow-x-scroll bg-white border-b border-gray-100 snap-x whitespace-nowrap scrollbar-hide">
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
              <ScrollArea.Root className="w-full h-[29rem] overflow-hidden ">
                <ScrollArea.Viewport className="w-full ">
                  {Tab.map((tab, index) => (
                    <div
                      key={index}
                      className={clsx("w-full h-screen my-5", {
                        hidden: activeTabIndex !== index,
                      })}
                    >
                      {tab.content}
                    </div>
                  ))}
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar
                  className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                  orientation="vertical"
                >
                  <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Scrollbar
                  className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                  orientation="horizontal"
                >
                  <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner className="bg-blackA8" />
              </ScrollArea.Root>
            </div>
          </div>
        </section>

        <section className="hidden w-1/3 text-black bg-white border-l border-gray-100 overscroll-auto lg:inline-block md:py-5">
          <div className="">
            <div className="flex items-center justify-between pl-5 mb-5 bg-white">
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
            <ScrollArea.Root className="w-full scrollbar-hide overflow-hidden h-[43rem]">
              <ScrollArea.Viewport className="w-full h-full ">
                <div className="divide-y divide-gray-50">
                  {propertyData.map((property, index) => (
                    <PropertyCard
                      key={index}
                      property={property}
                      activePropertyIndex={activePropertyIndex}
                      index={index}
                      handleClick={() => handleClickProperty({ index: index })}
                    />
                  ))}
                  {Properties.filter((property) => property.active === true)
                    .length !== propertyData.length && (
                    <div>
                      <button
                        onClick={handleMoreProperty}
                        className="pl-5 mt-5 text-xs text-black underline"
                      >
                        {` See more`}
                      </button>
                    </div>
                  )}
                </div>
              </ScrollArea.Viewport>
              <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="vertical"
              >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Scrollbar
                className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                orientation="horizontal"
              >
                <ScrollArea.Thumb className="flex-1 bg-mauve10 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
              </ScrollArea.Scrollbar>
              <ScrollArea.Corner className="bg-blackA8" />
            </ScrollArea.Root>
          </div>
        </section>
      </div>
    </Layout>
  );
}
