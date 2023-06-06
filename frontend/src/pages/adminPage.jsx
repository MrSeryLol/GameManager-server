import React, { useContext, useEffect, useState } from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    IconButton,
    ListItemIcon,
    TextField,
    Button,
    Tabs,
    Tab,
    Box,
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Container
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchGenres } from '../API/adminAPI';
import GenreList from '../components/genreList';
import { Link } from 'react-router-dom';
import { toJS } from 'mobx';

const AdminPage = observer(() => {

    const { admin } = useContext(Context)

    // useEffect(() => {
    //     fetchGenres().then(data => admin.setGenres(data))
    // }, [])
    const [expanded, setExpanded] = useState(null);
    const [newModerator, setNewModerator] = useState('');
    const [newGame, setNewGame] = useState('');
    const [moderators, setModerators] = useState(['Moderator 1', 'Moderator 2', 'Moderator 3']);
    const [games, setGames] = useState(['Game 1', 'Game 2', 'Game 3']);

    const handleAccordionChange = (panel) => async (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);

        if (isExpanded) {
            const response = await fetchGenres()
            console.log(response)
            console.log(response.genres)
            admin.setGenres(response.genres)
        }
    };

    const handleAddModerator = () => {
        if (newModerator.trim() !== '') {
            setModerators([...moderators, newModerator]);
            setNewModerator('');
        }
    };

    const handleAddGame = () => {
        if (newGame.trim() !== '') {
            setGames([...games, newGame]);
            setNewGame('');
        }
    };

    const handleDeleteModerator = (index) => {
        const updatedModerators = [...moderators];
        updatedModerators.splice(index, 1);
        setModerators(updatedModerators);
    };

    const handleDeleteGame = (index) => {
        const updatedGames = [...games];
        updatedGames.splice(index, 1);
        setGames(updatedGames);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" align="center" gutterBottom>
                    Админ-панель
                </Typography>
                <Accordion expanded={expanded === 'moderators'} onChange={handleAccordionChange('moderators')}>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="moderators-content" id="moderators-header">
                        <Typography variant="h6">Модераторы</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {moderators.map((moderator, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={moderator} />
                                    <IconButton onClick={() => handleDeleteModerator(index)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                            <ListItem>
                                <TextField
                                    label="Новый модератор"
                                    value={newModerator}
                                    onChange={(e) => setNewModerator(e.target.value)}
                                    variant="outlined"
                                />
                                <Button onClick={handleAddModerator} variant="contained" color="primary">
                                    Добавить
                                </Button>
                            </ListItem>
                        </List>
                    </AccordionDetails>
                </Accordion>
                <Accordion expanded={expanded === 'games'} onChange={handleAccordionChange('games')} >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="games-content" id="games-header">
                        <Typography variant="h6">Игры</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <GenreList />
                        {/* <List>
                            {games.map((game, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={game} />
                                    <IconButton onClick={() => handleDeleteGame(index)} edge="end" aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItem>
                            ))}
                            <ListItem>
                                <TextField
                                    label="Новая игра"
                                    value={newGame}
                                    onChange={(e) => setNewGame(e.target.value)}
                                    variant="outlined"
                                />
                                <Button onClick={handleAddGame} variant="contained" color="primary">
                                    Добавить
                                </Button>
                            </ListItem>
                        </List> */}
                    </AccordionDetails>
                </Accordion>
            </Container>
        </Box>
    );
});


export default AdminPage;