import axios from "axios"
import { useState } from "react"
import { redirect, useNavigate } from "react-router-dom"

export const CreateStudentPage = () => {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthDate: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:3000/api/v1/students', form)

    

    navigate('/estudiantes')
  }


  return (
    <>
      <button onClick={() => navigate('/estudiantes')}>Volver</button>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <label htmlFor="name" className="col-sm-2 col-form-label">Nombre</label>
          <div className="col-sm-10">
            <input type="text" onChange={handleChange} name="firstName" value={form.firstName} className="form-control" id="firstName" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="lastname" className="col-sm-2 col-form-label">Apellido</label>
          <div className="col-sm-10">
            <input type="text" onChange={handleChange} name="lastName" value={form.lastName} className="form-control" id="lastName" />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="age" className="col-sm-2 col-form-label">Fecha de nacimiento</label>
          <div className="col-sm-10">
            <input type="date" onChange={handleChange} name="birthDate" value={form.birthDate} className="form-control" id="birthDate" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </>
  )
}