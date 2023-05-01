import clsx from "clsx";
import React from "react";
import { InfoCircle, LayoutGrid } from "tabler-icons-react";

type PropertyCardProps = {
  property: {
    id: string;
    address: string;
    type: string;
    request: number;
    area: number;
    active: boolean;
  };
  activePropertyIndex: number;
  index: number;
  handleClick: () => void;
};

const PropertyCard = ({
  property,
  activePropertyIndex,
  index,
  handleClick,
}: PropertyCardProps) => {
  return (
    <div onClick={handleClick} key={property.id}>
      <div
        className={clsx("py-5 pl-5 cursor-pointer group-hover:border-l-2 ", {
          "border-l-2 border-l-blue-500": activePropertyIndex === index,
        })}
      >
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs text-black">{property.address}</p>
          <span
            className={clsx(
              "px-3 py-1 text-xs rounded-md bg-green-500/10 text-green-500",
              {
                "bg-orange-500/10 text-orange-500": !property.active,
              }
            )}
          >
            {property.active && "Active"}
          </span>
        </div>
        <div className="flex items-center justify-between font-light">
          <div className="flex items-center space-x-5">
            <div className="flex items-center px-3 py-1 space-x-1 text-xs text-blue-500 rounded-md bg-blue-500/10">
              <LayoutGrid className="w-4 h-4" strokeWidth={1.3} />
              <p className="capitalize">{property.type}</p>
            </div>
            <div className="flex items-center px-3 py-1 space-x-1 text-xs text-orange-500 rounded-md bg-orange-500/10">
              <InfoCircle className="w-4 h-4" strokeWidth={1.3} />
              <p>{property.request ? `${property.request} ` : "No request"}</p>
            </div>
          </div>
          <div className="text-xs text-black">
            <span>{property.area} sq m</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
