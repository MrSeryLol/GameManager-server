import React from "react";
import { Grid, Container, Box, Typography, Avatar, Paper } from '@mui/material';
import { Fab, Menu, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import GameList from "../components/gameList";
import NewItemButton from "../components/fabForGame";
import ModalGame from "../components/UI/myModal/modalGame";

const DevPage = () => {
    const [modal, setModal] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);
  //const [modal, setModal] = React.useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };


    const DeveloperAvatar = styled(Avatar)({
        width: '150px',
        height: '150px',
        marginBottom: '16px',
    });

    return (
        <div>
            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Developer Page
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                    <Paper sx={{ p: 3 }}>
                        <DeveloperAvatar src="/path/to/avatar.jpg" alt="Developer Avatar" />
                        <Typography variant="h6" gutterBottom>
                            John Doe
                        </Typography>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus, libero sed
                            fermentum faucibus, ex ipsum fringilla mauris, nec sollicitudin metus ex vitae eros.
                        </Typography>
                    </Paper>
                </Box>
                <GameList />
            </Container>
            <NewItemButton setVisible={setModal}/>
            {/* <div className="btn__container" >
                <Fab color="primary" aria-label="add" onClick={handleClick} sx={{ ml: "auto", float: "right" }}>
                    <AddIcon />
                </Fab>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick={() => setModal(true)}>Create Game</MenuItem>
                </Menu>
            </div> */}
            <ModalGame visible={modal} setVisible={setModal} />
        </div>
    )
}

export default DevPage;