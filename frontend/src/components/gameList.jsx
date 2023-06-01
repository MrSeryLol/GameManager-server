import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const games = [
  { id: 1, title: 'Game 1' },
  { id: 2, title: 'Game 2' },
  { id: 3, title: 'Game 3' },
  { id: 4, title: 'Game 4' },
  { id: 5, title: 'Game 5' },
];

const GameList = () => {
  return (
    <List>
      {games.map((game) => (
        <ListItem key={game.id} button>
          <ListItemText primary={game.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default GameList;