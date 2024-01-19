import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IStudent } from "../../types/Student";
import { WarningAlert } from "../../utils/toast";

export const StudentsPage = () => {

  const navigate = useNavigate()
  const [students, setStudents] = useState<IStudent[]>([]);
  const [change, setChange] = useState(false);

  useEffect(() => {
    getAllStudents()

    return () => {
      setChange(false);
    };
  }, [change]);

  const getAllStudents = async () => {
    const res = await axios.get('http://localhost:3000/api/v1/students')
    setStudents(res.data)
  }

  const enableDisableStudent = async (id: number) => {
    const res = await axios.patch(`http://localhost:3000/api/v1/students/enable-disable/${id}`, {
      isActive: false
    })
    WarningAlert(res.data.message)
    setChange(true)
  }

  const handleRouter = (url: string) => {
    navigate(`/estudiantes/${url}`)
  }

  return (
    <div className="relative overflow-x-auto">
      <button onClick={() => handleRouter('agregar-estudiante')} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Agregar estudiante</button>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Edad
            </th>
            <th scope="col" className="px-6 py-3">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {
            students.length > 0
              ? (students.map((student, index) => {
                return (
                  <tr key={student?.id} className="bg-white border-b">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{index + 1}</th>
                    <td className="px-6 py-4">{student?.firstName}</td>
                    <td className="px-6 py-4">{student?.lastName}</td>
                    <td className="px-6 py-4">{student?.age}</td>
                    <div>
                      <td className="py-2"><button onClick={() => handleRouter(`${student.id}`)} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none">Ver</button></td>
                      <td className="py-2"><button onClick={() => handleRouter(`${student.id}/edit`)} className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Editar</button></td>
                      <td className="py-2"><button onClick={() => enableDisableStudent(student.id!)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Deshabilitar</button></td>
                    </div>
                  </tr>
                );
              }))
              : <tr><td>Sin datos</td></tr>
          }
        </tbody>
      </table>
    </div>





  )
}
