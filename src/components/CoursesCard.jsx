import React from 'react';
import { Button, Card } from 'react-bootstrap';

const CoursesCard  = (item) => {
    return (
      <Card>
        <Card.Img variant="top" className="p-4" src={item.img} />
        <Card.Body>
          <h4>{item.name}</h4>
          <p>Published: {item.date}</p>
          <div className="d-flex  mb-4 justify-content-betweeen align-items-center"></div>
          <p>{item.describe}</p>
          <Button variant="primary">Rrad More</Button>
          <Button variant="primary">Rrad More</Button>
        </Card.Body>
      </Card>
    );
}

export default CoursesCard;