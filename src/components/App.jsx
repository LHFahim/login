import React from 'react';
import Form from './Form';

function App() {
  function getLoginDetail(loginDetail) {
    console.log('Inside App:');
    console.log(loginDetail);
  }

  return (
    <div>
      <Form getLoginDetail={getLoginDetail} />
    </div>
  );
}

export default App;
