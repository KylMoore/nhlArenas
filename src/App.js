import { useState, useEffect } from 'react';

import axios from 'axios';
import './App.css';

import Form from './components/Form';


function App() {

  const [team, setTeam] = useState([]);

  const handleSelectChange = (e) => {
    // console.log(setTeam)
  }

  useEffect(() => {

    axios({
      url: "https://statsapi.web.nhl.com/api/v1/teams",
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      return(
        
        console.log(response.data.teams)
      )
    })
  }, [])

const handleSubmit = (userChoice) => {
  
}


  return (
    <div className="App">
      <div className='backgroundImage'>
        <h1>NHL Arena Tracker</h1>

        <Form
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default App;


// MVP

// on page load mount screen with dropdown menu
// 	if loading have a loading screen
// when selecting a team from the drop down change on App.js
// 	fetch the team data from the api when selecting/setting team on the Form.js
// 		hook into first render of APP to fetch team info 
// 	create a peice of state(dropdown menu on Form.js) that reflects the users choice	
// 		pass handlesubmit function as a prop on APP.js
// 		mount the team arena or city the team plays in (arena information state on APP.js)
// 	when changing the selected option 
// 		create new fetch call to change the information


// list of components

// App.js
// Form.js
// 	pass handlesubmit function as prop


// list of state

// dropdown menu selection(Form.js)
// Arena Information(App.js)


// Stretch

// add a firebase database that can track what teams arenas you've been to with little checkboxes?
// add in images that load with the team selected to show an arena image, and a location image

