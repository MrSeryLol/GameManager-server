import React from 'react';
import { List, ListItemButton, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Context } from '../..';
import { deleteGame, fetchGames } from '../../API/adminAPI';


const GameList = observer( () => {
    const { admin } = useContext(Context)

    const handleDeleteGame = async (gameId, e) => {
        const deleteGameResponse = await deleteGame(gameId)
        const response = await fetchGames()
        console.log(deleteGameResponse)
        admin.setGames(response.games)

        alert(`Игра ${deleteGameResponse.game} была удалена!`)
    }

    return (
        <List>
            {admin.games.map((game, index) => (
                <ListItemButton key={index}>
                    <ListItemText primary={game.title} />
                    <IconButton onClick={(e) => handleDeleteGame(game._id, e)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemButton>
            ))}
        </List>
    );
});

export default GameList;