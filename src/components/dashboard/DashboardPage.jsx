import { carts } from "@/content/data";
import Carts from "./Carts";
import MyTasks from "./MyTasks";
import ScheduleCart from "./ScheduleCart";
import { Calendar } from "./Calender";

const DashboardPage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mt-3 mx-3 ">
      {/* left: cards  */}
      <div className="col-span-1">
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
          {/* MyTasks */}
        <div className="  flex gap-4 "><MyTasks /></div>
         </div>
      {/* right calendar*/}
      <div className="col-span-1">
      <div className=" "><Calendar /></div>
      {/*ScheduleCart*/}
      <div><ScheduleCart /></div>
      
    
     </div>
    </div>
  );
};

export default DashboardPage;
