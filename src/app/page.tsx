'use client'
import Calender from "@/components/Cards/Calender";
import Generel from "@/components/Cards/Generel";
import Lines from "@/components/Cards/Lines";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px]">
        <Generel />
        <div className="grid gap-[32px]">
          <Calender />
          <Calender />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-[32px]">
         <Lines/>
         <Card className="h-[300px]"/>
         <Card className="h-[300px]"/>
      </div>
    </div>
  );
}
