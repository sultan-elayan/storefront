import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SimpleCart from './SimpleCart';
import ShoppingCart from './ShoppingCart';
export default function Header(props ) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          <ShoppingCart/>
          <ShoppingCartIcon>
          </ShoppingCartIcon>
            <SimpleCart/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

