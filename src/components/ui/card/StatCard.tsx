import clsx from "clsx";

type cardStatProps = {
  size?: "full" | "fit";
  title: string;
  count: number;
  color?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const StatCard = ({
  size = "full",
  title,
  count,
  color = "blue-500",
  Icon,
}: cardStatProps) => {
  return (
    <div
      className={clsx(
        "p-6 bg-white border rounded-lg w-fit snap-center border-gray-100",
        {
          "w-full": size === "full",
          "w-fit": size === "fit",
        }
      )}
    >
      <div className="flex items-center justify-between space-x-5">
        <div>
          <p className="text-xs font-light text-gray-500 md:text-xs">{title}</p>

          <p className="text-2xl font-medium text-gray-500-900">{count}</p>
        </div>

        <span className={`p-2 rounded-full text-blue-500 bg-blue-500/10`}>
          <Icon className="w-5 h-5" strokeWidth={1.3} />
        </span>
      </div>
    </div>
  );
};

export default StatCard;
