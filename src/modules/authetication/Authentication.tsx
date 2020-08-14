import React from 'react';

import { Route, Switch } from 'react-router-dom';
import TopNavigation from '../../commonComponents/AppBar/AppBar';

const Signin = React.lazy(() => import('./SignIn/SignIn'));
const Signup = React.lazy(() => import('./SignUp/SignUp'));

const Authentication = (props: any) => {

    return (
        <div>            
            
            <TopNavigation />
                <Switch>
                    <Route exact path="/" {...props} component={Signin} />
                    <Route path="/signup" {...props} component={Signup} />
                </Switch>
            
        </div>
    )
};

export default Authentication;