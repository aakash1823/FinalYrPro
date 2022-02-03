import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Url from './Url';

const NavBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="x2" style={{backgroundColor:"#FA5F55"}}>
        <Toolbar disableGutters>
            <a href="/" style={{textDecoration:"none",margin:"auto",color:"white"}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            style={{margin:"auto"}}
          >
            FAKE REVIEW SUMMARIZER
          </Typography>
          </a>
        </Toolbar>
      </Container>
 
    
    </AppBar>
  );
};
export default NavBar;