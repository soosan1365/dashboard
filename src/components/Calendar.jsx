"use client"
import React, { useState } from "react";
import { Calendar as CalendarUI } from "./ui/calendar";

export default function Calendar() {
  const [date, setDate] = useState(new Date());

  return (
    <CalendarUI
      mode="single"
      selected={date}
      onSelect={setDate}
      className=" rounded-md border shadow-sm w-full   bg-gray-50 "
      captionLayout="dropdown"
    />
  );
}
