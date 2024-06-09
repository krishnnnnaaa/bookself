import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SavedBooks from './pages/SavedBooks';
import Hero from './components/Hero';
import Content from './components/Content';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: "/",
        element: (
          <div>
            <Hero/>
            <Content/>
          </div>
        )
      },
      {
        path: "/savedbooks",
        element: <SavedBooks/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);