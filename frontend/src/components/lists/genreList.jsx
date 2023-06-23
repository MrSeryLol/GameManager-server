import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "../..";
import { List, ListItem, ListItemText, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { createGenre, deleteGenre, fetchGenres } from "../../API/adminAPI";

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

    const handleDeleteGenre = async(genreId, e) => {
        const deleteGenreResponse = await deleteGenre(genreId)
        console.log(deleteGenreResponse)

        const response = await fetchGenres()
        admin.setGenres(response.genres)

        alert(`Жанр ${deleteGenreResponse.genre} был удалён!`)
    }

    return (
        <List >
            {admin.genres.map((item, index) => (
                <ListItem key={index}>
                    <ListItemText primary={item.genre} />
                    <IconButton 
                    onClick={(e) => handleDeleteGenre(item._id, e)}
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