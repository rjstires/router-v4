import React, { Component } from 'react';
import { connect } from 'react-redux'

import { push } from 'react-router-redux';

class NodeBalancersFeature extends Component {
    state = {}
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.props.goTo('/volumes');
    }
    render() {
        return (
            <div>
                <h1>Node Balancers</h1>
                <button onClick={this.handleClick}>Here</button>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        goTo: (destination) => {
            dispatch(push(destination));
        }
    }
};
export default connect(null, mapDispatchToProps)(NodeBalancersFeature);