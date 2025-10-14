"use client"
import { catrgoryTasks, tasks } from "@/content/data"
import { Plus } from "lucide-react"
import CartTasks from "./CartTasks"
import { useState } from "react"

const MyTasks = () => {

    const [selectedstatus, setSelectedstatus] = useState("All Task");
    const filteredTasks =
        selectedstatus === "All Task"
            ? tasks
            : tasks.filter((task) => task.status === selectedstatus);

    return (
        <div className="w-full  bg-white shadow-2xs shadow-gray-400 mt-3 rounded-2xl
          p-3">
            <h1 className="font-semibold text-lg mb-2 flex justify-between ">My Tasks<span className=" border-2 p-0.5 border-gray-300 rounded-4xl"><Plus /></span></h1>

            <div className=" grid grid-cols-2  lg:flex mb-2 w-full justify-start items-start gap-1   ">
                {
                    catrgoryTasks.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedstatus(item.title)}
                            className={`border-2 rounded-4xl whitespace-nowrap border-gray-300 flex justify-between px-3 py-1 ${selectedstatus === item.title ? "bg-black text-white" : ""
                                }`}
                        >
                            <p>{item.title}</p></button>
                    ))
                }
            </div>
            <div className="w-full flex flex-col gap-3">
                {
                    filteredTasks.map((item, index) => (
                        <div key={index}>
                            <CartTasks title={item.title} value={item.value} status={item.status} lesson={item.lesson} date={item.date} comment={item.comment} />
                        </div>
                    ))
                }
            </div>
            <button className="w-full mb-1 bg-black  rounded-3xl text-white mt-5 py-3">View all tasks</button>
        </div>
    )
}

export default MyTasks