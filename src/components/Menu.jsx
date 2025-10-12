"use client"
import Image from "next/image";
import Link from "next/link";
import {chatNoteMenu, logoutsSettingMenu, menuItems} from "../content/data";
import { usePathname } from "next/navigation";

const Menu = () => {
    const pathname=usePathname()
  return (
    <div className=" h-full sticky flex flex-col items-start justify-bettwen p-3 md:p-5 gap-20
      bg-gradient-to-t from-[white] to-[#d3e9f0]  rounded-2xl">
      
    <div className="flex flex-col justify-center items-start  gap-12">
        <div className="flex flex-col items-start gap-5">
        <h1 className="font-bold md:text-lg">Menu</h1>
      {menuItems.map((item, index) => (
        <Link key={index} href={item.href} className={`flex items-center justify-center 
           text-sm gap-2 ${pathname==item.href ? "md:bg-gradient-to-b px-3 py-0.5 border-2 border-red-300 md:from-[white] md:to-[#9c9999]  rounded-xl ":""}`}>
          <Image src={item.icon} alt="" width={20} height={20} />
          <span className="hidden sm:block">{item.lable}</span>
        </Link>
      ))}</div>
      <div  className="flex flex-col items-start justify-center gap-7">
          {chatNoteMenu.map((item, index) => (
        <Link key={index} href={item.href} className={`flex items-center justify-center
           text-sm gap-2 ${pathname==item.href ? "md:bg-gradient-to-b px-3 py-1 border-[0.5px] border-red-100 md:from-[white] md:to-[#9c9999]  rounded-xl ":""}`}>
          <Image src={item.icon} alt="" width={20} height={20} />
          <span className="hidden sm:block">{item.lable}</span>
        </Link>
      ))}</div>
      
    </div>
     <div  className="flex flex-col items-center justify-center gap-9">
          {logoutsSettingMenu.map((item, index) => (
        <Link key={index} href={item.href} className={`flex items-center justify-center 
           text-sm gap-2 ${pathname==item.href ? "md:bg-gradient-to-b px-3 py-0.5 border-2 border-red-300 md:from-[white] md:to-[#9c9999]  rounded-xl ":""}`}>
          <Image src={item.icon} alt="" width={20} height={20} />
          <span className="hidden sm:block">{item.lable}</span>
        </Link>
      ))}</div>
    </div>
  );
};

export default Menu;
