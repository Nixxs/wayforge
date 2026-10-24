import type { RouteObject } from 'react-router'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import VehiclePage from './pages/Vehicle'
import Layout from './components/Layout'

// Shared by the browser router (App.tsx) and the build-time prerender (entry-server.tsx)
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "vehicles/:slug",
        element: <VehiclePage />,
      },
      { path: "*", element: <NotFound /> }
    ]
  }
];
