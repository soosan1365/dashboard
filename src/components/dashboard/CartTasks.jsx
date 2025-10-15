import { Progress } from "@/components/ui/progress"
const CartTasks = ({title,status,lesson,date,comment,value}) => {
    return (
        <div className="w-full ">
            <div className=" flex flex-col justify-between items-start gap-2">
            {/* top */}
            <div className=" w-full flex  justify-between items-center gap-10   ">
                <h1 className="" >{title} </h1>
                <span className={`whitespace-nowrap px-3 py-1 text-white rounded-4xl ${status==="In progress"?"bg-[#F9812A]/90":"bg-blue-300"}  `}>{status}</span>
            </div>
            <p className="text-gray-400">{lesson}</p>
            <div className=" w-full flex justify-between items-center ">
                <p className="text-gray-400">{date}</p>
                <p>{comment}</p>
            </div>
          {status ==="In progress" && <Progress value={value}/>}

            
            
            </div>

        </div>
    )
}

export default CartTasks
