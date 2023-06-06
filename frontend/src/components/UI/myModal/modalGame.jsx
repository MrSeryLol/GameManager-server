import React from 'react';
import { Button, Modal, Box, Grid, TextField, MenuItem, FormControl, InputLabel, Select, Chip } from '@mui/material';

const ModalGame = ({ visible, setVisible }) => {
    const [open, setOpen] = React.useState(false);
    console.log(visible)
    const [selectedGames, setSelectedGames] = React.useState([]);

    const handleChange = (event) => {
        setSelectedGames(event.target.value);
      };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                                //value={authlogin}
                                //onChange={e =>setLogin(e.target.value)}
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
                                //value={password}
                                //onChange={e =>setPassword(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel id="game-select-label">Выберите жанры</InputLabel>
                                    <Select
                                        labelId="game-select-label"
                                        id="game-select"
                                        multiple
                                        value={selectedGames}
                                        onChange={handleChange}
                                        renderValue={(selected) => (
                                            <div>
                                                {selected.map((value) => (
                                                <Chip key={value} label={value}/>
                                            ))}
                                            </div>
                                            
                                            // <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                                // {selected.map((value) => (
                                                //     <Chip key={value} label={value} style={{ margin: '2px' }} />
                                                // ))}
                                            // </div>
                                        )}
                                    >
                                        <MenuItem value="Не указано">
                                            <em>Не указано</em>
                                        </MenuItem>
                                        <MenuItem value="genre1">Жанр 1</MenuItem>
                                        <MenuItem value="genre2">Жанр 2</MenuItem>
                                        <MenuItem value="genre3">Жанр 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Button variant="contained" color="primary" onClick={() => setVisible(false)} sx={{mt: 2, mr: 2}}>
                        Закрыть
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => setVisible(false)} sx={{mt: 2, mr: 2}}>
                        Создать
                    </Button>
                </Box>
            </Modal>
        </div>
    );
};

export default ModalGame;