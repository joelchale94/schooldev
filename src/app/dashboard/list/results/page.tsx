"use client"

import { role, resultsData } from "@/lib/data";
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
    name: "Student",
    selector: (row: any) => row.student,
    sortable: true,
  },
  {
    name: "Date",
    selector: (row: any) => row.date,
    sortable: true,
  },
  {
    name: "Type",
    selector: (row: any) => row.type,
    sortable: true,
  },
  {
    name: "Score",
    selector: (row: any) => row.score,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row: any) => (
      <div className="flex gap-2">
        <Link href={`/dashboard/list/results/${row.id}`}>
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

const ResultsListPage = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return resultsData.filter((results) => {
      const matchesSearch =
        results.subject.toLowerCase().includes(search.toLowerCase()) ||
        results.date.toLowerCase().includes(search.toLowerCase()) ||
        results.student.toLowerCase().includes(search.toLowerCase()) ||
        results.type.toLowerCase().includes(search.toLowerCase()) ||
        results.teacher.toLowerCase().includes(search.toLowerCase()) ||
        results.class.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [resultsData, search]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold">All results</h1>

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

export default ResultsListPage