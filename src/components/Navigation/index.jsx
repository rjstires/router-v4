import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    state = {  }
    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/linodes">Linodes</Link>
                <Link to="/nodebalancers">Node Balancers</Link>
                <Link to="/domains">Domains</Link>
                <Link to="/support">Support</Link>
            </div>
        );
    }
}

export default Navigation;
