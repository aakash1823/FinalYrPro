import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import Url from './Url';
import NavBar from './NavBar'
const HomePage = () => {

  return (
    <AppBar position="static">
     
     <NavBar></NavBar>
      <Url></Url>
    </AppBar>
  );
};
export default HomePage;