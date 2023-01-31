import { useState } from "react"

function Form({handleSubmit}) {

    const [userChoice, setUserChoice] = useState("");

    const handleChange = (e) => {
        setUserChoice(e.target.value)
        console.log(handleChange)
    }

    return (
        <form onSubmit={(event)=>{
            event.preventDefault();
            handleSubmit(userChoice)
        }}>
            <label htmlFor="team"></label>
            <select>
                <option value="" disabled>Select Team</option>
                <option value="0">New Jersey Devils</option>
                <option value="1">New York Islanders</option>
                <option value="2">New York Rangers</option>
                <option value="3">Philadelphia Flyers</option>
                <option value="4">Pittsburgh Penguins</option>
                <option value="5">Boston Bruins</option>
                <option value="6">Buffalo Sabres</option>
                <option value="7">Montreal Canadiens</option>
                <option value="8">Ottawa Senators</option>
                <option value="9">Toronto Maple Leafs</option>
                <option value="10">Carolina Hurricanes</option>
                <option value="11">Florida Panthers</option>
                <option value="12">Tampa Bay Lightning</option>
                <option value="13">Washington Capitals</option>
                <option value="14">Chicago Blackhawks</option>
                <option value="15">Detroit Red Wings</option>
                <option value="16">Nashville Predators</option>
                <option value="17">St. Louis Blues</option>
                <option value="18">Calgary Flames</option>
                <option value="19">Colorado Avalanche</option>
                <option value="20">Edmonton Oilers</option>
                <option value="21">Vancouver Canucks</option>
                <option value="22">Anaheim Ducks</option>
                <option value="23">Dallas Stars</option>
                <option value="24">Los Angeles Kings</option>
                <option value="25">San Jose Sharks</option>
                <option value="26">Columbus Blue Jackets</option>
                <option value="27">Minnesota Wild</option>
                <option value="28">Winnipeg Jets</option>
                <option value="29">Arizona Coyotes</option>
                <option value="30">Vegas Golden Knights</option>
                <option value="31">Seattle Kraken</option>
            </select>
            <button>Add!</button>
        </form>
    )
}

export default Form