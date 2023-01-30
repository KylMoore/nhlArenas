import { useState, useEffect } from 'react';

import axios from 'axios';
import './App.css';

import Form from './components/Form';


function App() {

  const [team, setTeam] = useState("");

  const handleSelectChange = (e) => {
    console.log(setTeam)
  }

  useEffect(() => {

    axios({
      url: "https://statsapi.web.nhl.com/api/v1/teams",
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      // setTeam(response.data.teams);
      console.log(response.data.teams)
    })
  })



  return (
    <div className="App">
      <div className='backgroundImage'>
        <h1>NHL Arena</h1>
        {
          team.map(name) = ()=>{

            return (
        <Form
          team={name.team}
          handleSelectChange={handleSelectChange}
        />)
          }
        }
      </div>
    </div>
  );
}

export default App;


