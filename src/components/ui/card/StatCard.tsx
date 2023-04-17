import clsx from "clsx";

type cardStatProps = {
  size?: "full" | "fit";
  title: string;
  subTitle: string | number | undefined;
  color?: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const StatCard = ({
  size = "full",
  title,
  subTitle,
  color = "purple",
  Icon,
}: cardStatProps) => {
  return (
    <div
      className={clsx(
        "p-6 bg-white border rounded-lg w-fit snap-center border-grayLight",
        {
          "w-full": size === "full",
          "w-fit": size === "fit",
        }
      )}
    >
      <div className="flex items-center justify-between space-x-5">
        <div>
          <p className="text-sm text-gray">{title}</p>

          <p className="text-2xl font-medium text-gray-900">{subTitle}</p>
        </div>

        <span className={`p-3 rounded-full text-${color} bg-${color}/10`}>
          <Icon className="w-8 h-8" />
        </span>
      </div>
    </div>
  );
};

export default StatCard;
