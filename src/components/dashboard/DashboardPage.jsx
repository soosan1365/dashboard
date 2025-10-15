import { carts } from "@/content/data";
import Carts from "./Carts";
import MyTasks from "./MyTasks";
import ScheduleCart from "./ScheduleCart";
import { Calendar } from "./Calender";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 my-3 mx-3 ">
      {/* left: cards  */}
      
      <div className="  flex   gap-4 ">
        {carts.map((cart, index) => (
          <div key={index} className="">
            <Carts
              title={cart.title}
              rate={cart.rate}
              status={cart.status}
              des={cart.des}
            />
          </div>
        ))}</div>
         <div className="row-span-2"><Calendar /></div>
          {/* MyTasks */}
          
        <div className="  flex gap-4 row-span-3 "><MyTasks /></div>
        
      {/* right calendar*/}
      
      <div className="row-span-2"><ScheduleCart /></div>
      {/*ScheduleCart*/}
     
    </div>
  );
};

export default DashboardPage;
