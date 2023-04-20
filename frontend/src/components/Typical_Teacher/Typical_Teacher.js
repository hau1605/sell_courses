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
import facebook_logo from './facebook-logo.png'
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

  const Item = ({ lecturer }) => {
    return (
      <Col>
        <Card className ='lec-card' style={{ width: 'auto', margin:'auto'} } >
          <Link to={"/lecturers/"+lecturer._id}>
            <Card.Img src={lecturer.avatar} className='lec-img'/>
            <Card.Body>
              <Card.Title className='lec-name'>{lecturer.name}</Card.Title>
              <Card.Text className='lec-descrip'>{lecturer.description}</Card.Text>
            </Card.Body>
          </Link>
        </Card>
      </Col>
    );
  }
  /*const LecturerList = () => {
    return (
      <Container>
        <Row>
          { lecturers.map((lecturer) => (
            <Item key={lecturer._id} lecturer={lecturer} />
          ))}
        </Row>
      </Container>
    );
  }*/
  
  function MultiCarousel() {
    return (
      <Carousel
        
        additionalTransfrom={0}
        arrows={true}
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
            items: 4,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            partialVisibilityGutter: 30
          }
        }}      
        sliderClass=""
        slidesToSlide={1}
        swipeable>
        { lecturers.map((lecturer) => (
            <Item key={lecturer._id} lecturer={lecturer} />
          ))} 
        
      </Carousel>
    );
      }
      
  return (
    <div className='dm-typical'>
      <div className='line-box'> </div>
      <Row>
        <Col xs='3'>
          <h2 className='header-text' >GIẢNG VIÊN TIÊU BIỂU</h2>
        </Col>
      </Row>
      <MultiCarousel />
    </div>
  );
}
export default Typical_Teacher;