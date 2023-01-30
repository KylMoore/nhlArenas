import { useState, useEffect } from 'react';

import './App.css';



function App() {

  const [team, setTeam] = useState();


  return (
    <div className="App">
      <div className='backgroundImage'>
        <h1>NHL Arena</h1>
        
      </div>
    </div>
  );
}

export default App;


// GET https://statsapi.web.nhl.com/api/v1/teams