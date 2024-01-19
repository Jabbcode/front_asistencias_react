import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/main.css'

import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />,
    <Toaster />
  </React.StrictMode>,
)
