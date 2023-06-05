import React from 'react';

function VideoDes({ course, video }) {
    return (<>
        {(!course || !video) ? 
        <div>Mô tả không khả dụng</div> : 
        <><h3 className='name'>{video.title}</h3>
        {/* <h6 className='cost'>Giá: <span className='text-price'>{course.course_price} ₫</span></h6> */}
        <p>{video.lesson_note}</p></>}
    </>);
  }

  export default VideoDes;