import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import { routes } from './routes'
import './App.css'

import '@fontsource/aileron/400.css';
import '@fontsource/aileron/600.css';
import '@fontsource/aileron/700.css';
import '@fontsource/aileron/800.css';

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
