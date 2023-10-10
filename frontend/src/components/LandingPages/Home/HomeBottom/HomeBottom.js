import React from "react";
import "./HomeBottom.css";

import { useEffect, useState } from 'react';

function Foot() {
    const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('https://games.spardha.org.in/api/v1/games')
      .then((response) => response.json())
      .then((data) => {
        setGames(data.data); // Access the 'data' property of the API response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  
    // Filter the games to get the first uncompleted game
  const uncompletedGame = games.find((game) => !game.is_completed);
    return (
        <div><div className="footbox">
            <div className="footer">
                <div className="logo1">logo</div>
                {uncompletedGame ? (
                    <div className="info">
                    <div className="info1">{uncompletedGame.game_name}</div>
                    <div className="info2">
                        <span>{uncompletedGame.team1}</span>
                        <span> X </span>
                        <span>{uncompletedGame.team2}</span>
                    </div>
                <div className="info3">{uncompletedGame.game_start} | {uncompletedGame.game_venue}</div>
                </div>
                ) : (
                    <p>All Matches Are Completed</p>
                )}
                
                <div className="logo1">logo</div>
            </div>
        </div></div>
        )
}

export default Foot;