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
import Image from "next/image"
const ScheduleCart = () => {
  return (
    <div className="w-full flex flex-col bg-gray-100 mt-3 pl-5 pb-0.5 rounded-2xl ">
      
      <h1 className="font-semibold md:text-lg mt-3"> My schedule</h1>
      <Table  className="mt-3  w-full  ">
  
  <TableHeader>
    <TableRow className="w-full  ">
    
      <TableHead className=" font-semibold  " >Time</TableHead>
      <TableHead className="font-semibold">Lesson</TableHead>
      <TableHead className="  font-semibold">Teacher</TableHead>
      <TableHead className="font-semibold" >Location</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    
      {schedule.map((item, index) => (
            <TableRow key={index}>
              <TableCell  className="pl-3">{item.time}</TableCell>
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
