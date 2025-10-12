import { BellRing, SearchIcon } from "lucide-react";
import Image from "next/image";
import selina from "../../public/selina.jpg"

const Navbar = () => {
  return (
    <div className="flex w-full    items-center justify-end md:justify-between p-4 bg-gradient-to-t from-[white] to-[#d3e9f0] rounded-2xl">
      {/*left search */}
      <div className=" hidden md:flex jusyify-start items-center px-10 gap-1 rounded-2xl border-2 bg-gray-100">
        <SearchIcon />
        <input type="text" placeholder="Search..." className="py-1 px-10" />
      </div>
      {/* right  */}
      <div className="flex justify-center items-center gap-3 ">
        <span>selina</span>
        <Image src={selina} width={30} height={30} alt="" className="rounded-full border-2   border-gray-300"/>
        <span className="border rounded-full p-1 relative  ">
          <BellRing />
          <span className="absolute rounded-full w-4 h-4 text-white flex justify-center items-center -top-2.5 -right-2.5 text-sm bg-blue-700">2</span>
        </span>
      
      </div>
    </div>
  );
};

export default Navbar;
