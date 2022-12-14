import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Counter from './routes/Counter';
import List from './routes/List';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App/>} />
      <Route path="counter" element={<Counter/>} />
      <Route path="list" element={<List/>} />
    </Routes>
</BrowserRouter>
);


