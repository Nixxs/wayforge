import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import './App.css'

import '@fontsource/aileron/400.css';
import '@fontsource/aileron/600.css';
import '@fontsource/aileron/700.css';
import '@fontsource/aileron/800.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

