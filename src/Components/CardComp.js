import React from 'react';
import Card from 'react-bootstrap/Card';


class Citycard extends React.Component {
    render() {
        return (
            <>
                <Card style={{ width: '100%' }}>
                <Card.Img variant="top" src={this.props.imgSrc} />
                <Card.Body>
                    <Card.Title>{this.props.locName}</Card.Title>
                    <Card.Text>{this.props.Text}</Card.Text>
                </Card.Body>
                </Card>
            </>
        );
    }
}

export default Citycard;