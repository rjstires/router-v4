import React from 'react';

const FeatureLoadingComponent = ({ error, pastDelay, timeout }) => {
    if (error) {
        return <h2>Oh no an error!</h2>;
    }

    if (timeout) {
        return <h2>Oh no it timed out!</h2>;
    }

    if (pastDelay) {
        return <small>Loading....</small>
    }

    return null;
};

export default FeatureLoadingComponent;