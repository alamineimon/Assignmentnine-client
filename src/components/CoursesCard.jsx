import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import './Single.css'

const CoursesCard  = () => {

    const singledData = useLoaderData()

    return (
      <Card className="singlee">
        <div>
          <Card.Img variant="top" className="p-4" src={singledData.img} />
        </div>
        <div>
          <Card.Body>
            <h4>{singledData.name}</h4>
            <p>Published: {singledData.date}</p>
            <div className="d-flex  mb-4 justify-content-betweeen align-items-center"></div>
            <p>{singledData.describe}</p>
            <div className="singlee-btnn">
              <Button variant="primary">Download PDF</Button>
              <Link to={`/userAccess/${singledData.id}`}>
                <Button variant="primary">Get Premium</Button>
              </Link>
            </div>
          </Card.Body>
        </div>
      </Card>
    );
}

export default CoursesCard;