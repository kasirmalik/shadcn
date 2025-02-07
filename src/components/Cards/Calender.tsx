'use client'
// install (please try to align the version of installed @nivo packages)
// yarn add @nivo/calendar
import { ResponsiveTimeRange } from '@nivo/calendar'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const MyResponsiveTimeRange = ({ data  }) => {
   return <ResponsiveTimeRange
        data={data}
        from="2023-01-01"
        to="2023-12-12"
        emptyColor="#eeeeee"
        colors={[ '#61cdbb', '#97e3d5', '#e8c1a0', '#f47560' ]}
       dayBorderWidth={2}
       dayBorderColor='#ffffff'
    />
    }

 export default function Calender (){
       function generateDataForYear2023(){
        const data = [];
        const startDate = new Date("2023-01-01");
        const endDate = new Date("2023-12-31");
        while (startDate<= endDate) {
            const value = Math.floor(Math.random() * 301);
            const formattedDate = startDate.toISOString().split('T')[0]; // Format date as 'YYYY-MM-DD'
            data.push({
                "value":value,
                "day":formattedDate
            });
            startDate.setDate(startDate.getDate() + 1)
        }
        return data
       }
       const dataArray = generateDataForYear2023()
        return (
            <Card>
                <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                    <CardDescription>These are the number of this year</CardDescription>
                </CardHeader>
              <CardContent className='h-[160px] flex items-center w-full'>
                <MyResponsiveTimeRange data={dataArray}/>
              </CardContent>
            </Card>
        )
    }
