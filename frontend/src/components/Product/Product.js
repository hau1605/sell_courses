import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import './Product.css';
import { Link, Route } from "react-router-dom";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { FaCartPlus } from 'react-icons/fa';
import { addToCart } from "../../features/cartSlice"
import {FaEye}  from 'react-icons/fa';
const Product = (props) => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState('');

  useEffect(() => {
    setLevel(props.product.level)
  })

  return (
    <div>


      <Card className="Card">
        <Link to='/ProductDetail' className="link"><Card.Img className="card-img" variant="top" src={props.product.poster} /></Link>
        <Card.Body style={{ textAlign: 'left', padding: '0' }}>
          {level === "normal" && <div className="btn-level-normal text-mb-10" >Cơ bản</div>}
          {level === "medium" && <div className="btn-level-medium text-mb-10" >Mọi cấp độ</div>}
          {level === "hard" && <div className="btn-level-hard text-mb-10" >Nâng cao</div>}
          <Link to='/ProductDetail' className="link"><Card.Title className="text-tittle">{props.product.name}</Card.Title></Link>
          <Card.Text className="text-des">
            Công nghệ thông tin
          </Card.Text>
          <Card.Text >
            <p className="text-price">{props.product.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })} </p>

            <p className="text-price-sales">{Math.ceil(props.product.cost * 1.3).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
          </Card.Text>
          <Row>
            <Col style={{display:'flex', justifyContent:'left'}}>
                  <p>{props.product.numberOfView}</p>
                <FaEye style={{margin:'3px 0 0 6px', width:'14px', height:'14px'}}/>
            </Col>
            <Col style={{display:'flex', justifyContent:'right'}}>
              <FaCartPlus style={{margin:'0 20px 0 0', width:'30px', height:'30px', color:'#00BC86',cursor:'pointer'}} onClick={() => dispatch(addToCart(props.product))} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
export default Product;