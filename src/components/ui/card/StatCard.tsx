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
  color = "primary",
  Icon,
}: cardStatProps) => {
  return (
    <div
      className={clsx(
        "p-6 bg-white border rounded-lg w-fit snap-center border-secondaryLight",
        {
          "w-full": size === "full",
          "w-fit": size === "fit",
        }
      )}
    >
      <div className="flex items-center justify-between space-x-5">
        <div>
          <p className="text-xs font-light md:text-sm text-secondary">
            {title}
          </p>

          <p className="text-2xl font-medium text-secondary-900">{count}</p>
        </div>

        <span className={`p-3 rounded-full text-${color} bg-${color}/10`}>
          <Icon className="w-6 h-6" strokeWidth={1.3} />
        </span>
      </div>
    </div>
  );
};

export default StatCard;
