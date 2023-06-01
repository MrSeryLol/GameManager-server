import React from "react";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from "react";
import Button from "react-bootstrap/Button";
//import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap"
import { Typography, Grid, Box, Container, List, ListSubheader, ListItemButton, ListItemText } from "@mui/material";

const genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Fantasy', 'Horror', 'Mystery', 'Romance', 'Sci-Fi', 'Thriller'];

const Sidebar = () => {
    return (
        <>
         <Container sx={{ mt: 2}}>
        
            <ListSubheader>Популярные жанры</ListSubheader>
            <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                {genres.map((genre, index) => (
                    <ListItemButton key={index}>
                        <ListItemText primary={genre} />
                    </ListItemButton>
                ))}
            </List>
        </Container>
        <Container sx={{ mt: 2}}>
        <ListSubheader>Популярные теги</ListSubheader>
        <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            {genres.map((genre, index) => (
                <ListItemButton key={index}>
                    <ListItemText primary={genre} />
                </ListItemButton>
            ))}
        </List>
        </Container>
     </>
    );
};

export default Sidebar;