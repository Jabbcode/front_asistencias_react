import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { IStudent } from "../../types/Student";

import ModalEvent from "../../components/ModalEvent";
import { IAnthropometric } from "../../types/Anthropometric";
import { format } from "date-fns";
import BarChartUI from "../../components/BarChart";
import StudentInfo from "./components/StudentInfo";
import { IEventCalendar } from "../../types/EventCalendar";
import Calendar from "../../components/Calendar";
import { addDaysToDate, subDaysToDate } from "../../utils/Date";
import ModalCreateEvent from "../../components/ModalCreateEvent";
import ModalDeleteEvent from "../../components/ModalDeleteEvent";
import ModalCreateMeasurement from "../../components/ModalCreateMeasurement";

export const StudentPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const [student, setStudent] = useState<IStudent>({ firstName: "", lastName: "", age: 0, attendeds: [], anthropometrics: [] });
  const [events, setEvents] = useState<IEventCalendar[]>([]);
  const [idAttended, setIdAttended] = useState<number>();
  const [isOpenEditEvent, setIsOpenEditEvent] = useState(false);
  const [isOpenCreateEvent, setIsOpenCreateEvent] = useState(false);
  const [isOpenDeleteEvent, setIsOpenDeleteEvent] = useState(false);
  const [isOpenCreateMeasurement, setIsOpenCreateMeasurement] = useState(false);
  const [medidas, setMedidas] = useState<IAnthropometric>();
  const [selectDate, setSelectDate] = useState<Date | string>(format(new Date(), "yyyy-MM-dd"));
  const [selectDateCreate, setSelectDateCreate] = useState();


  useEffect(() => {
    getStudent()
  }, [isOpenCreateEvent, isOpenEditEvent, isOpenDeleteEvent, isOpenCreateMeasurement]);

  useEffect(() => {
    setMedidas(student.anthropometrics?.find(anthropometric => {
      return anthropometric.date === selectDate && anthropometric
    }))

    console.log();


  }, [selectDate]);

  const getStudent = async () => {
    const { data }: { data: IStudent } = await axios.get(`http://localhost:3000/api/v1/students/${id}`)
    setStudent(data)

    setEvents(data?.attendeds?.map(attended => {
      return {
        title: attended.isAttended ? "⭕" : "❌",
        date: attended.date.toString().slice(0, 10),
        id: attended.id,
        backgroundColor: 'transparent',
        borderColor: 'transparent'
      }
    }))
  }

  const handleDateClick = (args: any) => {
    const attended = student.attendeds.find(attended => attended.date === args.dateStr)

    if (!attended) {
      setIsOpenCreateEvent(true)
      setSelectDateCreate(args.dateStr);
    } else {
      setIdAttended(attended.id);
      setIsOpenDeleteEvent(true)
    }
  }

  const handleEventClick = (args: any) => {
    setIsOpenEditEvent(true)
    setIdAttended(args.event.id)
  }



  return (
    <div className="p-2">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-4">
          <div className="mb-4">
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" onClick={() => navigate('/estudiantes')}>Volver</button>
            <StudentInfo student={student} />
          </div>
          <div className="flex-col">
            <div>
              <button type="button" onClick={() => { setSelectDate(subDaysToDate(selectDate)) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-l-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Anterior</button>
              <input type="date" name="selectDate" id="selectDate" value={selectDate.toString()} onChange={(e) => setSelectDate(e.target.value)} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2" />
              <button type="button" onClick={() => { setSelectDate(addDaysToDate(selectDate)) }} className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-r-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Siguiente</button>
              {
                student.anthropometrics.find(anthropometric => anthropometric.date === selectDate) ? ""
                  : <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 focus:outline-none" onClick={() => setIsOpenCreateMeasurement(true)}>Agregar Medidas</button>
              }
            </div>
            <BarChartUI data={[
              {
                name: 'IMC',
                value: medidas?.imc,
              },
              {
                name: 'Altura',
                value: medidas?.height
              },
              {
                name: 'Peso',
                value: medidas?.weight
              },
              {
                name: 'Circ. de Cadera',
                value: medidas?.hip_circumference
              },
              {
                name: 'Circ. de Cintura',
                value: medidas?.waist_circumference
              }
            ]} />
          </div>

        </div>
        <div className="col-span-8">
          <Calendar events={events} handleDateClick={handleDateClick} handleEventClick={handleEventClick} />
        </div>
      </div>

      {isOpenEditEvent && <ModalEvent setIsOpen={setIsOpenEditEvent} idAttended={idAttended!} />}
      {isOpenCreateEvent && <ModalCreateEvent setIsOpen={setIsOpenCreateEvent} date={selectDateCreate!} idStudent={id!} />}
      {isOpenDeleteEvent && <ModalDeleteEvent setIsOpen={setIsOpenDeleteEvent} idAttended={idAttended!} />}
      {isOpenCreateMeasurement && <ModalCreateMeasurement setIsOpen={setIsOpenCreateMeasurement} date={selectDate} studentId={id} />}
    </div>
  )
}
