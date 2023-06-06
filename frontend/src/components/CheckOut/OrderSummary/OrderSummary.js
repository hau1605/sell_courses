import React, { useEffect, useState } from "react";
import BillingDataService from "../../../services/BillingDataService";

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./OrderSummary.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getTotal } from "../../../features/cartSlice";

const OrderSummary = () => {
    const dispatch = useDispatch();

    const { cart, totalPrice } = useSelector((state) => state.Allcart)
    const user = useSelector((state) => state.user)
    let billings = [];
    cart.map((item) => {
        let billingItems = 
            {
                course_id: item._id,
                course_name: item.name,
                course_price: item.cost
            }
        billings.push(billingItems)
        return 0;
    })
    const [billing, setBilling] = useState({
        email: user.email,
        orders: {
            items: billings,

            payment_method: {
                card_number: "1234567890",
                expiration_date: "12/23",
                security_code: 123,
                type: "momo"
            }
        },
        user_id: user.userId,
        user_name: user.userName,   
    } );

    const handlesubmit = async(e)=>{
        e.preventDefault();
        console.log(billing)
        // const response = await BillingDataService.postBilling(billing);
        window.open('https://www.youtube.com/watch?v=IjWuRvHyS3Q', '_blank').focus();
        window.location.href = "/";
    };

    useEffect(() => { dispatch(getTotal()) }, [cart])
    
    return (
        <aside>
            <div className="sidebar_header">
                <h2>Đơn hàng</h2>
            </div>
    
            <div className="sidebar_content">
                <div className="order-summary">
                    <div className="order-summary_sections">
                        <div className="order-summary_section product-list">
                            {cart.map((item, key) =>
                                <table className="product-table">
                                    <tbody>
                                        <tr className="product">
                                            <td className="product-image">
                                                <div className="product-thumbnail">
                                                    <div className="product-thumbnail-wrapper">
                                                        <img src={item.poster} />
                                                    </div>
                                                </div>
                                            </td>

                                            <th className="product-description">
                                                <span className="product-description_name">{item.name}</span>
                                            </th>

                                            <td className="price">
                                                <p className="table-text product-price">{item.cost.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            )}
                        </div>
                        <div className="order-summary_section discount-code">
                            <div className="edit_checkout">
                                <div className="fieldset">
                                    <div className="field_input-btn-wrapper">
                                        <Form.Control type="text" placeholder="Nhập mã giảm giá" />
                                        <Button variant="primary">Áp dụng</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="order-summary_section total-lines">
                            <table className="total-line-table">
                                <thead></thead>
                                <tbody className="total-line-table_tbody">
                                    <tr className="total-line total-line--subtotal">
                                        <th className="total-line_name">Tạm tính</th>
                                        <td className="total-line_price">
                                            <p className="ctotal-line_price">{totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot className="total-line-table_footer">
                                    <tr className="total-line payment-due ">
                                        <th className="total-line_name">
                                            <span className="payment-due_label-total">Tổng cộng</span>
                                        </th>
                                        <td className="total-line_price">
                                            <span className="payment-due_price">
                                                <p className="payment-due_price">{totalPrice.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                            </span>
                                        </td>
                                    </tr>
                                    <div className="order-summary_nav">
                                        <a href="/cart" className="previous-link">
                                            <span className="previous-link_content">Quay trở về giỏ hàng</span>
                                        </a>
                                        <div className="order-summary_nav-btn">
                                            <Button className="complete-order-button" onClick={handlesubmit}>Hoàn tất</Button>
                                        </div> 
                                    </div>  
                                </tfoot>
                            </table>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>     
            </div>
        </aside>
        
    );

}
export default OrderSummary;