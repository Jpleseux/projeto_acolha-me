import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.tsx';
import './index.css';
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

