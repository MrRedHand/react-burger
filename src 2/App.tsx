import React from 'react';
import AppHeader from './components/header/appheader';
import Main from './components/main/main';

function App() {
  const jsonData = require('./utils/data.json');

  console.log(jsonData)
  return (
    <div>
      <AppHeader />
      <Main data={jsonData}/>
    </div>
  );
}

export default App;
