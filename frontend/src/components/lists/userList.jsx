import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { List, ListItemText, ListItemButton, IconButton, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { createModerator, deleteUser, fetchUsers } from "../../API/adminAPI";
import { Context } from "../..";

const UserList = observer(() => {
    const { admin } = useContext(Context)

    const handleDeleteUser = async (userId, e) =>{
        const deleteUserResponse = await deleteUser(userId)
        const response = await fetchUsers()
        console.log(deleteUserResponse)
        admin.setUsers(response.users)
        alert(`Модератор ${deleteUserResponse.user} был удалён!`)
    }

    const handleCreateModerator = async (userId) => {
        console.log(userId)
        const response = await createModerator({userId: userId})
        admin.setModerators([...admin.moderators, response.user])
        admin.setUsers(admin.users)
    }

    const handleRole = (user) => {
        const moderatorRole = "MODERATOR"
        console.log(user)
        console.log(user.roles.findIndex(item => item.role === moderatorRole))

        if (user.roles.findIndex(item => item.role === moderatorRole) === -1) {
            return false
        }
        
        return true
    }

    return (
        <List>
            {admin.users.map((user, index) => (
                <ListItemButton key={index} >
                    <ListItemText primary={user.login} sx={{ ml: 20 }} />

                    <Button 
                        disabled={handleRole(user)}
                        onClick={() => handleCreateModerator(user._id)}
                    >
                        Сделать модератором
                    </Button>
                    <IconButton onClick={(e) => handleDeleteUser(user._id)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItemButton>
            ))}
        </List>
    )
})

export default UserList;