import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Singalproduct from './components/Singalproduct'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path : '',
    element: <Layout/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path: 'product/:id',
        element: <Singalproduct/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>,
)
