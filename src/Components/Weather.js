import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
    render() {
        return (
            <>
                <h2>Weather</h2>
                <ListGroup>
                    <ListGroup.Item>`Low of , high of , with , on ,`</ListGroup.Item>
                </ListGroup>
            </>
        );
    }
}

export default Weather;