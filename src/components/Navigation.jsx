
import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const pages = ['memories']


const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
 

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
 

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            My Diary 
          </Typography>

          
          <Box sx={{ flexGrow: 1, display: {  md: 'flex' } }}>
            {pages.map((page) => (
                 
                        <Button
                   key={page}
                   onClick={handleCloseNavMenu}

                  sx={6}
                        >
                    {page}
                  </Button>
              
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export {Navigation};
