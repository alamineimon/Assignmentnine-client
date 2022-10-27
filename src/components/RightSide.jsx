import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RightSide = (props) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
      fetch("https://server-site-alamineimon.vercel.app/allproduct")
        .then((res) => res.json())
        .then((data) => setCourses(data));
    }, []);
    return (
      <div>
        {courses.map((course) => (
          <ListGroup key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <Button variant="light" className="mb-2 list-unstyled">
                {course.name}
              </Button>
            </Link>
            </ListGroup>
        ))}
      </div>
    );
}

export default RightSide;