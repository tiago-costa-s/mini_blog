import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/home/Home.jsx';
import ErrorPage from './routes/errorPage/ErrorPage';
import About from './routes/about/About.jsx';
import Login from './routes/login/Login';
import Register from './routes/register/Register.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },

      {
        path: '/about',
        element: <About />
      },

      {
        path: '/login',
        element: <Login />
      },

      {
        path: '/register',
        element: <Register />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
