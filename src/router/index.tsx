import { createBrowserRouter } from 'react-router-dom'

import { NotFound, HomePage, StudentsPage, AttendedPage, FathersPage, TeacherPage } from '../Pages'
import { MainLayout } from "../layouts/mainLayout";
import { CreateStudentPage } from '../Pages/Students/CreateStudents';
import { StudentPage } from '../Pages/Students/Student';
import { EditStudentPage } from '../Pages/Students/EditStudent';
import { SubLayout } from '../layouts/subLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'estudiantes',
        element: <SubLayout />,
        children: [
          {
            index: true,
            element: <StudentsPage />
          },
          {
            path: ':id',
            element: <StudentPage />
          },
          {
            path: ':id/edit',
            element: <EditStudentPage />
          },
          {
            path: 'agregar-estudiante',
            element: <CreateStudentPage />
          },
          {
            path: ':id/agregar-medidas-antroprometicas',
            element: <HomePage />
          },
        ]
      },
      {
        path: '/asistencias',
        element: <AttendedPage />,
      },
      {
        path: '/profesores',
        element: <TeacherPage />,
      },
      {
        path: '/padres',
        element: <FathersPage />,
      }
    ],
  },

])
