import { useState, useEffect } from "react";
import axios from "axios";

function TeamPicker({ onSubmit }) {
  const [teams, setTeams] = useState([]);
  const [queryIndex, setQueryIndex] = useState("");
  const [currentIndex, setCurrentIndex] = useState("-1");

  useEffect(() => {
    axios({
      url: "https://statsapi.web.nhl.com/api/v1/teams",
      method: "GET",
      dataResponse: "json",
    })
      .then((response) => {
        setTeams(response.data.teams);
        // console.log(response.data.teams);
      })
      .catch(() => {
        alert("Something went wrong, try again later!");
      });
  }, []);

  const handleChange = (e) => {
    setCurrentIndex(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setQueryIndex(currentIndex);
  };

  useEffect(() => {
    if (currentIndex !== "-1") {
      onSubmit(teams[currentIndex]);
    }
  }, [queryIndex]);

  return (
    <>
      {teams.length > 0 ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="team"></label>
          <select value={currentIndex} onChange={handleChange}>
            <option value="-1" disabled>
              Select Team
            </option>
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
      ) : null}
    </>
  );
}

export default TeamPicker;
