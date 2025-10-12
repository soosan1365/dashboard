import { ArrowUpRight } from "lucide-react";

const Carts = ({title,rate,status,des}) => {
  return (
    <div className=" bg-gradient-to-b from-[white] to-[#d3e9f0] flex flex-col
     gap-5 p-3 rounded-2xl">
      {/* top */}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">{title}</h1>
        <span className="border-2 rounded-full border-blue-200"><ArrowUpRight /></span>
      </div>
      {/* center */}
      <div className="flex justify-between items-center">
        <span className="font-semibold text-lg md:text-2xl lg:text-3xl ">{rate}</span>
        <span className="bg-blue-200 py-1 px-2 rounded-full"> {status}</span>
      </div>

      {/* bottom */}

      <p className="text-gray-800">{des}</p>
    </div>
  );
};

export default Carts;
