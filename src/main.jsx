import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
   
    <App />
   </BrowserRouter>
      
  
)
