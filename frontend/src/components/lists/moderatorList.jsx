import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { List, ListItemText, ListItemButton, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { createModerator, deleteModerator, fetchModerators } from "../../API/adminAPI";
import { Context } from "../..";

const ModeratorList = observer(() => {
    const { admin } = useContext(Context)

    const handleDeleteModerator = async(userId, e) => {
        const deleteModeratorResponse = await deleteModerator(userId)
        const response = await fetchModerators()
        admin.setModerators(response.filteredUsers)
        alert(`Модератор ${deleteModeratorResponse.login} был удалён!`)
    };

    return (
        <List>
            {admin.moderators.map((moderator, index) => (
                <ListItemButton key={index} >
                    <ListItemText primary={moderator.login} sx={{ ml: 20 }} />
                    <IconButton onClick={(e) => handleDeleteModerator(moderator._id, e)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemButton>
            ))}
        </List>
    )
})

export default ModeratorList;