import { useState, useEffect } from "react";
import axios from "axios";

function TeamPicker({ onSubmit }) {
  const [teams, setTeams] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    axios({
      url: "https://statsapi.web.nhl.com/api/v1/teams",
      method: "GET",
      dataResponse: "json",
    }).then((response) => {
      setTeams(response.data.teams);
    });
  }, []);

  const handleChange = (e) => {
    setCurrentIndex(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(teams[currentIndex]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="team"></label>
      <select onChange={handleChange}>
        <option disabled>Select Team</option>
        {teams.map((team, index) => {
          return (
            <option key={team.id} value={index}>
              {team.name}
            </option>
          );
        })}
      </select>
      <button type="submit">Add!</button>
    </form>
  );
}

export default TeamPicker;
