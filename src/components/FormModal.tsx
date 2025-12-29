"use client"

const FormModal = ({table, type, data, id}:{
    table: "teacher" | "students" | "parent" | "subject" | "class" | "lesson" | "exam" | "assignment" | "result" | "attendance" | "event" | "announcement";
    type: "create" | "update" | "delete";
    data?: any;
    id?: number; 
}) => {
  return (
    <>
        <button className="w-7 h-7">

        </button>
    </>
  )
}

export default FormModal;