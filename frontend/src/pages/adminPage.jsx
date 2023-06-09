import React, { useContext, useEffect, useState } from 'react';
import {
    Typography, List, ListItem, ListItemText, IconButton, TextField, Button,
    Box, Accordion, AccordionDetails, AccordionSummary, Container, Tab, Tabs, InputAdornment, ListItemButton
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from "@mui/icons-material/Search"
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { fetchGenres } from '../API/adminAPI';
import GenreList from '../components/lists/genreList';
import UserTab from '../components/tabs/adminTabs/userTab';
import ModeratorTab from '../components/tabs/adminTabs/moderatorTab';
import GameTab from '../components/tabs/adminTabs/gameTab';
import GenreTab from '../components/tabs/adminTabs/genreTab';

const AdminPage = observer(() => {

    const { admin } = useContext(Context)

    const [expanded, setExpanded] = useState(null);
    // const [newModerator, setNewModerator] = useState('');
    // const [moderators, setModerators] = useState(['Moderator 1', 'Moderator 2', 'Moderator 3']);
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    // const [isModerator, setIsModerator] = useState(false);

    const handleTabChange = (e, tabIndex) => {
        console.log(tabIndex);
        setCurrentTabIndex(tabIndex);
    };

    const handleAccordionChange = (panel) => async (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);

        if (isExpanded) {
            const response = await fetchGenres()
            console.log(response)
            console.log(response.genres)
            admin.setGenres(response.genres)
        }
    };

    // const handleAddModerator = () => {
    //     if (newModerator.trim() !== '') {
    //         setModerators([...moderators, newModerator]);
    //         setNewModerator('');
    //     }
    // };

    // const handleDeleteModerator = (index) => {
    //     const updatedModerators = [...moderators];
    //     updatedModerators.splice(index, 1);
    //     setModerators(updatedModerators);
    // };

    return (
        <>
        <Tabs value={currentTabIndex} onChange={handleTabChange} sx={{mb: 10}}>
            <Tab label="Пользователи" />
            <Tab label="Модераторы" />
            <Tab label="Игры" />
            <Tab label="Жанры" />
        </Tabs>
        <UserTab currentTabIndex={currentTabIndex}/>
        <ModeratorTab currentTabIndex={currentTabIndex}/>
        <GameTab currentTabIndex={currentTabIndex}/>
        <GenreTab currentTabIndex={currentTabIndex}/>
        {/* {currentTabIndex === 0 && (
            <Container >
                <Container >

                
                <TextField id="standard-basic" label="Поиск пользователей" variant="standard" 
                InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">
                        <Search />
                      </InputAdornment>
                     )
                    }}
                sx={{ml: 50}}
                />
                </Container>
            <List>
                        {moderators.map((moderator, index) => (
                            <ListItemButton key={index} >
                                <ListItemText primary={moderator} sx={{ml: 20}}/>
                                {isModerator ? 
                                    <Button disabled>
                                        Сделать модератором
                                    </Button> : 
                                    <Button onClick={() => setIsModerator(!isModerator)}>
                                        Сделать модератором
                                    </Button>
                                }
                                <IconButton onClick={() => handleDeleteModerator(index)} edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemButton>
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
                    </Container>
        )} */}
        {/* <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography variant="h4" align="center" gutterBottom>
                Админ-панель
            </Typography>
            <Accordion expanded={expanded === 'games'} onChange={handleAccordionChange('games')} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="games-content" id="games-header">
                    <Typography variant="h6">Жанры</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <GenreList />
                </AccordionDetails>
            </Accordion>
        </Container>
    </Box> */}
        </>
    );

    

});

export default AdminPage;