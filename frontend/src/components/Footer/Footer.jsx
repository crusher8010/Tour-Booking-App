import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const quick__links = [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/tours", display: "Tours" }
]

const quick__links2 = [
    { path: "/gallery", display: "Gallery" },
    { path: "/login", display: "Login" },
    { path: "/register", display: "Register" }
]

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg="3">
                        <div className="logo">
                            <img src={logo} alt="logo-img" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, neque.</p>

                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <Link to="#"><i className="ri-youtube-line"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-github-fill"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-facebook-circle-line"></i></Link>
                                </span>
                                <span>
                                    <Link to="#"><i className="ri-instagram-line"></i></Link>
                                </span>
                            </div>
                        </div>
                    </Col>

                    <Col lg="3">
                        <h5 className="footer__link-title">Discover</h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((items, index) => {
                                    return (
                                        <ListGroupItem key={index} className="ps-0 border-0">
                                            <Link to={items.path}>{items.display}</Link>
                                        </ListGroupItem>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title">Quick Links</h5>

                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((items, index) => {
                                    return (
                                        <ListGroupItem key={index} className="ps-0 border-0">
                                            <Link to={items.path}>{items.display}</Link>
                                        </ListGroupItem>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title">Contact</h5>

                        <ListGroup className="footer__quick-links">

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-map-pin-line"></i></span>
                                    Address:
                                </h6>

                                <p className="mb-0">Bhusawal, Maharashtra</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-mail-line"></i></span>
                                    Email:
                                </h6>

                                <p className="mb-0">anirudhamandal8010@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i className="ri-phone-fill"></i></span>
                                    Mobile No:
                                </h6>

                                <p className="mb-0">+91-9507832728</p>
                            </ListGroupItem>

                        </ListGroup>
                    </Col>

                    <Col lg="12" className="text-center pt-5">
                        <p className="copyright">Copyright {year}, design and developed by Anirudha Mandal. All rights reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;