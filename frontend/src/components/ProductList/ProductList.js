import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../Product/Product";
import Form from 'react-bootstrap/Form';
import CustomPagination from "../Pagination/Pagination";
import LinearProgress from '@mui/material/LinearProgress'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';

import './ProductList.css'
import CoursesDataService from "../../services/CoursesDataService";
import { FormGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
const ProductList = (props) => {
    const { viewedItem } = useSelector((state) => state.Allcart)

    const navigate = useNavigate();
    const { categorie } = useParams();
    const [Products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [priceUnder200, setPricesUnder200] = useState(false);
    const [priceBT200300, setPricesBT200300] = useState(false);
    const [priceBT300400, setPricesBT300400] = useState(false);
    const [priceBT400500, setPricesBT400500] = useState(false);
    const [priceAbove500, setPricesAbove500] = useState(false);
    const [level, setLevel] = useState(false);
    const [levelNormal, setlevelNormal] = useState(false);
    const [levelMedium, setlevelMedium] = useState(false);
    const [levelHard, setlevelHard] = useState(false);
    const [filterprice, setfilterprice] = useState(false)
    const [sort, setSort] = useState('asc')
    const [categories, setCategories] = useState(categorie)
    const [isLoading,setisLoading]=useState(true)
    const handlePageChange = async (pageNumber) => {
        // Xử lý khi người dùng chọn trang mới
        setCurrentPage(pageNumber);

    }
    const onchangeSortPrice = e => {
        const _sort = e.target.value
        setSort(_sort);
    }

    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    const [openListcourse, setopenListcourse] = useState(false);
    const [opensubCourse, setopenSubcourse] = useState(false);
    useEffect(() => {
        setisLoading(true)
        let filtercategories = ''
        if (categories === undefined) { filtercategories = 'TẤT CẢ KHÓA HỌC' }
        console.log('cate', categories)

        let filterstring = ''
        if (priceUnder200)
            filterstring = filterstring.concat('0-200000,')
        if (priceBT200300)
            filterstring = filterstring + '200000-300000,'
        if (priceBT300400)
            filterstring = filterstring.concat('300000-400000,')
        if (priceBT400500)
            filterstring = filterstring.concat('400000-500000,')
        if (priceAbove500)
            filterstring = filterstring.concat('500000-10000000')
        let filterlevel = ''
        if (levelNormal) filterlevel = filterlevel.concat('normal,')
        if (levelHard) filterlevel = filterlevel.concat('hard,')
        if (levelMedium) filterlevel = filterlevel.concat('medium')
        if (categorie !== undefined) filtercategories = categorie
        if (filtercategories === 'TẤT CẢ KHÓA HỌC') filtercategories = ''
        console.log(currentPage)
        console.log(currentPage, sort, filterlevel)
        CoursesDataService.getAll(currentPage, filterstring, sort, filterlevel, filtercategories)
            .then(response => {
                console.log(response.data);
                console.log("ok");
                setProducts(response.data.products);
                setPageCount(response.data.totalPages)
                setisLoading(false)

            })
            .catch(e => {
                console.log(e);
            });
        // if (filterstring) setFilter({price:filterstring});
        console.log(filterstring)
    }, [currentPage, filterprice, sort, level, categories])
    return (<div>
        <Banner imgs={img} />
        <div className='body'>
            <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Danh sách khóa học</span></p>
            <Row style={{ padding: '15px 0px', margin: '0 -2px' }}>
                <Col xs={12} sm='6' style={{ padding: '0px 8px' }}>
                    <img className="img-banner" style={{ width: '100%', borderRadius: '10px', margin: '10px 0 0 0' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_1.png?1676281841878' />
                </Col>
                <Col xs={12} sm='6' style={{ padding: '0px 8px', margin: '10px 0 0 0' }}>
                    <img className="img-banner" style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_collection_2.png?1676281841878' />
                </Col>
            </Row>
            <div style={{ margin: '20px 0' }}>
                <Row >
                    <Col xs='12' md='3' style={{ position: 'relative', padding: '0 20px 0 20px' }} >
                        <p className="header-text-loai">{categories}</p>
                        <div className={`sb-subcourse`}>
                            <p className="header-text-sub" onClick={() => setopenSubcourse(!opensubCourse)}>KHÓA HỌC</p>
                            <ul className={`course-nav `}>
                                <li><Link to='/' className='text-course-nav'>Trang chủ</Link></li>
                                <li style={{ position: 'relative' }} className='text-course-nav' onClick={() => setopenListcourse(!openListcourse)}>Danh sách khóa học
                                    <div>
                                        <ul className={`list-course ${openListcourse ? 'active' : 'inactive'}`}>
                                            <li onClick={() => { setCategories('TẤT CẢ KHÓA HỌC'); navigate("/ProductList") }}>
                                                Tất cả
                                            </li>
                                            <li onClick={() => { setCategories('Marketing'); setCurrentPage(1); navigate("/ProductList/Marketing") }}>
                                                Marketing
                                            </li>
                                            <li onClick={() => { setCategories('Công nghệ thông tin'); setCurrentPage(1); navigate("/ProductList/Công nghệ thông tin") }}>
                                                Công nghệ thông tin
                                            </li>
                                            <li onClick={() => { setCategories('Thiết kế đồ họa'); setCurrentPage(1); navigate("/ProductList/Thiết kế đồ họa") }}>
                                                Thiết kế đồ họa
                                            </li>
                                            <li onClick={() => { setCategories('Kỹ năng mềm'); setCurrentPage(1); navigate("/ProductList/Kỹ năng mềm") }}>
                                                Kỹ năng mềm
                                            </li><li onClick={() => { setCategories('Âm nhạc'); setCurrentPage(1); navigate("/ProductList/Âm nhạc") }}>
                                                Âm nhạc
                                            </li>
                                            <li onClick={() => { setCategories('Sales, bán hàng'); setCurrentPage(1); navigate("/ProductList/Sales, bán hàng") }}>
                                                Sales, bán hàng
                                            </li>
                                            <li onClick={() => { setCategories('Kỹ năng ngoại ngữ'); setCurrentPage(1); navigate("/ProductList/Kỹ năng ngoại ngữ") }}>
                                                Kỹ năng ngoại ngữ
                                            </li>
                                            <li onClick={() => { setCategories('Tin học văn phòng'); setCurrentPage(1); navigate("/ProductList/Tin học văn phòng") }}>
                                                Tin học văn phòng
                                            </li>
                                            <li onClick={() => { setCategories('Phát triển cá nhân'); setCurrentPage(1); navigate("/ProductList/Phát triển cá nhân") }}>
                                                Phát triển cá nhân
                                            </li>
                                            <li onClick={() => { setCategories('Gia đình'); setCurrentPage(1); navigate("/ProductList/Gia đình") }}>
                                                Gia đình
                                            </li>
                                            <li onClick={() => { setCategories('Sức khỏe, giới tính'); setCurrentPage(1); navigate("/ProductList/Sức khỏe, giới tính") }}>
                                                Sức khỏe, giới tính
                                            </li>
                                            <li onClick={() => { setCategories('Nhiếp ảnh, quay phim'); setCurrentPage(1); navigate("/ProductList/Nhiếp ảnh, quay phim") }}>
                                                Nhiếp ảnh, quay phim
                                            </li>

                                        </ul>
                                    </div>
                                    <img className={`arrow-icon ${openListcourse ? 'active' : 'inactive'}`} style={{ position: 'absolute' }} src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png" />
                                </li>

                                <li><Link className='text-course-nav'>Khóa học tiêu biểu</Link></li>
                                <li><Link className='text-course-nav'>Liên hệ</Link></li>
                                <li><Link className='text-course-nav'>Giới thiệu</Link></li>
                            </ul>
                        </div>
                        <Row>
                            <Col xs='5' md='12'>
                                <div className={`sb-level  ${opensubCourse ? 'activesubcourse' : 'inactivesubcourse'}`}>
                                    <p className="header-text-sub">TRÌNH ĐỘ</p>
                                    <Form onChange={() => setLevel(!level)}>
                                        <Form.Group className="mb-1" controlId="formBasicCheckboxNormal">
                                            <Form.Check onChange={() => { setlevelNormal(!levelNormal); setCurrentPage(1) }} type="checkbox" label="Cơ bản" />
                                        </Form.Group>
                                        <Form.Group className="mb-1" controlId="formBasicCheckboxMedium">
                                            <Form.Check onChange={() => { setlevelMedium(!levelMedium); setCurrentPage(1) }} type="checkbox" label="Mọi cấp độ" />
                                        </Form.Group>
                                        <Form.Group className="mb-1" controlId="formBasicCheckboxHard">
                                            <Form.Check onChange={() => { setlevelHard(!levelHard); setCurrentPage(1) }} type="checkbox" label="Nâng cao" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                            <Col>
                                <div xs='7' md='12'>
                                    <p className="header-text-sub">MỨC GIÁ</p>
                                    <Form onChange={() => { setfilterprice(!filterprice); setCurrentPage(1) }}>
                                        <Form.Group className="mb-1" controlId="formBasicCheckboxUnder200">
                                            <Form.Check type="checkbox" onChange={() => { setPricesUnder200(!priceUnder200) }} label="Giá dưới 200.000đ" />
                                        </Form.Group>
                                        <Form.Group className="mb-1" onChange={() => { setPricesBT200300(!priceBT200300) }} controlId="formBasicCheckboxBetween200300">
                                            <Form.Check type="checkbox" label="200.000đ - 300.000đ" />
                                        </Form.Group>
                                        <Form.Group className="mb-1" onChange={() => { setPricesBT300400(!priceBT300400) }} controlId="formBasicCheckboxBetween300400">
                                            <Form.Check type="checkbox" label="300.000đ - 400.000đ" />
                                        </Form.Group>
                                        <Form.Group className="mb-1" onChange={() => { setPricesBT400500(!priceBT400500) }} controlId="formBasicCheckboxBetween400500">
                                            <Form.Check type="checkbox" label="400.000đ - 500.000đ" />
                                        </Form.Group>
                                        <Form.Group className="mb-1" onChange={() => { setPricesAbove500(!priceAbove500) }} controlId="formBasicCheckboxUp500">
                                            <Form.Check type="checkbox" label="Giá trên 500.000đ" />
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                        <div className="sb-time">

                        </div>
                    </Col>
                    <Col dir="rlt" xs='12' md='9' style={{ padding: '0px 0 0 18px', margin: '0 0 0 0px' }}>
                        <Row >
                            <Col dir="rlt" style={{ display: 'flex', margin: '0 18px 0 0', justifyContent: 'right' }}>
                                <Form onChange={() => setCurrentPage(1)}>
                                    <FormGroup>
                                        <Form.Control as="select" onChange={onchangeSortPrice} aria-label="Default select example">
                                            <option value="asc">Sắp xếp</option>
                                            <option value="asc">Giá tăng dần</option>
                                            <option value="dsc">Giá giảm dần</option>
                                        </Form.Control>
                                    </FormGroup>
                                </Form>
                            </Col>
                            {Products.length === 0&&isLoading===true ? <div style={{paddingRight:"30px"}}><p>Đang tìm kiếm khóa học phù hợp</p><LinearProgress color="success"/></div>:null}
                            {Products.length !== 0&&isLoading===true ? (<div style={{paddingRight:"30px"}}><p>Đang tìm kiếm khóa học phù hợp</p><LinearProgress color="success"/></div>):<Row >
                                    {Products.map((item) => <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                        <Product product={item} />
                                    </Col>)}
                                    <CustomPagination className="pagination"
                            pageCount={pageCount}
                            currentPage={currentPage}
                            handlePageChange={handlePageChange}
                        />
                                </Row>}
                            {Products.length === 0&&isLoading===false ? <p>Không tìm thấy khóa học phù hợp</p>:null}

                            
                                

                            
                        </Row>

                        
                    </Col>
                </Row>
            </div>
            
        </div>
        <>
        {viewedItem===0?null:<div className="ProductList-ViewedItem">
                <div className='line-box'></div>
                    <h2 className='header-text '>KHÓA HỌC BẠN ĐÃ XEM</h2>
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
                                spaceBetween: 10
                            }, 200: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            }, 400: {
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
export default ProductList;