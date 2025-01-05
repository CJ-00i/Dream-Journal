import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Archives from './Archives';
import About from './About';
import Dream from './Dream'; // Make sure Dream is imported

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/archives', element: <Archives /> },
  { path: '/about', element: <About /> },
  { path: '/dream/:key', element: <Dream /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
