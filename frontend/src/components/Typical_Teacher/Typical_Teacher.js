import React, { useState, useEffect } from 'react';
import TeacherDataService from "../../services/teachers";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Typical_Teacher.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import "swiper/css/free-mode";

const Typical_Teacher = () => {
  const [lecturers, setTeacher] = useState([]);

  useEffect(() => {
    TeacherDataService.getAll()
    .then(response => {
        console.log(response.data);
        console.log("ok");
        setTeacher(response.data.data);
    })
    .catch(e => {
        console.log(e);
    });
  }, []);

  const titleStyle = {
    textAlign: 'left',  
  };
  const Item = ({ lecturer }) => {
    return (
      <Col>
        <Card style={{ width: '18rem'}}>
          <Link to={"/lecturers/"+lecturer._id}>
            <Card.Img src={lecturer.avatar}/>
            <Card.Body>
              <Card.Title>{lecturer.name}</Card.Title>
              <Card.Text>{lecturer.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    );
  }
  const LecturerList = () => {
    return (
      <Container>
        <Row>
          { lecturers.map((lecturer) => (
            <Item key={lecturer._id} lecturer={lecturer} />
          ))}
        </Row>
      </Container>
    );
  }
  function MultiCarousel() {
    return (
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable={false}
        focusOnSelect={false}
        infinite={false}
        itemClass=""
        keyBoardControl
        minimumTouchDrag={40}
        renderButtonGroupOutside
        renderArrowsWhenDisabled={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}      
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        <LecturerList/>  
      </Carousel>
    );
      }
      
  return (
    <div>
      <h1 style={titleStyle} >Giảng Viên Tiêu Biểu</h1>
      <MultiCarousel />
    </div>
  );
}
export default Typical_Teacher;