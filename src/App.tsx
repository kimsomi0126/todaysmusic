import React from 'react';
import './styles/normalize.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/root';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
