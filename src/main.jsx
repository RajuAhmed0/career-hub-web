import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Route, RouterProvider } from 'react-router-dom'
import { route } from './Components/Route/Route.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
