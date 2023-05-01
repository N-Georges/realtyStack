import Image from "next/image";
import { MapPin } from "tabler-icons-react";

type aboutProps = {
  address: string;
  type: string;
  request: number;
};

const About = ({ address, type, request }: aboutProps) => {
  return (
    <div>
      <div className="space-y-2">
        <div className="relative w-full h-80">
          <Image
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"
            alt="property"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative w-16 h-16 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80"
              alt="property"
              fill
              className="object-cover border-2 border-black rounded-md"
            />
          </div>
          <div className="relative w-16 h-16 cursor-pointer">
            <Image
              src="https://plus.unsplash.com/premium_photo-1672252617589-35d9a810c2d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
              alt="property"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-16 h-16 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="property"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-16 h-16 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80"
              alt="property"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="relative w-16 h-16 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="property"
              fill
              className="object-cover rounded-md"
            />
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="flex items-center space-x-2">
          <MapPin className="w-6 h-6 text-blue-500" strokeWidth={1.3} />
          <p className="text-xl md:text-2xl">{address}</p>
        </div>
        <div className="ml-8">
          <p className="text-xs text-gray-500">housing type:{type}</p>
          <p>request:{request}</p>
        </div>
      </div>
    </div>
  );
};

export default About;
