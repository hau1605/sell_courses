import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Product from "../Product/Product";
import Form from 'react-bootstrap/Form';
import CustomPagination from "../Pagination/Pagination";
import LinearProgress from '@mui/material/LinearProgress'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import { VariantType, useSnackbar } from 'notistack';
import { useDispatch,useSelector } from "react-redux";
import './ProductDetail.css'
import CoursesDataService from "../../services/CoursesDataService";
import { Button, FormGroup } from "react-bootstrap";
import { addToCart,viewedItem } from "../../features/cartSlice"

const ProductDetail = (props) =>{
    const { viewedItem } = useSelector((state) => state.Allcart)
    const { cart } = useSelector((state) => state.Allcart)
    const dispatch = useDispatch();
    const [level, setLevel] = useState('');
    const { enqueueSnackbar } = useSnackbar();
    const [product, setProducts] = useState([]);
    const {id} = useParams();
    const handleClickVariant = (variant) => () => {
        if (cart.filter(item=>item._id===product._id).length!==0)
          {variant='warning';
            enqueueSnackbar('Khóa học đã có trong giỏ hàng', { variant });
            return;
        }
        // variant could be success, error, warning, info, or default
        enqueueSnackbar('Thêm vào giỏ hàng thành công', { variant });
      };
    useEffect(() => {
        CoursesDataService.getCourseById(id)
            .then((res) => {
                console.log(res.data);
                console.log("ok");
                setProducts(res.data);
                

            })
            .catch(e => {
                console.log(e);
            });
        });
    useEffect(() => {
        setLevel(product.level)
        })
    let d=new Date(product.uploadDate);
        const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    return(<div>
         <Banner imgs={img} />
         {product &&
         <div className='top-body-product'>
             
            <Row className="text-link"><Link className="text-link-home" to='/'>Trang chủ</Link>/
            <Link className="text-link-loai-1" to={`/ProductList/${product.categories}`}>{product.categories}</Link>/
            <Link className="text-link-loai-2" >{product.name}</Link>
            </Row>
            <div className="mid-body-product">
            <Container className="left-column">
                <Row>
                     <h1 className="title-header-text">{product.name}</h1>
                     <p className="category-product">{product.categories}</p>
                     <div className="group-status">
                        <p className="update-date">Ngày đăng<br/>{d.toLocaleDateString("vi-VI")}</p>
                        <p className="level">
                            Cấp độ<br/>
                            {level === "normal" && <div className="level-normal" >Cơ bản</div>}
                            {level === "medium" && <div className="level-medium" >Mọi cấp độ</div>}
                            {level === "hard" && <div className="level-hard" >Nâng cao</div>}
                        </p>
                        <p className="number-student">
                            Học Viên<br/>{product.numberOfStudent}
                        </p>
                        <p className="language">
                            Ngôn Ngữ<br/>Tiếng Việt
                        </p>
                     </div>
                     <Image className="product-poster" src={product.poster}/>
                </Row>
            </Container>
        
                <Container className="top-right-column">
                    <h2 className="cost-head">GIÁ TIỀN KHÓA HỌC</h2>
                    <p className="product-cost">{product.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })} </p><br/>
                    <p className="product-cost-sales">{Math.ceil(product.cost * 1.3).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                        <Button className="product-cart-button"  onClick={() => {dispatch(addToCart(product))}}>Add to Cart</Button>
                </Container>
                <Container className="bot-right-column">
                    <h2 className="product-des">MÔ TẢ KHÓA HỌC</h2>
                    <p>{product.description}</p>
                </Container>
            </div>
            <div className="bot-body-product">
                <Container className="youll-learn">
                    <h2 className="learn-title">CHI TIẾT KHÓA HỌC</h2>
                    <li>{product.whatYoullLearn}</li>
                </Container>

            </div>
         </div>
        }
         <>
         {viewedItem===0?null:<div className="ProductList-ViewedItem">
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
                     {viewedItem.map((item)=>
                         <SwiperSlide>
                             <Product product={item}/>
                         </SwiperSlide>
                     )}
                     </Swiper>
             </div>}
         </>
    </div>);
}
export default ProductDetail;