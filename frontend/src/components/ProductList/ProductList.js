import React from "react";
import Banner from "../Banner/Banner";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Product from "../Product/Product";
import './ProductList.css'
const ProductList = () => {
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']

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
                <div style={{margin:'20px 0'}}>
                <Row >
                    <Col xs='3'>
                        <p>TẤT CẢ SẢN PHẨM</p>
                    </Col>
                    <Col xs='9'>
                    <Row >
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product /></Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                        <Col xs={6} lg={4} md={4} style={{ padding: '8px' }}>
                            <Product />
                        </Col>
                    </Row>
                    </Col>
                </Row>
                </div>
                
            </Container>
        </div>
    </div>);

}
export default ProductList;