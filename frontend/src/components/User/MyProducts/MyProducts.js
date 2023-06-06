import React, { useState, useEffect } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FullPageLoader from "../../FullPageLoader/FullPageLoader";
import { useSnackbar } from 'notistack';
import axios from 'axios';
import User from "../User";
import Product from "../../Product/Product";
import "./MyProducts.css";

const MyProducts = () => {
    const { cart } = useSelector((state) => state.Allcart);
    const email = useSelector((state) => state.user.email);
    const [billings, setBillings] = useState([]);

    const fetchDataCourseBilling = async () => {
        try {
            const res = await axios.get(`http://localhost:8000/api/billings/${email}/data`);
            console.log('res.status: ', res.status)
            if(res.status === 200) {
                console.log("Fetch Data Course Billing thành công: ", res.data);
                setBillings(res.data)
            }
            else {
                console.log("Fetch Data Course Billing thất bại")
            }
        }
        catch (err) {
            console.error(err);
        }
    } 

    useEffect(() => { 
        fetchDataCourseBilling();
     }, [])

    return (
        <Container className="container-user">
            {/* {isLoading && <FullPageLoader/>} */}
            <Col className="container-user_navbar" md={3}>
                <User page="user-mycourse"></User>
            </Col>
            <Col className="div_my-product">
                <div className="container-form_user-mycourse">
                    <h2>Khóa học của tôi</h2>
                    <div style={{ padding: '40px 30px 40px 30px', boxShadow: '0px 4px 30px rgba(19,28,25,0.1)', borderRadius: '25px' }}>
                        <Col className="cart-container">
                            <Row className="cart-header">
                                <Col xs='3' className="col_for-image">
                                    <p className="table-text cart-header_image">Hình ảnh</p>
                                </Col>
                                <Col xs='6' className="col_for-name">
                                    <p className="table-text cart-header_name">Tên sản phẩm</p>
                                </Col>
                                
                                <Col xs='3' className="col_for-cost">
                                    <p className="table-text cart-header_cost">Giá tiền</p>
                                </Col>
                            </Row>
                            {billings.map((item, key) => 
                            <Link to={`/user/my-course/${item.course_id}`} style={{ textDecoration:'none' }} state={{course: item}}>
                                <Row className="cart-item" style={{display:'flex', justifyContent:'center',}}>
                                    <Col xs='3' className="col_for-image" style={{ padding: '0 12px 0 0' }}>
                                        <img alt={item.course_name} src={item.course_pic} className="cart-item_image"/>
                                    </Col>
                                    <Col xs='6' className="col_for-name" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <p style={{textAlign:'center'}} className="table-text cart-item_name">
                                            {item.course_name}
                                        </p>
                                    </Col>
                                    <Col xs='3' className="col_for-cost" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <p className="table-text cart-item-price cart-item-cost">
                                            {/* {item.course_price} */}
                                            {item.course_price.toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                                        </p>
                                    </Col>
                                </Row>
                            </Link>
                            )}
                        </Col>
                    </div>
                </div>
            </Col>
      </Container>
        
    )
}

export default MyProducts;
