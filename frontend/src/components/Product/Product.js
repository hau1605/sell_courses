import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import './Product.css';
import { Link } from "react-router-dom";
const Product = (props) => {
  const levels = "normal";
  const [level, setLevel] = useState(levels);
  return (
    <div>
      
      <Link to='/ProductDetail' className="link">
        <Card className="Card">
          <Card.Img className="card-img " variant="top" src={props.product.poster} />
          <Card.Body style={{ textAlign: 'left', padding: '0' }}>
            {level === "normal" && <div className="btn-level-normal text-mb-10" >Cơ bản</div>}
            {level === "medium" && <div className="btn-level-medium text-mb-10" >Mọi cấp độ</div>}
            {level === "hard" && <div className="btn-level-hard text-mb-10" >Nâng cao</div>}
            <Card.Title className="text-tittle">{props.product.name}</Card.Title>
            <Card.Text className="text-des">
              Công nghệ thông tin
            </Card.Text>
            <Card.Text className="text-price">
              {props.product.cost}
            </Card.Text>
          </Card.Body>
        </Card></Link>
    </div>
  )
}
export default Product;