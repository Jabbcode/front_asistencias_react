import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const EditStudentPage = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  // const [student, setStudent] = useState({});

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    birthDate: ''
  });

  useEffect(() => {
    getOneStudent()
  }, [id]);

  const getOneStudent = async () => {
    const res = await axios.get(`http://localhost:3000/api/v1/students/${id}`)
    setForm({
      firstName: res.data.firstName,
      lastName: res.data.lastName,
      birthDate: res.data.birthDate,
    })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.patch(`http://localhost:3000/api/v1/students/${id}`, form)
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
          <label htmlFor="birthDate" className="col-sm-2 col-form-label">Fecha de nacimiento</label>
          <div className="col-sm-10">
            <input type="date" onChange={handleChange} name="birthDate" value={form.birthDate} className="form-control" id="birthDate" />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Agregar</button>
      </form>
    </>
  )
}