"use client"
import Image from "next/image";
import Link from "next/link";
import { chatNoteMenu, logoutsSettingMenu, menuItems } from "../../content/data";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


const AppSidebar = () => {
  const pathname=usePathname()
  return (
    <Sidebar className="py-3 pl-3 ">
      <SidebarHeader >
        <h1 className=" ml-4 mt-2 font-bold md:text-lg">UpGradely</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="gap-5 ml-5">
          <SidebarMenu>
          {menuItems.map((item, index) => (
             <SidebarMenuItem  key={index}>
              <SidebarMenuButton asChild>
            <Link  href={item.href} className={`
         ${pathname == item.href ? "  " : ""}`}>
              <Image src={item.icon} alt="" width={17} height={10} />
              <span >{item.lable}</span>
            </Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup className="gap-5 ml-5 mt-5">
          <SidebarMenu>
          {chatNoteMenu.map((item, index) => (
             <SidebarMenuItem  key={index}>
              <SidebarMenuButton asChild>
            <Link  href={item.href} className={`
         ${pathname == item.href ? "  " : ""}`}>
              <Image src={item.icon} alt="" width={17} height={10} />
              <span >{item.lable}</span>
            </Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter  className="gap-5 ml-5 mt-5">
        <SidebarMenu>
          {logoutsSettingMenu.map((item, index) => (
             <SidebarMenuItem  key={index}>
              <SidebarMenuButton asChild>
            <Link  href={item.href} className={`
         ${pathname == item.href ? "  " : ""}`}>
              <Image src={item.icon} alt="" width={17} height={10} />
              <span >{item.lable}</span>
            </Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          
          </SidebarMenu>
      </SidebarFooter>
    </Sidebar>

    
  );
};

export default AppSidebar;
