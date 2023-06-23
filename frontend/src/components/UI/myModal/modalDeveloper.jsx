import React, {useState} from 'react';
import { Button, Modal, Box, Grid, TextField } from '@mui/material';

const ModalDeveloper = ({ visible, setVisible }) => {
    const [open, setOpen] = useState(false);
    console.log(visible)
    const [selectedGames, setSelectedGames] = useState([]);

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
                                    id="companyName"
                                    label="Название компании"
                                    name="companyName"
                                //value={authlogin}
                                //onChange={e =>setLogin(e.target.value)}
                                />
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

export default ModalDeveloper;