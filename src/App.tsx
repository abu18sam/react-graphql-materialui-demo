import React from 'react';
// import logo from './logo.svg';
import './App.css';
import SignUp from './modules/authetication/SignUp/SignUp';
// import UserList from './modules/UsersList/UsersList';
// import SignIn from './modules/authetication/SignIn/SignIn';

import { makeStyles, Grid } from '@material-ui/core';
import AuthContextProvider from './contexts/AuthContext';


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
        {/* <SignIn /> */}
        <SignUp />
        {/* <UserList /> */}
      </Grid>
    </AuthContextProvider>
  );
}

export default App;
