import React from 'react'
import { Link } from 'react-router-dom'

import Grid from './Grid'
import Logo from './Logo'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <Grid col={4} mdCol={2} smCol={1} gap={20}>
                    <div>
                        <div className="footer__title">
                            <Logo />
                        </div>
                        <div className="footer__content">
                            <p>
                                <i className="bx bxs-map"></i>
                                <span>
                                    144, Xuân Thủy, P. Dịch Vọng Hậu, Q. Cầu
                                    Giấy, Tp. Hà Nội.
                                </span>
                            </p>
                            <p>
                                <i className="bx bxs-phone"></i>
                                <span>0123456789</span>
                            </p>
                            <p>
                                <i className="bx bxs-envelope"></i>
                                <span>pqbao27@gmail.com</span>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">TỔNG ĐÀI HỖ TRỢ</div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>099999999</strong>
                            </p>
                            <p>
                                Thắc mắc đơn hàng <strong>099999999</strong>
                            </p>
                            <p>
                                Góp ý, khiếu nại <strong>099999999</strong>
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className="footer__title">DỊCH VỤ KHÁCH HÀNG</div>
                        <div className="footer__content">
                            <p>
                                <Link to="/about">Hướng dẫn mua hàng</Link>
                            </p>
                            <p>
                                <Link to="/about">Hướng dẫn thanh toán</Link>
                            </p>
                            <p>
                                <Link to="/about">Hướng dẫn gian nhận</Link>
                            </p>
                            <p>
                                <Link to="/about">Điều khoản dịch vụ</Link>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">CHĂM SÓC KHÁCH HÀNG</div>
                        <div className="footer__content">
                            <p>
                                <Link to="/about">Chính sách đổi trả</Link>
                            </p>
                            <p>
                                <Link to="/about">Chính sách bảo hành</Link>
                            </p>
                            <p>
                                <Link to="/about">Chính sách hoàn tiền</Link>
                            </p>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    )
}

export default Footer
