"use client"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { schedule } from "@/content/data"
import { ChevronDownIcon } from "lucide-react"
import Image from "next/image"
const ScheduleCart = () => {
  return (
    <div className=" flex flex-col bg-white shadow-2xs shadow-gray-400 mt-3 p-5  rounded-2xl h-full ">
      <div className=" w-full flex justify-between items-center mt-3">
      <h1 className="font-semibold md:text-lg mb-3 "> My schedule</h1>
       <button className="flex justify-center items-center
        bg-black text-white rounded-4xl py-2 px-3">today<ChevronDownIcon  className="w-5 h-5 mt-1"/></button></div>
      <Table  className="mt-5   ">
  
  <TableHeader>
    <TableRow className="  ">
    
      <TableHead className=" font-semibold  " >Time</TableHead>
      <TableHead className="font-semibold">Lesson</TableHead>
      <TableHead className="  font-semibold">Teacher</TableHead>
      <TableHead className="font-semibold" >Location</TableHead>
    </TableRow>
   
  </TableHeader>
  <TableBody>
    
      {schedule.map((item, index) => (
            <TableRow key={index} className="">
              <TableCell  className="">{item.time}</TableCell>
              <TableCell>{item.lesson}</TableCell>
              <TableCell  className="flex gap-2 justify-start items-center"><Image  alt="" className="rounded-full" src={item.src} width={30} height={28}/>{item.teacher}</TableCell>
              <TableCell >{item.locatin}</TableCell>
            </TableRow>
          ))}

    
    
  </TableBody>
</Table>
    </div>
  )
}

export default ScheduleCart
