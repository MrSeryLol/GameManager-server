import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "..";
import { List, ListItem, ListItemText, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { createGenre, fetchGenres } from "../API/adminAPI";

const GenreList = observer( () => {
    const {admin} = useContext(Context)

    const [newGenre, setNewGenre] = useState("");

    const handleAddGenre = async () => {
        console.log(newGenre)
        if (newGenre.trim() !== "") {
            const response = await createGenre({genres: newGenre})
            console.log(response.genres)
            admin.setGenres([...admin.genres, response.genres])
            setNewGenre("");
        }

        const response = await fetchGenres()
        admin.setGenres(response.genres)
    };

    return (
        <List>
            {admin.genres.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText primary={item.genre} />
                    <IconButton 
                    //onClick={() => handleDeleteGame(index)} 
                    edge="end" 
                    aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            ))}
            <ListItem>
                <TextField
                    label="Новый жанр"
                    value={newGenre}
                    onChange={(e) => setNewGenre(e.target.value)}
                    variant="outlined"
                />
                <Button onClick={handleAddGenre} variant="contained" color="primary">
                    Добавить
                </Button>
            </ListItem>
        </List>
    )
})

export default GenreList;