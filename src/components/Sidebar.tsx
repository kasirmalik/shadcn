/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BellDot, BookLock, CreditCard, icons, Logs, Settings, User} from "lucide-react"
import {
  Command as CommandComponent,


  
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import UserItem from "./UserItem";
import { ReactNode } from "react";

export default function Sidebar() {
    const menuList =[
        {
            group:"Genrel",
            items:[
                {
                    link:'/',
                    icon:<User/>,
                    text:"Profile"
                },
                {
                    link:'/',
                    text:"Billing",
                    icon: <CreditCard/>
                },
                {
                    link:'/',
                    icons:<CreditCard/>,
                    text:"Notfications"
                },
               
            ],

        },
        {
            group:"Settings",
            items:[
                {
                    link:'/',
                    icon:<Settings/>,
                    text:"Genrel Settings"
                },
                {
                    link:'/',
                    icon:<BookLock/>,
                    text:"Privacy"
                },
                {
                    link:'/',
                    icon:<Logs/>, 
                    text:"Logs"
                },
                
            ],

        }
    ]
  return (
    <>
      <div className="w-[300px] fixed flex flex-col gap-2 min-w-[300px] p-4 min-h-screen">
        <div>
          <UserItem />
        </div>
        <div className="grow ">
          <CommandComponent style={{overflow:"hidden"}}>
            <CommandList style={{overflow:"visible"}}>
             { menuList.map((menu:any,key:number)=> (
             <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any,optionKey:number)=> 
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer text-xl hover:shadow ">
                     {option.icon}
                     {option.text}
                     </CommandItem>
                    
                )}
              </CommandGroup>
              
              ))}
            </CommandList>
          </CommandComponent>
        </div>
        <div>Setting /Notfications</div>
      </div>
    </>
  );
}