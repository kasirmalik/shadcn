'use client'

import UserItem from "./UserItem"

export default function Sidebar() {
    return (
        <>
        <div className="w-[300px] flex flex-col gap-2 min-w-[300px] border-r min-h-screen p-4">
        <div>
           <UserItem/> 
        </div>
        <div className="grow">Menu</div>
        <div>Setting /Notfications</div>
        </div>
        
        </>
    )
}
