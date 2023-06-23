import React, { useContext, useDebugValue, useEffect, useState } from 'react';
import {
    Typography, List, ListItem, ListItemText, IconButton, TextField, Button,
    Box, Accordion, AccordionDetails, AccordionSummary, Container, Tab, Tabs, InputAdornment, ListItemButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from "@mui/icons-material/Search"
import GameList from '../../lists/gameList';
import { fetchGames } from '../../../API/adminAPI';
import { Context } from '../../..';
import { observer } from 'mobx-react-lite';

const GameTab = observer(({ currentTabIndex }) => {
    const { admin } = useContext(Context)
    const [newModerator, setNewModerator] = useState('');
    const [moderators, setModerators] = useState(['Moderator 1', 'Moderator 2', 'Moderator 3']);
    const [isModerator, setIsModerator] = useState(false);

    useEffect(() => {
        fetchGamesInfo()
    }, [])

    const fetchGamesInfo = async () => {
        const response = await fetchGames()
        admin.setGames(response.games)
    }

    const handleAddModerator = () => {
        if (newModerator.trim() !== '') {
            setModerators([...moderators, newModerator]);
            setNewModerator('');
        }
    };

    const handleDeleteModerator = (index) => {
        const updatedModerators = [...moderators];
        updatedModerators.splice(index, 1);
        setModerators(updatedModerators);
    };

    return (
        currentTabIndex === 2 && (
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
                        sx={{ ml: 50 }}
                    />
                </Container>
                <GameList/>
            </Container>
        )
    )
})

export default GameTab;