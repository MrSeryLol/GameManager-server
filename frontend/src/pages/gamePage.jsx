import React, { useContext, useEffect } from 'react';
import { Typography, Box, Chip, Button, Container } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { redirect, useLocation, useNavigate, useParams } from 'react-router-dom';
import { getGameInfo } from '../API/gameAPI';

const GamePage = observer(() => {
    const { game } = useContext(Context)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        fetchGameInfo()
    }, [])

    const fetchGameInfo = async () => {
        const response = await getGameInfo(id)

        game.setTitle(response.title)
        game.setDescription(response.description)
        game.setGenres(response.genres)
        game.setType(response.type)
    }

    const openGame = () => {
        window.open("https://yandex.ru/games/app/221796#app-id=221796&catalog-session-uid=catalog-6dd0ded5-cd4d-55f3-99a1-0e7ee6ce44af-1687173142194-fe8a&rtx-reqid=7927670079327225463&pos=%7B%22listType%22%3A%22suggested%22%2C%22tabCategory%22%3A%22tag%22%7D", "_blank")
        console.log("ОТкрыл игру")
    }

    return (
        <div>
            <Typography variant="h4" gutterBottom>
                {game.title}
            </Typography>
            <Typography variant="body1" gutterBottom>
                {game.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                {game.genres.map((item) => (
                    <Chip key={item.genre} label={item.genre} />
                ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
                {game.type.map((item) => (
                    <Chip key={item} label={item} variant="outlined" />
                ))}
            </Box>
            <Container sx={{mt: 10}}>
                <Button 
                    variant='contained'
                    onClick={openGame}
                >
                    ИГРАТЬ
                </Button>
            </Container>
        </div>
    );
});

export default GamePage;