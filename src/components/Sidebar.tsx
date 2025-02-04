/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { BellDot, BookLock, CreditCard, icons, Logs, Settings, User} from "lucide-react"
import {
  Command as CommandComponent,

  CommandDialog,
  CommandEmpty,
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
                    icons:<BellDot/>,
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
      <div className="w-[300px] fixed flex flex-col gap-2 min-w-[300px] border-r min-h-screen p-4">
        <div>
          <UserItem />
        </div>
        <div className="grow">
          <CommandComponent style={{overflow:"hidden"}}>
            <CommandList style={{overflow:"visible"}}>
             { menuList.map((menu:any,key:number)=> (
             <CommandGroup key={key} heading={menu.group}>
                {menu.items.map((option: any,optionKey:number)=> 
                  <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
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