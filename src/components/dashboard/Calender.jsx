import { ChevronDownIcon } from "lucide-react";

export const Calendar = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weeks = [
    ["absent", "present", "present", "present", "present", "no-class", "no-class"],
    ["present", "present", "present", "present", "present", "no-class", "no-class"],
    ["present", "present", "present", "present", "present", "no-class", "no-class"],
    ["present", "present", "present", "present", "present", "no-class", "no-class"],
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "present":
        return "bg-[#00FF00]/60 text-black";
      case "absent":
        return "bg-red-500 text-white";
      case "no-class":
        return "bg-gray-200 text-gray-600";
      default:
        return "";
    }
  };

  return (
    <div className="bg-white p-6.5 rounded-2xl  h-full">
        <div className=" w-full flex justify-between items-center mt-3">
      <h2 className="text-xl font-semibold mb-4">Class Attendance</h2>
      
       <button className="flex justify-center items-center 
        bg-black text-white rounded-4xl py-2 px-2">month<ChevronDownIcon className="w-5 h-5 mt-1"/></button></div>
    
      <div className="grid grid-cols-7 gap-4 text-center  text-gray-700 mb-2">
        {days.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      {weeks.map((week, wIndex) => (
        <div key={wIndex} className="grid grid-cols-7 gap-4 mb-8">
          {week.map((status, dIndex) => (
            <div
              key={dIndex}
              className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusStyle(status)}`}
            >
              {status === "present" ? "✓" : "✕"}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};