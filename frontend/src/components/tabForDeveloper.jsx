import React from 'react';
import { Fab, Menu, MenuItem } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ModalGame from './UI/myModal/modalGame';

const NewDeveloperBtn = ({setVisible}) => {
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

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div className="btn__container" >
      <Fab color="primary" aria-label="add" onClick={handleClick} sx={{ml: "auto", float: "right"}}>
        <AddIcon />
      </Fab>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={() => {setVisible(true); setAnchorEl(null)}} >Создать игру</MenuItem>
      </Menu>
      </div>
  );
};

export default NewDeveloperBtn;