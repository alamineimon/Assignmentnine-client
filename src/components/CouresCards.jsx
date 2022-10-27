import React from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';


function CouresCards({item}) {
   return (
     <Card>
       <Card.Img variant="top" className="p-4" src={item.img} />
       <Card.Body>
         <h4>{item.name}</h4>
         <p>Published: {item.date}</p>
         <div className="d-flex  mb-4 justify-content-betweeen align-items-center"></div>
         <p>{item.describe}</p>
        <Link to={`/allproduct/${item.id}`}>
           <Button variant="primary">Read More</Button>
         </Link>
       </Card.Body>
     </Card>
   );
}

export default CouresCards;