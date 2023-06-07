import React, { useEffect, useState } from "react";
import './SearchPage.css'
import Banner from "../Banner/Banner";
import { Link, useNavigate, useParams, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import CoursesDataService from "../../services/CoursesDataService";
import Product from "../Product/Product";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
const SearchPage = () => {
    const img = ['https://bizweb.dktcdn.net/100/453/393/themes/894913/assets/breadcrumb_image.png?1676281841878']
    const [courseResult, setCourseResult] = useState([]);
    const [countResult, setCountResult] = useState(0);
    const { _searchName } = useParams();
    useEffect(() => {
        CoursesDataService.getCourseByName(_searchName)
            .then(res => {
                setCourseResult(res.data)
            })

    }, [courseResult,countResult])
    return (
        <div className='search-page'>
            <Banner imgs={img} />
            <Container className="SearchPage-container">
                <p><Link className="SearchPage-text-link-home" to='/'>Trang chủ</Link>/<span className="SearchPage-text-link-loai">Tìm kiếm</span></p>
                <p className="SearchPage-text-result">Có {courseResult.length} kết quả tìm kiếm phù hợp</p>
                {
                    courseResult.length===0?null:<Row >
                    {courseResult.map((item) => <Col xs={6} lg={3} md={4} style={{ padding: '8px' }}>
                        <Product product={item} />
                    </Col>)}
                </Row>
                }
            </Container>

        </div>
    )
}
export default SearchPage;