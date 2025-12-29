"use client"

import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

import DataTable from "react-data-table-component";
import { useMemo, useState } from "react";

const columns = [
  {
    name: "Info",
    cell: (row: any) => (
      <div className="flex items-center gap-3 my-3 w-[550px]">
        <img
          src={row.photo}
          alt={row.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{row.name}</p>
          <p className="text-xs text-gray-500">{row.email}</p>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Student ID",
    selector: (row: any) => row.studentId,
    sortable: true,
  },
  {
    name: "Grade",
    selector: (row: any) => row.grade,
  },
  {
    name: "Class",
    selector: (row: any) => row.class,
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
        <Link href={`/dashboard/list/students/${row.id}`}>
          <button className="w-7 h-7 flex items-center justify-center rounded-full bg-customSky">
              <Image src="/view.png" alt="" width={14} height={14}/>
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

const StudentsListPage = () => {
  const [search, setSearch] = useState("");
  const [classFilter, setclassFilter] = useState("");

  const classes = useMemo(() => {
    const all = studentsData.flatMap((t) => t.class);
    return Array.from(new Set(all));
  }, [studentsData]);

  const filteredData = useMemo(() => {
    return studentsData.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase()) ||
        student.studentId.includes(search);

      const matchesClass =
        classFilter === "" || student.class.includes(classFilter);

      return matchesSearch && matchesClass;
    });
  }, [studentsData, search, classFilter]);

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <h1 className="text-lg font-semibold">All Students</h1>

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

          <div className="flex items-center gap-4">
            <select
              value={classFilter}
              onChange={(e) => setclassFilter(e.target.value)}
              className="rounded-full ring-[1.5px] ring-gray-300 px-2 p-2 bg-transparent outline-none"
              >
              <option value="">All classes</option>
              {classes.map((sub) => (
                  <option key={sub} value={sub}>
                  {sub}
                  </option>
              ))}
            </select>

            {classFilter && (
              <button
                onClick={() => setclassFilter("")}
                className="text-sm text-red-600"
              >
                Clear filter
              </button>
            )}
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

export default StudentsListPage