
import React from 'react';
import Player from './Player';
import players from './players';

const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center'
};

function PlayersList() {
  return (
    <div style={listStyle}>
      {players.map((player, index) => (
        <Player key={index} {...player} />
      ))}
    </div>
  );
}

export default PlayersList;
