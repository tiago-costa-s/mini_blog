import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// routes
import Home from './routes/home/Home.jsx';
import ErrorPage from './routes/errorPage/ErrorPage';
import About from './routes/about/About.jsx';
import Login from './routes/login/Login';
import Register from './routes/register/Register.jsx';
// context
import { AuthProvider } from './context/AuthContext.jsx';

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
        path: '/login',
        element: <Login />
      },

      {
        path: '/register',
        element: <Register />
      },

      {
        path: '/about',
        element: <About />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <AuthProvider value={{ user }}>
        <App />
      </AuthProvider>
    </RouterProvider>
  </React.StrictMode>,
)
