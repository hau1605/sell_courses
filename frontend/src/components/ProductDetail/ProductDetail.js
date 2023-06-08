import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Product from "../Product/Product";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import { VariantType, useSnackbar } from 'notistack';
import { useDispatch, useSelector } from "react-redux";
import './ProductDetail.css'
import CoursesDataService from "../../services/CoursesDataService";
import BillingDataService from "../../services/BillingDataService";
import { Button, FormGroup } from "react-bootstrap";
import { addToCart, viewedItem } from "../../features/cartSlice"

const ProductDetail = (props) => {
    let d = new Date;
    const { viewedItem } = useSelector((state) => state.Allcart)
    const { cart } = useSelector((state) => state.Allcart)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch();
    const [level, setLevel] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [product, setProducts] = useState(null);
    const { id } = useParams();
    
    const handleClickAdd=()=>{
        BillingDataService.getBilling(user.email)
        .then((data)=>{
          console.log('tytjtjy',data.data)
          let variant
       if (data.data.filter(item=>item.course_id===product._id).length===0&&cart.filter(item=>item._id===product._id).length===0)
        {   
          variant='success';
          enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant });
          dispatch(addToCart(product))
        }
       else if (data.data.filter(item=>item.course_id===product._id).length!==0){
        variant='warning';
        enqueueSnackbar('Khóa học này đã được thanh toán!', { variant });
      }else{
        variant='warning';
        enqueueSnackbar('Khóa học đã có trong giỏ hàng!', { variant });
      }
       })
    
      }
    useEffect(() => {
        CoursesDataService.getCourseById(id)
            .then((res) => {
                console.log(res.data);
                console.log("ok");
                setProducts(res.data);
                setLevel(res.data.level)
                d = new Date(res.data.uploadDate);
            })
            .catch(e => {
                console.log(e);
            });
    });

    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    return (<div>
        <Banner imgs={img} />
        {product &&
            <div className='top-body-product'>
                <Container style={{ marginTop: '14px' }}>
                    <Row className="text-link"><Link className="text-link-home" to='/'>Trang chủ</Link>/
                        <Link className="text-link-loai-1" to={`/ProductList/${product.categories}`}>{product.categories}</Link>/
                        <Link className="text-link-loai-2" >{product.name}</Link>
                    </Row>
                    <Row>
                        <h1 className="title-header-text">{product.name}</h1>
                        <p className="category-product">{product.categories}</p>
                    </Row>
                    <Row style={{fontSize:'16px'}} >
                        <Col md='7' xs='12'>
                        <Row>
                        <Col>
                            <p>Ngày đăng<br />{d.toLocaleDateString("vi-VI")}</p>
                        </Col>
                        <Col>
                            <p>
                                Cấp độ<br />
                                {level === "normal" && <div className="level-normal" >Cơ bản</div>}
                                {level === "medium" && <div className="level-medium" >Mọi cấp độ</div>}
                                {level === "hard" && <div className="level-hard" >Nâng cao</div>}
                            </p>
                        </Col>
                        <Col>
                            <p >
                                Học Viên<br />Đang cập nhật
                            </p>
                        </Col>
                        <Col>
                            <p >
                                Ngôn Ngữ<br />Tiếng Việt
                            </p>
                        </Col>
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs='12' lg='8'>
                            <Image className="product-poster" src={product.poster} />
                        </Col>
                        <Col xs='12' lg='4' className="product-course-price" >
                            <h2 className="cost-head">GIÁ TIỀN KHÓA HỌC</h2>
                            <p className="product-cost">{product.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })} </p><br />
                            <p className="product-cost-sales">{Math.ceil(product.cost * 1.3).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                <Button className="product-cart-button" onClick={handleClickAdd}>Thêm vào giỏ hàng</Button>
                            <h2 className="product-des">MÔ TẢ KHÓA HỌC</h2>
                            <p style={{ fontSize: '16px' }}>{product.description}</p>
                        </Col>
                    </Row>
                    <Row>
                        <div className="bot-body-product">
                            <Container className="youll-learn">
                                <h2 className="learn-title">CHI TIẾT KHÓA HỌC</h2>
                                {product.whatYoullLearn.map((item) => <li>{item}</li>)}
                            </Container>
                        </div>
                    </Row>
                </Container>
            </div>
        }
        <>
            {viewedItem === 0 ? null : <div className="ProductList-ViewedItem">
                <div className='line-box'></div>
                <h2 className='header-text'>KHÓA HỌC BẠN ĐÃ XEM</h2>
                <Swiper
                    scrollbar={{
                        hide: false,
                    }}
                    modules={[Scrollbar]}
                    slidesPerView={4}
                    className="ProductList-mySwiper"
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 35
                            }, 300: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            }, 600: {
                                slidesPerView: 3,
                                spaceBetween: 15
                            }, 951: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }
                    }
                >
                    {viewedItem.map((item) =>
                        <SwiperSlide>
                            <Product product={item} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>}
        </>
    </div>);
}
export default ProductDetail;