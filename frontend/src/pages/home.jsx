import React, { useContext, useEffect } from "react";
import { Box, Divider, List, ListItem, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material";
import Sidebar from "../components/sidebar";
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { getHomeInfo } from "../API/homeAPI";

const Home = observer (() => {
    const { home } = useContext(Context)

    useEffect(() => {
        fetchHomeInfo()
    }, [])

    const fetchHomeInfo = async () => {
        const data = await getHomeInfo();
        home.setGames(data.games)
        home.setGenres(data.genres)
    }

    return (
        <Container >
            <Sidebar />
            <Grid container spacing={2} mt={2} sx={{flexGrow: 1}}>
                {home.games.map((game, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <List>
                            <ListItemButton >
                                <ListItemText primary={game.title} />
                            </ListItemButton>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
})

export default Home;