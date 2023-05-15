import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function CourseList() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'ReactJS Fundamentals', price: 1 },
    { id: 2, title: 'Node.js for Beginners', price: 2 },
    { id: 3, title: 'MongoDB Essentials', price: 3 },
  ]);

  return (
    <div>
      <h2>My Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/my-course/${course.id}`}>{course.title}</Link>
            <div>Price: {course.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseList;
