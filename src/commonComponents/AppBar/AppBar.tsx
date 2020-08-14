import React from 'react';

import { AppBar, Toolbar, Button } from '@material-ui/core';

import { Link } from 'react-router-dom';

const TopNavigation: React.FC = () => {

    return (
        <AppBar position="relative">
            <Toolbar>
                <Link to="/"><Button color="secondary">Signin</Button></Link>
                <Link to="/signup"><Button color="secondary">Signup</Button></Link>
            </Toolbar>
        </AppBar>
    )

}

export default TopNavigation;