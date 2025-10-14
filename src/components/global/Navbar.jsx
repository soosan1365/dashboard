"use client"
import { BellRing, LogOut, SearchIcon, Settings, User } from "lucide-react";
import Image from "next/image";
import selina from "../../../public/selina.jpg"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarTrigger, useSidebar } from "../ui/sidebar";

const Navbar = () => {
  return (
    <div className=" grid grid-cols-3 sticky top-0 px-5 py-4 mx-3 z-50
     bg-white shadow-2xs shadow-gray-400 rounded-2xl">
      
      {/*left search */}
      <div className="flex col-span-2 justify-between items-center">
        <span className="md:hidden flex justify-center items-center"><SidebarTrigger className="md:hidden"/>Menu</span>
      <div className="  hidden md:flex w-full  justify-start items-center py-1  px-5 gap-1 rounded-2xl border-2 bg-gray-50">
        <SearchIcon />
        <input type="text" placeholder="Search..." className="py-1 " />
      </div> </div>
      {/* right  */}
      <div className=" col-span-1 flex justify-end  items-center gap-3 ">
        <span>selina</span>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image src={selina} width={30} height={30} alt="" className="rounded-full border-2   border-gray-300" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <User />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Settings />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem variant="destructive">
              <LogOut />
              LogOut
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <span className="border rounded-full p-1 relative  ">
          <BellRing />
          <span className="absolute rounded-full w-4 h-4 text-white flex justify-center items-center -top-2.5 -right-2.5 text-sm bg-blue-700">2</span>
        </span>

      </div>
    </div>
  );
};

export default Navbar;
