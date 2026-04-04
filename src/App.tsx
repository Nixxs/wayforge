import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout />,
    children: [
      {
        path:"/",
        element:<Home />,
      },
      {path:"*",element:<NotFound />}
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

