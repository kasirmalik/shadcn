"use client";
import { BellIcon } from "lucide-react";
import { CommandDemo } from "./Command";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Header() {
  const [notification,setNotification] = useState<any>([
    {
      text:"This is a notification",
      date: "02-10-2025",
      read:true
    },
    {
      text:"This is another notification",
      date: "02-10-2025",
      read:false
    },
  ])
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border">
      <CommandDemo />
      <div className="flex items-center justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button className="relative" variant="outline" size="icon">
            <div className={`h-2 px-1 absolute top-1 right-1 rounded-full  ${notification.find((x:any)=>
            x.read === true) ? 'bg-green-500':'bg-neutral-200'}`}></div>
            
              <BellIcon className="h-5 w-4 border-r-0" />
            </Button>
             </DropdownMenuTrigger>
          <DropdownMenuContent align="end" >
              {notification.map((item:any,key:number)=><DropdownMenuItem key={key}
              className="p-1 cursor-pointer hover:bg-neutral-50 transition flex
              items-start gap-2">
                <div className={`h-3 px-3 rounded-full my-1 ${!item.read ? 'bg-green-500':'bg-neutral-200'}`}></div>
                <div>
                  <p>{item.text}</p>
                  <p>{item.date}</p>
                 </div>  
              </DropdownMenuItem>)}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
