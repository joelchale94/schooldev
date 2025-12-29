"use client"

import { role, lessonsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import DataTable from "react-data-table-component";
import { useMemo, useState } from "react";

const columns = [
  {
    name: "Subject",
    selector: (row: any) => row.subject,
    sortable: true,
  },
  {
    name: "Class",
    selector: (row: any) => row.class,
    sortable: true,
  },
  {
    name: "Teacher",
    selector: (row: any) => row.teacher,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row: any) => (
      <div className="flex gap-2">
        <Link href={`/dashboard/list/lessons/${row.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-customSky">
              <Image src="/edit.png" alt="" width={14} height={14}/>
          </button>
        </Link>
        
        {role === 'admin' && (
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-customPurple">
            <Image src="/delete.png" alt="" width={14} height={14}/>
          </button>
        )}
      </div>
    ),
  },
];

const LessonsListPage = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return lessonsData.filter((lessons) => {
      const matchesSearch =
        lessons.subject.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [lessonsData, search]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold">All Lessons</h1>

      <div className="bg-white rounded-md">
        <div className="flex flex-wrap gap-3 p-4 border-b justify-between">

          <div className="flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
            <Image src="/search.png" alt="" width={14} height={14}/>
            <input 
              type="text" 
              placeholder="Search..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[200px] p-2 bg-transparent outline-none"
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 25, 100]}
          highlightOnHover
          striped
          responsive
        />
      </div>
    </div>
  )
}

export default LessonsListPage