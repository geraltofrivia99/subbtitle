import React, { Suspense } from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

const Main = React.lazy(() => import('../pages/Main'));


export const Routes = () => (
    <Switch>
        <Route path="/:id">
            <Suspense fallback={<div>Loading...</div>}>
                <Main />
            </Suspense>
        </Route>
        {/* <Route path="/users">
            <Users />
        </Route>
        <Route path="/">
            <Home />
        </Route> */}
    </Switch>
);