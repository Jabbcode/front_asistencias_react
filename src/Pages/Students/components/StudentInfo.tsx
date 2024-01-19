import { IStudent } from "../../../types/Student";

type TypeStudentInfo = {
  student: IStudent
}

const StudentInfo = ({ student }: TypeStudentInfo) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://random.imagecdn.app/450/300" alt="foto" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{student.firstName} {student.lastName}, {student.age} años</h5>
        <p className="mb-3 font-normal text-gray-700"><strong>Fecha de nacimiento:</strong> {student.birthDate?.toString()?.slice(0, 10)}</p>
      </div>
    </div>
  )
};
export default StudentInfo;
