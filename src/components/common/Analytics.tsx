import clsx from "clsx";
import React, { useState } from "react";
import { ChevronDown } from "tabler-icons-react";

const Analytics = ({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center justify-between">
      <p className="text-xl text-black md:text-2xl">Stats Overview</p>
      <div
        onClick={() => setSidebar((prev) => !prev)}
        className="inline-flex items-center overflow-hidden bg-white border rounded-md group"
      >
        <a
          href="#"
          className="px-4 py-2 border-e text-secondary text-xs/none md:text-sm/none"
        >
          Per - Month. Aug
        </a>

        <button className="h-full p-2 text-secondary group hover:text-black">
          <ChevronDown
            className={clsx(
              "text-secondary transition duration-300 group-hover:text-black",
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
  );
};

export default Analytics;
