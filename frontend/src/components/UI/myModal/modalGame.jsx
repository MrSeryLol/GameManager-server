import React, { useContext, useEffect, useState } from 'react';
import { Button, Modal, Box, Grid, TextField, MenuItem, FormControl, InputLabel, Select, Chip } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { fetchGenres } from '../../../API/developerAPI';
import { Context } from '../../..';
import { createGame } from '../../../API/developerAPI';
import { useNavigate } from 'react-router-dom';

const ModalGame = observer(({ visible, setVisible }) => {

    const { developer } = useContext(Context)
    console.log(visible)
    const [genres, setGenres] = useState([])
    const [selectedGenres, setSelectedGenres] = React.useState([]);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchGenres()
            setGenres(response.genres)
        }
        fetchData()
    }, [])

    const handleChange = async (event) => {
        setSelectedGenres(event.target.value);
    };

    const handleCreateBtn = async () => {
        console.log("Я попал")
        setVisible(false)
        const response = await createGame(title, description, selectedGenres)
        developer.setGames([...developer.games, response.newGame])
    }

    return (
        <div>
            <Modal open={visible} onClose={() => setVisible(false)} >
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    color='secondary'
                                    required
                                    fullWidth
                                    id="gameName"
                                    label="Название игры"
                                    name="gameName"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    color='secondary'
                                    required
                                    fullWidth
                                    multiline
                                    name="gameDescription"
                                    label="Описание игры"
                                    id="gameDescription"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="game-select-label">Выберите жанры</InputLabel>
                                    <Select
                                        labelId="game-select-label"
                                        id="game-select"
                                        multiple
                                        value={selectedGenres}
                                        onChange={handleChange}
                                        renderValue={(selected) => (
                                            <div>
                                                {selected.map((value) => (
                                                    <Chip key={value} label={value} />
                                                ))}
                                            </div>
                                        )}
                                    >
                                        <MenuItem value="Не указано">
                                            <em>Не указано</em>
                                        </MenuItem>
                                        {genres.map((item, index) =>
                                            <MenuItem key={index} value={item.genre}>{item.genre}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => setVisible(false)} sx={{ mt: 2, mr: 2 }}>
                        Закрыть
                    </Button>
                    <Button variant="contained" color="primary" onClick={handleCreateBtn} sx={{ mt: 2, mr: 2 }}>
                        Создать
                    </Button>
                </Box>
            </Modal>
        </div>
    );
});

export default ModalGame;