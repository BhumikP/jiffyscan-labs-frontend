
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import Dashboard from "./pages/Dashboard";


const router = createBrowserRouter([
{ path: '/', element: <Dashboard /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}