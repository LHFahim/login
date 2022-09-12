import React from 'react';
import Form from './pages/Form';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AddDoctor from './pages/AddDoctor';

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
        <Route path="/AddDoctor" element={<AddDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
