import React, { useContext } from "react";
import { Container, List, ListSubheader, ListItemButton, ListItemText } from "@mui/material";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const Sidebar = observer (() => {
    const { home } = useContext(Context)

    return (
            <Container sx={{ mt: 2 }}>
                <ListSubheader>Популярные жанры</ListSubheader>
                <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
                    {home.genres.map((item, index) => (
                        <ListItemButton key={index}>
                            <ListItemText primary={item.genre} />
                        </ListItemButton>
                    ))}
                </List>
            </Container>
            // {/* <Container sx={{ mt: 2 }}>
            //     <ListSubheader>Популярные теги</ListSubheader>
            //     <List sx={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            //         {genres.map((genre, index) => (
            //             <ListItemButton key={index}>
            //                 <ListItemText primary={genre} />
            //             </ListItemButton>
            //         ))}
            //     </List>
            // </Container> */}
    );
});

export default Sidebar;