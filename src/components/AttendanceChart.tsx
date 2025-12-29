"use client"

import Image from 'next/image';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

// #region Sample data
const data = [
  {
    name: 'Mon',
    present: 60,
    absent: 40,
  },
  {
    name: 'Tue',
    present: 70,
    absent: 80
  },
  {
    name: 'Wed',
    present: 90,
    absent: 75,
  },
  {
    name: 'Thu',
    present: 90,
    absent: 75,
  },
  {
    name: 'Fri',
    present: 65,
    absent: 55,
  },
];

const AttendanceChart = () => {
    return (
        <div className="bg-white rounded-lg p-4 h-full">
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Attendance</h1>
                <Image src="/moreDark.png" alt="" width={20} height={20}/>
            </div>
            <BarChart
                style={{ width: '100%', maxWidth: '450px', maxHeight: '60vh', aspectRatio: 1 }}
                responsive
                data={data}
                margin={{
                    top: 5,
                    right: 0,
                    left: 0,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis width="auto" axisLine={false} />
                <Tooltip />
                <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:"40px"}}/>
                <Bar 
                    dataKey="present" 
                    fill="#FAE27C" 
                    radius={[10, 10, 0, 0]}
                    legendType='circle' 
                />
                <Bar 
                    dataKey="absent" 
                    fill="#C3EBFA" 
                    radius={[10, 10, 0, 0]} 
                    legendType='circle'
                />
                </BarChart>
        </div>
    )
}

export default AttendanceChart