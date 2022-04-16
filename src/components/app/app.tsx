import React from 'react';
import AppHeader from '../app-header/app-header';
import Main from '../main/main';

function App() {
  const jsonData = require('../../utils/data.json');

  return (
    <>
      <AppHeader />
      <Main data={jsonData}/>
    </>
  );
}



export default App;
