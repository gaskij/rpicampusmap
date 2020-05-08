import * as React from 'react';
import { ReactElement } from 'react';
import { ListGroup, Jumbotron } from 'react-bootstrap';

const NotFoundPage = (): ReactElement => {
    return (
        <Jumbotron>
            <h1>We couldn't find the page you were looking for 😢</h1>
            <p>The URL may have been mistyped or the page may have moved:</p>
            <ListGroup>
                <ListGroup.Item>Please try navigating back to the <a href="">homepage</a> to find what you are looking for.</ListGroup.Item>
                <ListGroup.Item>Alternatively you can <a href="/contact">contact us here.</a></ListGroup.Item>
            </ListGroup>
        </Jumbotron>
    );
};

export default NotFoundPage;