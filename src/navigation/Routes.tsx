import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


const UsersList = React.lazy(() => import('../modules/UsersList/UsersList'));
const Authentication = React.lazy(() => import('../modules/authetication/Authentication'))

const Routes = () => {
    return (
        <BrowserRouter >
            <React.Suspense fallback={() => (<div>Loading...</div>)}>
                <Switch>
                    <Route path="/" component={Authentication} />
                    <Route path="/users-list" component={UsersList} />
                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}

export default Routes;
