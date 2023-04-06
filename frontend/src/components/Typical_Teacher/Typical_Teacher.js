import React from 'react';
import "./Typical_Teacher.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import image_teacher_1 from './image_teacher_1.webp'
import image_teacher_2 from './image_teacher_2.webp'
import image_teacher_3 from './image_teacher_3.webp'
import image_teacher_4 from './image_teacher_4.webp'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import "swiper/css/free-mode";
const Typical_Teacher = () => {
    
    const titleStyle = {
        textAlign: 'left',  
      };
    
    const items = [
        {
          id: 1,
          image: image_teacher_1,
          title: 'Mục 1'
        },
        {
          id: 2,
          image: image_teacher_2,
          title: 'Mục 2'
        },
        {
          id: 3,
          image: image_teacher_3,
          title: 'Mục 3'
        },
        {
            id: 4,
            image: image_teacher_4,
            title: 'Mục 4'
          },
          {
            id: 5,
            image: image_teacher_2,
            title: 'Mục 5'
          },
      ];
      function Item({ item }) {
        return (
          <div>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
          </div>
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
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside
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
                items: 2,
                partialVisibilityGutter: 30
              }
            }}
            
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </Carousel>
        );
      }
      
        return (
          <div>
            <h1 style={titleStyle} >Giáo Viên Tiêu Biểu</h1>
            <MultiCarousel />
          </div>
        );
      
      

}
export default Typical_Teacher;