import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageOne from './routes/PageOne';
import PageTwo from './routes/PageTwo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
      <Route path="pageone" element={<PageOne/>} />
      <Route path="pagetwo" element={<PageTwo/>} />
    </Routes>
</BrowserRouter>
);


