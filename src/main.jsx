import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import TheWordCloud from './TheWordCloud.jsx';
import Archives from './Archives';
import About from './About';
import Dream from './Dream'; // Make sure Dream is imported

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/wordCloud', element: <TheWordCloud /> },
  { path: '/archives', element: <Archives /> },
  { path: '/about', element: <About /> },
  // Add the dynamic route for Dream
  { path: '/dream/:key', element: <Dream /> },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
