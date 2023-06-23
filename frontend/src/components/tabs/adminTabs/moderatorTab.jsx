import React, { useContext, useEffect, useState } from 'react';
import {
    Typography, List, ListItem, ListItemText, IconButton, TextField, Button,
    Box, Accordion, AccordionDetails, AccordionSummary, Container, Tab, Tabs, InputAdornment, ListItemButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from "@mui/icons-material/Search"
import { observer } from 'mobx-react-lite';
import ModeratorList from '../../lists/moderatorList';
import { fetchModerators } from '../../../API/adminAPI';
import { Context } from '../../..';

const ModeratorTab = observer(({ currentTabIndex }) => {

    const { admin } = useContext(Context)


    useEffect(() => {
        fetchModeratorInfo()
    }, [])

    const fetchModeratorInfo = async() => {
        const response = await fetchModerators()
        admin.setModerators(response.filteredUsers)
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
        currentTabIndex === 1 && (
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
                <ModeratorList/>
            </Container>
        )
    )
})

export default ModeratorTab;