import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const SinggleCard = () => {
    const { user } = useContext(AuthContext);
    const pageIinfo = useLoaderData()

   

    return (
      <div >
        <h1 className="text-center mt-5">
          Wellcome to my Website <br />
          {user?.displayName}
        </h1>
        <Card.Body>
          <h4>{pageIinfo.name}</h4>
          <p>Published: {pageIinfo.date}</p>
          <div className="d-flex  mb-4 justify-content-betweeen align-items-center"></div>
          <p>{pageIinfo.describe}</p>
        </Card.Body>
      </div>
    );
}

export default SinggleCard;