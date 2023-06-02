import "./Header.css";
import { useRef, useEffect, useContext } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { AuthContext } from "../../context/AuthContext";

const nav__links = [
    { path: "/home", display: "Home" },
    { path: "/about", display: "About" },
    { path: "/tours", display: "Tours" }
]

function Header() {

    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const navigate = useNavigate();
    const { user, dispatch } = useContext(AuthContext);

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
        navigate('/')
    }

    const stickyHeaderFunction = () => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                headerRef.current.classList.add('sticky__header')
            } else {
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(() => {
        stickyHeaderFunction();

        return window.removeEventListener("scroll", stickyHeaderFunction)
    });

    const toggleMenu = () => {
        menuRef.current.classList.toggle('show__menu');
    }

    return (
        <header className="header" ref={headerRef}>
            <Container>
                <Row>
                    <div className="nav__wrapper d-flex align-items-center justify-content-between">
                        <div className="logo">
                            <img src={logo} alt="webLogo" />
                        </div>

                        <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                            <ul className="menu d-flex align-items-center gap-5">
                                {nav__links.map((item, ind) => {
                                    return (
                                        <li className="nav__items" key={ind}>
                                            <NavLink to={item.path} className={navclass => navclass.isActive ? "active__link" : ""}>{item.display}</NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="nav__rights d-flex align-items-center gap-4">
                            <div className="nav__btns d-flex align-items-center gap-4">
                                {user ? <>
                                    <h5 className="mb-0">{user.username}</h5>
                                    <button className="btn btn-dark" onClick={logout}>Logout</button>
                                </> : <>
                                    <Link to="/login"><Button className="btn secondary__btn">Login</Button></Link>
                                    <Link to="/register"><Button className="btn primary__btn">Register</Button></Link>
                                </>}

                            </div>

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i className="ri-menu-line"></i>
                            </span>
                        </div>
                    </div>
                </Row>
            </Container>
        </header>
    )
}

export default Header;