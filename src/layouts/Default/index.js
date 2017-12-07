import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from '../../components/Navigation';
import ContextNavigation from '../../components/ContextNavigation'

const DefaultLayout = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={matchProps => (
            <div className="DefaultLayout">
                <Navigation />
                <ContextNavigation />
                <Component {...matchProps} />
                <div className="Footer">Footer</div>
            </div>
        )} />
    )
};

export default DefaultLayout;