import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import './Single.css'

const CoursesCard  = () => {

    const singledData = useLoaderData()

    return (
      <Card className='singlee'>
        <Card.Img variant="top" className="p-4" src={singledData.img} />
        <Card.Body>
          <h4>{singledData.name}</h4>
          <p>Published: {singledData.date}</p>
          <div className="d-flex  mb-4 justify-content-betweeen align-items-center"></div>
          <p>{singledData.describe}</p>
          <Button variant="primary">Download PDf</Button>
          <Button variant="primary">Rrad More</Button>
        </Card.Body>
      </Card>
    );
}

export default CoursesCard;