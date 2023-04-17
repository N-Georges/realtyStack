type menuTabProps = {
  handleClick: () => void;
  activeTabIndex?: number;
  index: number;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  notif?: boolean;
  countNotif?: number;
};

const MenuTab = ({
  handleClick,
  activeTabIndex,
  index,
  Icon,
  title,
  notif = false,
  countNotif = 0,
}: menuTabProps) => {
  return (
    <div className="flex-1">
      <div
        onClick={handleClick}
        className="relative block p-4 text-xs cursor-pointer"
      >
        {index === activeTabIndex && (
          <span className="absolute inset-x-0 w-full h-px bg-black -bottom-px"></span>
        )}
        <div
          className={`flex items-center justify-center gap-4 ${
            index === activeTabIndex ? "text-black" : "text-secondary"
          }`}
        >
          <Icon className="flex-shrink-0 w-5 h-5" />
          <span className="font-medium">{title}</span>
          {notif && (
            <span className="flex items-center justify-center px-1 text-xs text-white rounded-full bg-red">
              {countNotif > 99 ? "99+" : countNotif}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuTab;