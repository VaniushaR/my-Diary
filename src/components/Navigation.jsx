
import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


const pages = ['memories', 'author']


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
          <Link to="my-Diary/">
          <Typography
            
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            MI DIARY
          </Typography>
          </Link>
          
          <Box sx={{ flexGrow: 1, display: {  md: 'flex' } }}>
            {pages.map((page) => (
                 <Link to={'my-Diary/'+ page} key={page}>
                        <Button
                   key={page}
                   onClick={handleCloseNavMenu}

                  sx={8}
                        >
                    {page}
                  </Button>
                  </Link>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export {Navigation};
