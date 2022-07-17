import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Col, Card } from 'react-bootstrap';

import { getFile } from '../../tools/fileStorage';

const EventCard = props => {
    const [image, setImage] = useState('');

    useEffect(() => {
        getFile(props.event.imageSrc)
            .then(url => setImage(url));
    }, [props.event])

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image}/>
                <Card.Header>{props.event.date}</Card.Header>
                <Card.Body>
                    <Card.Title>
                        {props.event.title}
                    </Card.Title>
                    <Card.Text>{props.event.description}</Card.Text>
                </Card.Body>
                <Card.Footer>Invited: {props.event.usersCount}</Card.Footer>
            </Card>
        </Col>
    )
}

export default connect()(EventCard);