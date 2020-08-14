import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TopNavigation from '../../commonComponents/AppBar/AppBar';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

const Authentication = (props: any) => {
    return (
        <React.Fragment>
            <TopNavigation />
            <Switch>
                <Route exact path="/signup" {...props} ><SignUp {...props} /></Route>
                <Route exact path="/signin" {...props} component={SignIn} />
            </Switch>
        </React.Fragment>
    )
};

export default Authentication;