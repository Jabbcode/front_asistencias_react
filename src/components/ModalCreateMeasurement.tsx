import axios from "axios";
import { SuccessAlert } from "../utils/toast";
import { useState } from "react";

type Props = {
  date: Date,
  studentId: number,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalCreateMeasurement = ({ date, setIsOpen, studentId }: Props) => {
  

  const [form, setForm] = useState({
    weight: "",
    height: "",
    waist_circumference: "",
    hip_circumference: ""
  });

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const body = {
      height: form.height,
      weight: form.weight,
      waist_circumference: form.waist_circumference,
      hip_circumference: form.hip_circumference,
      studentId,
      date
    }

    const res = await axios.post("http://localhost:3000/api/v1/anthropometric-measurements", body)

    SuccessAlert("Medias agregadas correctamente")
    setIsOpen(false)
  }

  return (
    <div id="default-modal" tabIndex={-1} aria-hidden="true" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
      <div className="relative p-4 w-full max-w-2xl max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Agregar Medidas</h3>
            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => setIsOpen(false)}>
              <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
              <span className="sr-only">Cerrar modal</span>
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="p-4 md:p-5 space-y-4">
              <div className="mb-5">
                <label htmlFor="weight" className="block mb-2 text-sm font-medium text-gray-900">Peso:</label>
                <input type="number" name="weight" id="weight" value={form.weight} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="mb-5">
                <label htmlFor="height" className="block mb-2 text-sm font-medium text-gray-900">Altura:</label>
                <input type="number" name="height" id="height" value={form.height} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="mb-5">
                <label htmlFor="waist_circumference" className="block mb-2 text-sm font-medium text-gray-900">Circunferencia de cintura:</label>
                <input type="number" name="waist_circumference" id="waist_circumference" value={form.waist_circumference} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
              <div className="mb-5">
                <label htmlFor="hip_circumference" className="block mb-2 text-sm font-medium text-gray-900">Circunferencia de cadera</label>
                <input type="number" name="hip_circumference" id="hip_circumference" value={form.hip_circumference} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
              </div>
            </div>
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button type="submit" data-modal-hide="default-modal" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Aceptar</button>
              <button onClick={() => setIsOpen(false)} data-modal-hide="default-modal" type="button" className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cerrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
};
export default ModalCreateMeasurement;
