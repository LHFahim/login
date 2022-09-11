import React from 'react';
import Form from './pages/Form';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  function getLoginDetail(loginDetail) {
    console.log('Inside App:');
    console.log(loginDetail);
  }

  return (
    <div>
      <Dashboard />
      {/* <Form getLoginDetail={getLoginDetail} /> */}
      <Routes>
        {/* <Route path="/" element={<Form />} /> */}
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </div>
  );
}

export default App;
