import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./OrderSummary.css";

const OrderSummary = () => {
    return (
        <aside>
            <div className="sidebar_header">
                <h2>Đơn hàng</h2>
            </div>
    
            <div className="sidebar_content">
                <div className="order-summary">
                    <div className="order-summary_sections">
                        <div className="order-summary_section product-list">

                        </div>
                        <div className="order-summary_section discount-code">
                            <div className="edit_checkout">
                                <div className="fieldset">
                                    <div className="field_input-btn-wrapper">
                                        <Form.Control type="text" placeholder="Nhập mã giảm giá" />
                                        <Button variant="primary">Áp dụng</Button>{' '}
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
                                        <td className="total-line_price">x</td>
                                    </tr>
                                </tbody>
                                <tfoot className="total-line-table_footer">
                                    <tr className="total-line payment-due ">
                                        <th className="total-line_name">
                                            <span className="payment-due_label-total">Tổng cộng</span>
                                        </th>
                                        <td className="total-line_price">
                                            <span className="payment-due_price">x</span>
                                        </td>
                                    </tr>
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