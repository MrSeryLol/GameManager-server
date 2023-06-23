import React, { useContext, useEffect, useState } from 'react';
import {
    Typography, List, ListItem, ListItemText, IconButton, TextField, Button,
    Box, Accordion, AccordionDetails, AccordionSummary, Container, Tab, Tabs, InputAdornment, ListItemButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from "@mui/icons-material/Search"
import GenreList from '../../lists/genreList';
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import { fetchGenres } from '../../../API/adminAPI';

const GenreTab = observer(({ currentTabIndex }) => {
    const { admin } = useContext(Context)

    useEffect(() => {
        fetchGenreInfo()
    }, [])

    const fetchGenreInfo = async () => {
        const response = await fetchGenres()
        console.log(response)
        console.log(response.genres)
        admin.setGenres(response.genres)
    }

    const [newModerator, setNewModerator] = useState('');
    const [moderators, setModerators] = useState(['Moderator 1', 'Moderator 2', 'Moderator 3']);
    const [isModerator, setIsModerator] = useState(false);


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
        currentTabIndex === 3 && (
            <GenreList />
        )
    )
})

export default GenreTab;