import React from 'react';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '..';


const GameList = observer( () => {
    const { developer } = useContext(Context)

    return (
        <List>
            {developer.games.map((game, index) => (
                <ListItemButton key={index}>
                    <ListItemText primary={game.title} />
                </ListItemButton>
            ))}
        </List>
    );
});

export default GameList;