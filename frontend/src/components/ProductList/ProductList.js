import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../Product/Product";
import Form from 'react-bootstrap/Form';
import CustomPagination from "../Pagination/Pagination";
import './ProductList.css'
import CoursesDataService from "../../services/CoursesDataService";
const ProductList = () => {
    const [Products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [priceUnder200, setPricesUnder200] = useState(false);
    const [priceBT200300, setPricesBT200300] = useState(false);
    const [priceBT300400, setPricesBT300400] = useState(false);
    const [priceBT400500, setPricesBT400500] = useState(false);
    const [priceAbove500, setPricesAbove500] = useState(false);
    const [filterprice, setfilterprice] = useState(false)
    const [filter, setFilter] = useState({})
    let filterstring = ''

    const handlePageChange = async (pageNumber) => {
        // Xử lý khi người dùng chọn trang mới
        setCurrentPage(pageNumber);
        
    }
    const changefilterprice = () => {

    }
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    const [openListcourse, setopenListcourse] = useState(false);
    const [opensubCourse, setopenSubcourse] = useState(false);
    useEffect(() => {
        let filterstring = ''
        if (priceUnder200)
            filterstring = filterstring.concat('0-200000,')
        if (priceBT200300)
            filterstring = filterstring+'200000-300000,'
        if (priceBT300400)
            filterstring = filterstring.concat('300000-400000,')
        if (priceBT400500)
            filterstring = filterstring.concat('400000-500000,')
        if (priceAbove500)
            filterstring = filterstring.concat('500000-10000000')
        console.log(currentPage)
        setFilter({currentPage: currentPage})
        console.log(currentPage,filter)

        CoursesDataService.getAll(currentPage,filterstring)
            .then(response => {
                console.log(response.data);
                console.log("ok");
                setProducts(response.data.products);
                setPageCount(response.data.totalPages)
            })
            .catch(e => {
                console.log(e);
            });

        // if (filterstring) setFilter({price:filterstring});
        console.log(filterstring)
    }, [currentPage,filterprice])
    return (<div>
        <Banner imgs={img} />
        <div className='body'>
            <p><Link className="text-link-home" to='/'>Trang chủ</Link>/<span className="text-link-loai">Tất cả sản phẩm</span></p>
            <Container>
                <Row style={{ padding: '15px 0px' }}>
                    <Col xs={6} style={{ padding: '0px 8px' }}>
                        <img className="img-banner" style={{ width: '100%', borderRadius: '10px', }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_featured_1.png?1676281841878' />
                    </Col>
                    <Col xs={6} style={{ padding: '0px 8px' }}>
                        <img className="img-banner" style={{ width: '100%', borderRadius: '10px' }} src='https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/banner_collection_2.png?1676281841878' />
                    </Col>
                </Row>
                <div style={{ margin: '20px 0' }}>
                    <Row >
                        <Col xs='3' style={{ position: 'relative' }}>
                            <p className="header-text-loai">TẤT CẢ SẢN PHẨM</p>
                            <div className={`sb-subcourse`}>
                                <p className="header-text-sub" onClick={() => setopenSubcourse(!opensubCourse)}>KHÓA HỌC</p>
                                <ul className={`course-nav `}>
                                    <li><Link className='text-course-nav'>Trang chủ</Link></li>
                                    <li style={{ position: 'relative' }} className='text-course-nav' onClick={() => setopenListcourse(!openListcourse)}>Danh sách khóa học
                                        <div>
                                            <ul className={`list-course ${openListcourse ? 'active' : 'inactive'}`}>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
                                                </li>
                                                <li>
                                                    Khóa học nấu ăn
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
                            <div className={`sb-level  ${opensubCourse ? 'activesubcourse' : 'inactivesubcourse'}`}>
                                <p className="header-text-sub">TRÌNH ĐỘ</p>
                                <Form>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxNormal">
                                        <Form.Check type="checkbox" label="Cơ bản" />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxMedium">
                                        <Form.Check type="checkbox" label="Mọi cấp độ" />
                                    </Form.Group>
                                    <Form.Group className="mb-1" controlId="formBasicCheckboxHard">
                                        <Form.Check type="checkbox" label="Nâng cao" />
                                    </Form.Group>
                                </Form>
                            </div>
                            <div>
                                <p className="header-text-sub">MỨC GIÁ</p>
                                <Form onChange={() => {setfilterprice(!filterprice);setCurrentPage(1)}}>
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
                            <div className="sb-time">

                            </div>
                        </Col>
                        <Col xs='9'>
                            <Row >
                                {Products.length === 0 ? null :
                                    <Row >
                                        {Products.map((item) => <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                                            <Product product={item} />
                                        </Col>)}
                                    </Row>
                                }
                            </Row>
                            <CustomPagination
                                pageCount={pageCount}
                                currentPage={currentPage}
                                handlePageChange={handlePageChange}
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    </div>);
}
export default ProductList;