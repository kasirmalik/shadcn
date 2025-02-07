'use client'
import Calender from "@/components/Cards/Calender";
import { DataTableDemo } from "@/components/Cards/DataTable";
import Generel from "@/components/Cards/Generel";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid gap-[32px]">
      <div className="grid grid-cols-2 gap-[32px] ">
        <Generel />
        <div className="grid gap-[32px]">
          <Calender />
          <Calender />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[300px] overflow-hidden">
         <Lines/>
         <Card className="p-[32px] overflow-y-scroll">
          <TableDemo/>
         </Card>
         <Card className="p-[32px] overflow-y-scroll">
          <DataTableDemo/>
         </Card>
         
      </div>
    </div>
  );
}
