"use client"

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ipsum",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 2,
        title: "Lorem ipsum",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet",
    },
    {
        id: 3,
        title: "Lorem ipsum",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet",
    },
];

const SimpleCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

    return (
        <div className='bg-white rounded-xl w-full p-4'>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};

export default SimpleCalendar;