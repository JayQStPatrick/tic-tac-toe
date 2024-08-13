import React from "react";
import { useState } from "react";

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  let playerName = <span className="player-name">{initialName}</span>;

  if (isEditing) {
    playerName = <input type="text" required />;
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing}</button>
    </li>
  );
};

export default Player;
