import React, { useContext, useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import MatchList from './MatchList';
import './Styles.css';
import axios from 'axios';
import { AuthContext } from "../../contexts/AuthContext";

let MICROSERVICE_URL_GAME = process.env.REACT_APP_MICROSERVICE_URL;
console.log(MICROSERVICE_URL_GAME)
if (MICROSERVICE_URL_GAME.substring(MICROSERVICE_URL_GAME.length - 1) !== '/')
  MICROSERVICE_URL_GAME += '/';
MICROSERVICE_URL_GAME += 'api/v1/games';
console.log(MICROSERVICE_URL_GAME)
const AllGames = () => {
  const [sportsAndFixtures, setSportsAndFixtures] = useState();
  const [sportNames, setSportNames] = useState();
  const [selectedSport, setSelectedSport] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const { token } = useContext(AuthContext);
  useEffect(()=> {
    axios
      .get(MICROSERVICE_URL_GAME, {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
      .then((resp) => {
        let games = resp.data.data;
        let sports_o = {};
        for (let game of games) {
          if (!sports_o[game.game_name]) sports_o[game.game_name] = [];
          sports_o[game.game_name].push(game);
        }

        setSportsAndFixtures(() => sports_o);
        let sportnames = Object.keys(sports_o);
        setSportNames(sportnames);
        setSelectedSport(sportnames[0]);
        setIsLoaded(true);
      })
      .catch(console.err);
  }, [token]);
  const handleSelectSport = setSelectedSport;

  return isLoaded ? (
    <div className="app" id="userdata">
      <Sidebar
        sports={sportNames}
        onSelectSport={handleSelectSport}
        selectedSport={selectedSport}
      />
      <div className="content">
        {/* <div className="image-container">
          <img src={`/images/${selectedSport}.jpeg`} alt={selectedSport} />
        </div> */}
        <div className="heading">
          <h1>{selectedSport} Players Registered</h1>
        </div>
        <MatchList matches={sportsAndFixtures[selectedSport]} />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

function Loading() {
  return (
    <div className="loading">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
}

export default AllGames ;