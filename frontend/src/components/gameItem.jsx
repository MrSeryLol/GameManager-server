import { Grid } from "@mui/material";
import React from "react";

const GameItem = (props) => {

    const listGame = [1, 2, 3, 4, 5, 6]

    return (
        <Grid item>
            {listGame.map()}
        </Grid>
    )
}

export default GameItem;