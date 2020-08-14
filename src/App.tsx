import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { makeStyles, Grid } from '@material-ui/core';
import AuthContextProvider from './contexts/AuthContext';
import Routes from './navigation/Routes';
import UsersList from './modules/UsersList/UsersList';


const useStyles = makeStyles({
  background: {
    backgroundColor: "lightgrey",
    height: '100vh',
    width: '100vw'
  }
})

function App() {

  const classes = useStyles();

  return (
    <AuthContextProvider>
      <Grid container className={classes.background} direction="column">
        {/* <Routes/> */}
        <UsersList/>
      </Grid>
    </AuthContextProvider>
  );
}

export default App;
