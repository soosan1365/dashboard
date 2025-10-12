import { carts, schedule } from "@/content/data";
import Carts from "./Carts";
import Calendar from "./Calendar";
import MyTasks from "./MyTasks";
import ScheduleCart from "./ScheduleCart";

const DashboardPage = () => {
  return (
    <div className="w-full">
      {/* Top area */}
      <div className="flex flex-col  md:flex-row w-full items-start gap-3">
        {/* left: cards  */}
        <div className="w-full  md:w-1/2 flex flex-col justify-center items-start ">
          <div className="w-full  flex   gap-4 ">
            {carts.map((cart, index) => (
              <div key={index} className="w-full sm:w-1/2">
                <Carts
                  title={cart.title}
                  rate={cart.rate}
                  status={cart.status}
                  des={cart.des}
                />
              </div>
            ))}

          </div>
          <div className="w-full  flex   gap-4 ">
            <MyTasks />
          </div></div>

        {/* right calendar*/}
        <div className="w-full md:w-1/2  flex flex-col justify-center items-start">
          <Calendar />
          <ScheduleCart />
        </div>

      </div>

    </div>
  );
};

export default DashboardPage;
