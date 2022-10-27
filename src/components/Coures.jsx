import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CouresCards from './CouresCards';
import './CouresCards.css'


const Coures = () => {
  const couresData = useLoaderData();
  
    return (
      <div >
        <h2>Total Courses: {couresData.length}</h2>

        <div className= 'createlayout' >
          {couresData.map((item) => (
            <CouresCards
              key = {item.id}
              item = {item}
            ></CouresCards>
          ))}
        </div>
      </div>
    );
}

export default Coures;