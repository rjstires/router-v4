import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

const LinodesContentMenu = (props) => {
    return (
        <div>
            <Link to="/stackscripts">StackScripts</Link>
            <Link to="/images">Images</Link>
            <Link to="/volumes">Volumes</Link>
        </div>
    );
};

class ContextNavigation extends Component {
    state = {  }
    render() {
        return (
            <Switch>
                <Route path="/linodes" component={LinodesContentMenu} />
                <Route path="/images" component={LinodesContentMenu} />
                <Route path="/stackscripts" component={LinodesContentMenu} />
                <Route path="/volumes" component={LinodesContentMenu} />
            </Switch>
        );
    }
}

export default ContextNavigation;