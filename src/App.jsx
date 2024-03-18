// App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details' element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
