import React from "react";
// import { Link as LinkBase } from "@mui/material";
// import { Link } from "react-router-dom";
import { Box, Divider, List, ListItem, ListItemText, ListSubheader, Typography } from "@mui/material";
import Sidebar from "../components/sidebar";
//import { Row, Col, Container } from "react-bootstrap";
import Container from '@mui/material/Container';
import { Grid } from "@mui/material";
import GameItem from "../components/gameItem"

const listGame = [1, 2, 3, 4, 5, 6]
const Home = () => {
    return (
        <Container >
            <Sidebar />
            <Grid container spacing={2} mt={2} sx={{flexGrow: 1}}>
                {listGame.map((genre, index) => (
                    <Grid item xs={6} sm={4} md={3} key={index}>
                        <List>
                            <ListItem button>
                                <ListItemText primary={genre} />
                            </ListItem>
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Home;