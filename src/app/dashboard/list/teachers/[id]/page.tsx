"use client"
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import Image from "next/image";
import Link from "next/link";

const SigleTeacherPage = () => {
  return (
    <div className="flex flex-1 p-4 flex-col xl:flex-row gap-4">
        <div className="w-full xl:w-2/3">    
            <div className="flex flex-col lg:flex-row gap-4">        
                <div className="bg-customSky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3">
                        <Image 
                            src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            alt="" 
                            width={144} 
                            height={144}
                            className="w-36 h-36 rounded-full object-cover"
                        />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <h1 className="text-xl font-semibold">Leonard Synder</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                            <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/date.png" alt="" width={14} height={14}/>
                                <span>January 2025</span>
                            </div>
                            <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/mail.png" alt="" width={14} height={14}/>
                                <span>user@gmail.com</span>
                            </div>
                            <div className="w-full md:1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/phone.png" alt="" width={14} height={14}/>
                                <span>+1 123 465 789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-1 flex gap-4 justify-between flex-wrap mt-4">
                <div className="bg-white w-full p-4 flex gap-4 md:w-[48%] rounded-md">
                    <Image src="/singleAttendance.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">90%</h1>
                        <span className="text-sm text-gray-400">Attendance</span>
                    </div>
                </div>
                <div className="bg-white w-full p-4 flex gap-4 md:w-[48%] rounded-md">
                    <Image src="/singleLesson.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">6</h1>
                        <span className="text-sm text-gray-400">Lessons</span>
                    </div>
                </div>
                <div className="bg-white w-full p-4 flex gap-4 md:w-[48%] rounded-md">
                    <Image src="/singleBranch.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">3</h1>
                        <span className="text-sm text-gray-400">Branches</span>
                    </div>
                </div>
                <div className="bg-white w-full p-4 flex gap-4 md:w-[48%] rounded-md">
                    <Image src="/singleClass.png" alt="" width={24} height={24} className="w-6 h-6"/>
                    <div className="">
                        <h1 className="text-xl font-semibold">5</h1>
                        <span className="text-sm text-gray-400">Classes</span>
                    </div>
                </div>
            </div>
            <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
                <h1 className="text-xl font-semibold">Teacher Schedule</h1>
                <BigCalendar/>
            </div>
        </div>

        <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md">
                <h1 className="text-xl font-semibold">Shortcuts</h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                    <Link className="p-3 rounded-md bg-customSky" href="/">Classes</Link>
                    <Link className="p-3 rounded-md bg-customPurpleLight" href="/">Students</Link>
                    <Link className="p-3 rounded-md bg-customYellowLight" href="/">Lessons</Link>
                    <Link className="p-3 rounded-md bg-pink-50" href="/">Exams</Link>
                    <Link className="p-3 rounded-md bg-customSkyLight" href="/">Assignments</Link>
                </div>
            </div>
            <Announcements/>
        </div>
    </div>
  )
}

export default SigleTeacherPage;