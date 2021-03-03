import { NavDropdown, Navbar, Nav } from "react-bootstrap";
import { faSearch, faShoppingCart, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAuthentication from "../../authorized/checkToken";
import Link from 'next/link';
import Signin from '../Modal/Signin/SigninContainer'
import './nav.scss';
import { Fragment } from "react";
import Router from "next/router";
import { signinModalAction } from "../Modal/Signin/SigninContainer";
import { useDispatch } from "react-redux";
import SearchBox, { tooltipSearchToggle, toggleTooltipTarget } from "../Search/SearchContainer";
import CartBox, { tooltipSearchToggleCart, toggleTooltipTargetCart } from "../Cart/CartPopupContainer";

const Navigation = ({ navigationPresenter, productDetailPresenter }: any) => {
    const Dispatch = useDispatch()

    const [isAuthenticated] = useAuthentication(false)

    const signout = () => {
        localStorage.removeItem('access-token')
        Router.reload()
    }

    const toggleTooltip = async (e) => {
        await toggleTooltipTarget(e)
        await Dispatch(tooltipSearchToggle)
    }

    const toggleTooltipCart = async (e) => {
        await toggleTooltipTargetCart(e)
        await Dispatch(tooltipSearchToggleCart)
    }

    return (
        <div>
            <Navbar className="nav-custome" expand="lg">
                <div className="h-100 d-flex align-items-center">
                    <Link href="/" passHref>
                        <Navbar.Brand >
                            <img src="/assets/images/logo/nattraphak.jpg" alt="nattraphak logo" className="img-logo" />
                        </Navbar.Brand>
                    </Link>
                </div>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        {
                            navigationPresenter.navigationItems.map((navLinkList, idx: number) => {
                                return (
                                    navLinkList.keyTitle !== "ประเภทสินค้า" ?
                                        <Fragment key={idx}>

                                            <Link href={navLinkList.routePath} key={idx} passHref>
                                                <a className="nav-link">
                                                    {navLinkList.keyTitle}
                                                </a>
                                            </Link>
                                        </Fragment>
                                        :
                                        <Fragment key={idx}>
                                            <NavDropdown title={navLinkList.keyTitle} id="basic-nav-dropdown">
                                                {
                                                    navLinkList.routePath.map((items, index: number) => {
                                                        return (
                                                            <Link
                                                                key={index}
                                                                href={{
                                                                    pathname: `/category/${items.path}`,
                                                                    query: { name: items.type }
                                                                }}
                                                                passHref>
                                                                <NavDropdown.Item>
                                                                    {items.type}
                                                                </NavDropdown.Item>
                                                            </Link>
                                                        )
                                                    })
                                                }
                                            </NavDropdown>
                                        </Fragment>
                                )
                            })
                        }
                    </Nav>
                    <Nav className="ml-auto">
                        {
                            isAuthenticated === true || navigationPresenter.dataAPI !== "" ?
                                <div className="nav-link">
                                    <button className="btn-signin"
                                        onClick={() => signout()}
                                    >
                                        <div className="signin-border">
                                            ออกจากระบบ &nbsp; <FontAwesomeIcon icon={faSignOutAlt} />
                                        </div>
                                    </button>
                                </div>
                                :
                                <button className="btn-signin"
                                    onClick={() => Dispatch(signinModalAction)}
                                >
                                    <div className="signin-border">
                                        เข้าสู่ระบบ
                                    </div>
                                </button>
                        }
                        <button className="btn-search" onClick={(e) => toggleTooltip(e)}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        <button className="btn-search-mobile" onClick={() => Router.replace('/search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                        
                        <button className="btn-cart" onClick={(e) => toggleTooltipCart(e)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> ({productDetailPresenter.cart.length})
                    </button>
                        <button className="btn-cart-mobile" onClick={() => Router.replace('/cart')}>
                            <FontAwesomeIcon icon={faShoppingCart} /> ({productDetailPresenter.cart.length})
                    </button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Signin />
            <SearchBox />
            <CartBox />
        </div>
    )
}

export default Navigation