"use client"

import { role, parentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import DataTable from "react-data-table-component";
import { useMemo, useState } from "react";

const columns = [
  {
    name: "Info",
    cell: (row: any) => (
      <div className="flex items-center gap-3 my-3 w-[550px]">
        <div>
          <p className="font-semibold">{row.name}</p>
          <p className="text-xs text-gray-500">{row.email}</p>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Student Name",
    selector: (row: any) => row.students.join(", "),
    sortable: true,
  },
  {
    name: "Phone",
    selector: (row: any) => row.phone,
    sortable: true,
  },
  {
    name: "Address",
    selector: (row: any) => row.address,
  },
  {
    name: "Actions",
    cell: (row: any) => (
      <div className="flex gap-2">
        <Link href={`/dashboard/list/parents/${row.id}`}>
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

const ParentsListPage = () => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    return parentsData.filter((parent) => {
      const matchesSearch =
        parent.name.toLowerCase().includes(search.toLowerCase()) ||
        parent.email.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [parentsData, search]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold">All Parents</h1>

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

export default ParentsListPage