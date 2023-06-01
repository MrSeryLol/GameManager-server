import React from 'react';
import { Typography, Box, Chip } from '@mui/material';

const GamePage = () => {
  const game = {
    title: 'My Game',
    description: 'This is a description of my game.',
    genres: ['Action', 'Adventure'],
    tags: ['Singleplayer', 'Multiplayer'],
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        {game.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {game.description}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
        {game.genres.map((genre) => (
          <Chip key={genre} label={genre} />
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 1 }}>
        {game.tags.map((tag) => (
          <Chip key={tag} label={tag} variant="outlined" />
        ))}
      </Box>
    </div>
  );
};

export default GamePage;