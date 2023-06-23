import React, { useContext, useEffect, useState } from 'react';
import {
    Typography, List, ListItem, ListItemText, IconButton, TextField, Button,
    Box, Accordion, AccordionDetails, AccordionSummary, Container, Tab, Tabs, InputAdornment, ListItemButton
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Search from "@mui/icons-material/Search"
import { observer } from 'mobx-react-lite';
import { Context } from '../../..';
import { createModerator, fetchUsers } from '../../../API/adminAPI';
import { toJS } from 'mobx';
import UserList from '../../lists/userList';

const UserTab = observer(({ currentTabIndex }) => {
    const { admin } = useContext(Context)

    const [moderators, setModerators] = useState(['Moderator 1', 'Moderator 2', 'Moderator 3']);
    const [users, setUsers] = useState(admin.users)
    const [isModerator, setIsModerator] = useState(false);

    const handleDeleteModerator = (index) => {
        const updatedModerators = [...moderators];
        updatedModerators.splice(index, 1);
        setModerators(updatedModerators);
    };

    useEffect(() => {
        fetchUserInfo()
    }, [])

    const fetchUserInfo = async () => {
        const response = await fetchUsers()
        console.log(response)
        //console.log(response.genres)
        admin.setUsers(response.users)
    }

    const handleCreateModerator = async () => {
        const response = await createModerator()
        admin.setModerators()
    }

    return (
        currentTabIndex === 0 && (
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
                <UserList />
            </Container>
        )
    )
})

export default UserTab;