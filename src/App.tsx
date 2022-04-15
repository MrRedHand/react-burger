import React from 'react';
import Header from './components/header/header';
import Main from './components/main/main';

function App() {
  const jsonData = require('./utils/data.json');

  console.log(jsonData)
  return (
    <div>
      <Header />
      <Main data={jsonData}/>
    </div>
  );
}

export default App;
