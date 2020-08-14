import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersList from '../modules/UsersList/UsersList';
import SignIn from '../modules/authetication/SignIn/SignIn';
import SignUp from '../modules/authetication/SignUp/SignUp';

const Routes = () => {
    return (
        <BrowserRouter >
            
                <Switch>                    
                    <Route path="/users-list"><UsersList/></Route>                    
                    <Route path="/signup" component={SignUp} />
                    <Route exact path="/" component={SignIn} />
                </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;
