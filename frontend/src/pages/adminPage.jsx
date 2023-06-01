import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  TextField,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const AdminPage = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [moderators, setModerators] = useState([]);
  const [newModerator, setNewModerator] = useState('');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleAddModerator = () => {
    if (newModerator.trim() !== '') {
      setModerators([...moderators, newModerator]);
      setNewModerator('');
    }
  };

  const handleDeleteModerator = (moderator) => {
    setModerators(moderators.filter((m) => m !== moderator));
  };

  return (
    <div>
      <div style={{ padding: '20px' }}>
        <Typography variant="h6">Moderators</Typography>
        <List>
          {moderators.map((moderator) => (
            <ListItem key={moderator}>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={moderator} />
              <IconButton onClick={() => handleDeleteModerator(moderator)}>
                <DeleteIcon />
              </IconButton>
            </ListItem>
          ))}
        </List>
        <TextField
          label="New Moderator"
          value={newModerator}
          onChange={(e) => setNewModerator(e.target.value)}
          variant="outlined"
          size="small"
          style={{ marginRight: '10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddModerator}
          startIcon={<AddIcon />}
        >
          Добавить модератора
        </Button>
      </div>
    </div>
  );
};

export default AdminPage;