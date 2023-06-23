import React, { useContext, useEffect } from "react";
import { Container, Typography } from '@mui/material';
import GameList from "../components/lists/gameList";
import NewGameBtn from "../components/fabForGame";
import ModalGame from "../components/UI/myModal/modalGame";
import { observer } from "mobx-react-lite";
import ModalDeveloper from "../components/UI/myModal/modalDeveloper";
import { Context } from "..";
import { fetchGames } from "../API/developerAPI";

const DevPage = observer(() => {
    const { developer } = useContext(Context)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetchGames()
            console.log("получили игры")
            if (response) {
                developer.setGames(response.games)
            }
            else {
                developer.setGames([])
            }
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
            <NewGameBtn setVisibleDeveloper={setModalDeveloper} setVisibleGame={setModalGame} />
            <ModalGame visible={modalGame} setVisible={setModalGame} />
            <ModalDeveloper visible={modalDeveloper} setVisible={setModalDeveloper} />
        </div>
    )
})

export default DevPage;