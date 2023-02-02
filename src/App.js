import { useState, useEffect } from "react";

import "./App.css";

import TeamPicker from "./components/TeamPicker";

function App() {
  const [teams, setTeams] = useState([]);

  const handleSubmit = (team) => {
    setTeams([...teams, team]);
  };

  return (
    <div className="App">
      <div className="backgroundImage"></div>
      <div className="wrapper">
        <div className="arenaPickerContainer">
          <h1>NHL Arena Tracker</h1>
          <TeamPicker onSubmit={handleSubmit} />
        </div>
        <ul>
          {teams.map((team, index) => {
            return (
              <li key={index}>
                {team.venue.name} - {team.venue.city}
              </li>
            );
          })}
        </ul>

        {/* fr ? <></> : f */}
      </div>
    </div>
  );
}

export default App;

// {
//   venue.map((venue) => {
//     return venue.city;
//   });
// }

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
