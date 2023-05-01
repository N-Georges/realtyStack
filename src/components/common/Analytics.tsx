import clsx from "clsx";
import { ChevronDown } from "tabler-icons-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Analytics = ({
  sidebar,
  setSidebar,
}: {
  sidebar: boolean;
  setSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="text-xl text-black md:text-2xl">Stats Overview</p>
        <div
          onClick={() => setSidebar((prev) => !prev)}
          className="inline-flex items-center overflow-hidden bg-white border rounded-md group"
        >
          <a
            href="#"
            className="px-4 py-2 font-light border-e text-gray-500 text-xs/none md:text-xs/none"
          >
            Per - Month. Aug
          </a>

          <button className="h-full p-2 text-gray-500 group hover:text-black">
            <ChevronDown
              className={clsx(
                "text-gray-500 transition duration-300 group-hover:text-black",
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
      <div className="w-full my-5 h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            // width={500}
            // height={300}
            data={data}
          >
            <CartesianGrid strokeWidth={0.3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
