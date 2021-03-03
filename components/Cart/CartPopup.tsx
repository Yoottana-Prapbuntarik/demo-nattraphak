import { Overlay, Popover } from "react-bootstrap";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.scss";
import { useEffect, useState } from 'react'
import Router from "next/router";
const CartPopup = ({
    cartPresenter,
    closeTooltipCart,
    productDetailPresenter,
    cartPopupPresenter,
    loadCart
}: any) => {

    const [screenWidth, setWidth] = useState(0)
    useEffect(() => {
        loadCart(productDetailPresenter.cart)

    }, [productDetailPresenter.cart])
    useEffect(() => {
        closeTooltipCart()

        const handleResize = (): any => {
            setWidth(window.innerWidth)
        }
        window.addEventListener("resize", handleResize);
        handleResize()
        return () => window.removeEventListener("resize", handleResize);

    }, []);

    let isShow = screenWidth <= 1024 ? true : false

    return (
        <Overlay
            show={isShow ? false : cartPopupPresenter.cartToggle}
            placement="bottom"
            target={cartPopupPresenter.cartTooltipTarget}
            containerPadding={20}
            rootClose={true}
            onHide={() => closeTooltipCart()}
        >
            <Popover
                bsPrefix="cart-container" //css my own container
                id="popover-contained">
                <div className="arrow-up"></div>
                <Popover.Title as="h3">ตะกร้าสินค้าของฉัน</Popover.Title>
                <Popover.Content>
                    <div className="container-fluid p-0">
                        {
                            cartPresenter.cart.length === 0 ?
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 pt-5 text-center">
                                            <h5>ไม่พบข้อมูล</h5>
                                            <p className="pt-3">โปรดเลือกสินค้าของตุณ</p>
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 mx-auto">
                                            {
                                                cartPresenter.cart.map((item, index: number) => {
                                                    return (
                                                        <div className="row mt-3" key={index}>
                                                            <div className="col-2">
                                                                <img className="w-100 d-block" src={item.image} alt="" />
                                                            </div>
                                                            <div className="col-5">{item.name}</div>
                                                            <div className="col-2">
                                                                x{item.amount}
                                                            </div>
                                                            <div className="col-3">
                                                                {parseInt(item.price).toLocaleString()} บาท
                                                    </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="col-12 mt-2rem">
                                            <div className="container-fluid p-0">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <button className="goto-cart" onClick={() => Router.push('/cart')}>
                                                            ไปที่ตะกร้าของฉัน
                                                        </button>
                                                    </div>
                                                    <div className="col-3 p-2">
                                                        <div className="d-flex flex-column  justify-content-center align-items-center h-100">
                                                            <h5>
                                                                ราคารวม
                                                            </h5>
                                                        </div>
                                                    </div>
                                                    <div className="col-3 p-2">
                                                        <div className="d-flex flex-column  justify-content-center align-items-center h-100">
                                                            <h5>
                                                                {parseInt(cartPresenter.total).toLocaleString()} บาท
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                </Popover.Content>
            </Popover>
        </Overlay>
    )

}

export default CartPopup;
