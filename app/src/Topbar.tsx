import { AppBar, Toolbar, Typography, IconButton, Button, Box, Drawer, List, ListItem, ListItemText, Stack } from '@mui/material';
import { Link, useNavigate, useOutletContext, useRouteLoaderData } from '@remix-run/react';
import { RootOutletContext } from '~/root';
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material';
import { Fragment, useState } from 'react';
import Logo from './Logo';
import { useColorMode } from './Theme';
import { appNavs } from '~/data/appNavs';

export default function AppTopbar() {
  const { user } = useRouteLoaderData('root') as RootOutletContext;
  console.log(user);

  const { toggleColorMode, mode } = useColorMode();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Fragment>
      <AppBar position="sticky" >
        <Toolbar>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1 }}>
            <IconButton size='large' color='inherit' onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>
          <Logo onClick={() => { navigate('/') }} />
          <Typography variant='h6' sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            {appNavs.map((nav) => (
              <Button size='large' key={nav.name} component={Link} to={nav.to} color='inherit'>{nav.name}</Button>
            ))}
          </Typography>
          <Stack flexGrow={1}></Stack>
          <IconButton onClick={toggleColorMode}>
            {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={handleDrawerToggle}

      >
        <List sx={{ minWidth: 180 }}>
          {appNavs.map((nav) => (
            <ListItem key={nav.name} component={Link} to={nav.to} onClick={handleDrawerToggle}>
              <ListItemText primary={nav.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Fragment>
  );
}
