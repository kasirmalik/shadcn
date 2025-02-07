import { ResponsiveLine } from '@nivo/line'
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
const MyResponsiveLine = ({ data /* see data tab */ }:any) => {
   return ( <ResponsiveLine
        data={data}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
    />
   )
}
export default function Lines(data){
   data = [
        {
          "id": "japan",
          "color": "hsl(180, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 146
            },
            {
              "x": "helicopter",
              "y": 216
            },
            {
              "x": "boat",
              "y": 238
            },
            {
              "x": "train",
              "y": 129
            },
            {
              "x": "subway",
              "y": 166
            },
            {
              "x": "bus",
              "y": 89
            },
            {
              "x": "car",
              "y": 297
            },
            {
              "x": "moto",
              "y": 224
            },
            {
              "x": "bicycle",
              "y": 59
            },
            {
              "x": "horse",
              "y": 213
            },
            {
              "x": "skateboard",
              "y": 282
            },
            {
              "x": "others",
              "y": 249
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(116, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 122
            },
            {
              "x": "helicopter",
              "y": 222
            },
            {
              "x": "boat",
              "y": 226
            },
            {
              "x": "train",
              "y": 233
            },
            {
              "x": "subway",
              "y": 45
            },
            {
              "x": "bus",
              "y": 183
            },
            {
              "x": "car",
              "y": 114
            },
            {
              "x": "moto",
              "y": 245
            },
            {
              "x": "bicycle",
              "y": 234
            },
            {
              "x": "horse",
              "y": 56
            },
            {
              "x": "skateboard",
              "y": 234
            },
            {
              "x": "others",
              "y": 122
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(272, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 139
            },
            {
              "x": "helicopter",
              "y": 142
            },
            {
              "x": "boat",
              "y": 233
            },
            {
              "x": "train",
              "y": 148
            },
            {
              "x": "subway",
              "y": 131
            },
            {
              "x": "bus",
              "y": 183
            },
            {
              "x": "car",
              "y": 87
            },
            {
              "x": "moto",
              "y": 152
            },
            {
              "x": "bicycle",
              "y": 166
            },
            {
              "x": "horse",
              "y": 46
            },
            {
              "x": "skateboard",
              "y": 197
            },
            {
              "x": "others",
              "y": 203
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(48, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 120
            },
            {
              "x": "helicopter",
              "y": 220
            },
            {
              "x": "boat",
              "y": 127
            },
            {
              "x": "train",
              "y": 152
            },
            {
              "x": "subway",
              "y": 97
            },
            {
              "x": "bus",
              "y": 256
            },
            {
              "x": "car",
              "y": 209
            },
            {
              "x": "moto",
              "y": 262
            },
            {
              "x": "bicycle",
              "y": 95
            },
            {
              "x": "horse",
              "y": 211
            },
            {
              "x": "skateboard",
              "y": 68
            },
            {
              "x": "others",
              "y": 17
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(172, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 247
            },
            {
              "x": "helicopter",
              "y": 274
            },
            {
              "x": "boat",
              "y": 205
            },
            {
              "x": "train",
              "y": 223
            },
            {
              "x": "subway",
              "y": 99
            },
            {
              "x": "bus",
              "y": 5
            },
            {
              "x": "car",
              "y": 226
            },
            {
              "x": "moto",
              "y": 143
            },
            {
              "x": "bicycle",
              "y": 131
            },
            {
              "x": "horse",
              "y": 66
            },
            {
              "x": "skateboard",
              "y": 45
            },
            {
              "x": "others",
              "y": 111
            }
          ]
        }
      ]
      return (
        <Card>
            <CardHeader>
                <CardTitle>Calendar</CardTitle>
                <CardDescription>These are the number of this year</CardDescription>
            </CardHeader>
          <CardContent className='h-[260px] flex items-center w-full'>
            <MyResponsiveLine data={data}/>
          </CardContent>
        </Card>
    )
}