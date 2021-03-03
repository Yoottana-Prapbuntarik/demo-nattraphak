import "./cart.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import Link from "next/link";
const Cart = ({ cartPresenter, productDetailPresenter, removeItemFromCart, clearCart, loadCart }: any) => {
    useEffect(() => {
        loadCart(productDetailPresenter.cart)

    }, [productDetailPresenter.cart])
    return (
        <div className="container-fluid mt-5">
            <h2>
                ตะกร้าสินค้าของฉัน
                </h2>
            <div className="row my-5">
                <div className="col-12 cart">
                    <table className="table-cart">
                        <thead className="thead-gray table-gray">
                            <tr>
                                <th scope="col" className="header-cart">สินค้า</th>
                                <th scope="col" className="header-cart text-center">จำนวน</th>
                                <th scope="col" className="header-cart text-center">ราคา</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cartPresenter.cart.length === 0 ?
                                <tr>
                                    <td></td>
                                    <td className="py-5 text-center">
                                        ไม่พบข้อมูล
                                    </td>
                                    <td></td>
                                </tr>
                                : cartPresenter.cart.map((item, index: number) => {
                                    return (
                                        <tr key={index}>
                                            <td className="w-50 py-4">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row d-flex align-items-center">
                                                            <div className="col-lg-2 col-12">
                                                                <div className="cart-image-wrapper">
                                                                    <img className="w-100 d-block" src={item.image} alt="" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-10 col-12 mt-mobile">
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-25 py-4  text-right">
                                                <div className="row">
                                                    <div className="col-12 d-flex align-items-center justify-content-center">
                                                        x{item.amount}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="w-25 py-4  text-center">
                                                <div className="row">
                                                    <div className="col-lg-8  d-flex align-items-center justify-price">
                                                        {parseInt(item.price).toLocaleString()} บาท
                                                    </div>
                                                    <div className="col-lg-4 text-center">
                                                        <FontAwesomeIcon className="icon-delete" icon={faTimes} size="2x" onClick={() => removeItemFromCart(item.id)} />
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        <thead className="thead-gray table-gray">
                            <tr>
                                <th scope="col" className="header-cart"></th>
                                <th scope="col" className="header-cart text-center font-weight-bold ">ราคารวม</th>
                                <th scope="col" className="header-cart text-center font-weight-bold">
                                    {parseInt(cartPresenter.total).toLocaleString()} บาท
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="row w-100 mt-5">
                    <div className="col-lg-5  d-flex align-items-center col-12">
                        <div>
                            <Link href="/">
                                <a className="btn-clear">
                                    เลือกซื้อสินค้าต่อ
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-lg-7 col-12">
                        <div className="d-flex align-items-center justify-content-end my-3 w-100">
                            <a className="mr-5 btn-clear" onClick={() => clearCart()}>
                                ล้างตะกร้า
                        </a>
                            <button className="btn-checkout" disabled={cartPresenter.cart.length === 0 ? true : false}>
                                ดำเนินการต่อ
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart