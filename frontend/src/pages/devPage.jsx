import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Box, Typography, Avatar, Paper } from '@mui/material';
import { Fab, Menu, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import GameList from "../components/gameList";
import NewGameBtn from "../components/fabForGame";
import ModalGame from "../components/UI/myModal/modalGame";
import { observer } from "mobx-react-lite";
import NewDeveloperBtn from "../components/tabForDeveloper";
import ModalDeveloper from "../components/UI/myModal/modalDeveloper";
import { Context } from "..";
import { fetchGames } from "../API/developerAPI";

const DevPage = observer( () => {
    const { game } = useContext(Context)
    const { developer } = useContext(Context)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchGames()
            console.log("получили игры")
            console.log(response.games)
            developer.setGames(response.games)
        }
        fetchData()
    }, [])

    const [modalGame, setModalGame] = React.useState(false)
    const [modalDeveloper, setModalDeveloper] = React.useState(false)
    const [anchorEl, setAnchorEl] = React.useState(null);

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

    return (
        <div>
            <Container maxWidth="md" sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Developer Page
                </Typography>
                <GameList />
            </Container>
            <NewGameBtn setVisibleDeveloper={setModalDeveloper} setVisibleGame={setModalGame}/>
            <ModalGame visible={modalGame} setVisible={setModalGame} />
            <ModalDeveloper visible={modalDeveloper} setVisible={setModalDeveloper}/>
        </div>
    )
})

export default DevPage;