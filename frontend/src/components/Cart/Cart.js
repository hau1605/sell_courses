import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FaTrashAlt} from 'react-icons/fa'
import './Cart.css'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { increaseQuantity,decreaseQuantity, getTotal,removeItem } from "../../features/cartSlice";
const Cart = () => {
    const {cart,totalQuantity,totalPrice}=useSelector((state)=>state.Allcart)
    const dispatch=useDispatch();
    
    useEffect(()=>{dispatch(getTotal())},[cart])
    return (<div style={{ margin:'0', display: 'flex', justifyContent: 'center',backgroundColor:'white'}}>
        <Container className="cart-container">
            <div style={{padding:'40px 50px 50px 50px', boxShadow:'0px 4px 30px rgba(19,28,25,0.1)',borderRadius:'25px'}}>
            <Col>
                <Row className="cart-header">
                    <Col xs='2'>
                        <p className="table-text">Hình ảnh</p>
                    </Col>
                    <Col xs='3'>
                        <p className="table-text">Tên sản phẩm</p>
                    </Col>
                    <Col xs='2'>
                        <p className="table-text">Đơn giá</p>
                    </Col>
                    <Col>
                        <p className="table-text">Số lượng</p>
                    </Col>
                    <Col>
                        <p className="table-text">Thành tiền</p>
                    </Col>
                    <Col xs='1'>
                        <p className="table-text">Xóa</p>
                    </Col>
                </Row>
                {cart.map((item,key)=><Row className="cart-item">
                    <Col xs='2' style={{padding:'0 12px 0 0'}}>
                        <img src={item.poster} style={{ width: '100%',height:'90px' }} />
                    </Col>
                    <Col xs='3'>
                        <p className="table-text">{item.name}</p>
                    </Col>
                    <Col xs='2'>
                        <p className="table-text cart-item-price">{item.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent:'center', alignItems:'center'}}>
                        <Button className='tang-giam' size="sm" onClick={()=>dispatch(decreaseQuantity(key))}>-</Button >
                        <p className="table-text cart-item-quatity">{item.quantity}</p>
                        <Button className='tang-giam' size="sm" onClick={()=>dispatch(increaseQuantity(key))}>+</Button>
                    </Col>
                    <Col>
                        <p className="table-text cart-item-price">{(item.cost*item.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                    </Col>
                    <Col xs='1'><FaTrashAlt className="cart-item-trash-icon" onClick={()=>{dispatch(removeItem(item))}}/>
                    </Col>
                </Row>)
                }
                <Row><p>{totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND'}) }</p></Row>
            </Col>
            </div>

        </Container>



    </div>);

}
export default Cart;