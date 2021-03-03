import Gallery from "../Carousel/Gallery"
import { arr } from "../../mockup/mockup";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "./product-detail.scss"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "redux-form";
import SelectField from "../FieldComponents/SelectField";
import TextField from "../FieldComponents/TextField";
import { Fragment } from "react";

const ProductDetail = ({ productDetailPresenter,
    handleChangeAmount,
    handleChangeColor,
    handleChangeSize,
    addAmount,
    subtractAmount,
    handleSubmit,
    addedToCart
}: any) => {


    const [dataproductDetail, setDataProductDetail] = useState({})
    const router = useRouter()
    let productId = router.query.id

    useEffect(() => {
        let data = arr.find((item) => item.id === productId)
        setDataProductDetail(data)
    }, [])
    const submitAddToCart = (event: any) => {
        event['id'] = dataproductDetail['id']
        event['name'] = dataproductDetail['pName']
        event['price'] = dataproductDetail['price'] * productDetailPresenter.amount.amount,
        event['image'] = dataproductDetail['images']

        addedToCart(event)
    }
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-lg-6 col-12 mt-5">
                    <Gallery
                        dataSlide={[{
                            src: dataproductDetail['images'],
                            alt: ""
                        },]}
                    />
                </div>
                <div className="col-lg-6 col-12 mt-5">
                    <form onSubmit={handleSubmit(submitAddToCart)}>

                        <h2>
                            {dataproductDetail['pName']}
                        </h2>
                        <h2>
                            {parseInt(dataproductDetail['price']).toLocaleString()}
                        &nbsp; &nbsp; &nbsp;
                        <span className="text-light-gray"><s>{parseInt(dataproductDetail['originalPrice']).toLocaleString()} บาท </s></span>
                        </h2>
                        <div className="d-flex product-detail-content mt-3">
                            <div className="text-left mr-3">
                                แชร์ :
                        </div>
                            <div className="text-left">
                                <img src="/assets/images/logo/facebook-blue.png" className="logo-facebook" alt="facebook" />
                            </div>
                        </div>
                        <div className="d-flex flex-column product-detail-content mt-3">
                            <div className="text-left pb-2">
                                เลือกไซส์เสื้อ
                        </div>
                            <div className="text-left w-100">
                                <Field
                                    disabledState={false}
                                    name={productDetailPresenter.chooseSize.name}
                                    style="select-input d-block"
                                    currentValue={productDetailPresenter.chooseSize.chooseSizeValue}
                                    component={SelectField}
                                    styleTextError="text-danger"
                                    onChange={(event: any) => handleChangeSize(event.target.value)}
                                >

                                    {
                                        productDetailPresenter.sizeList.map((size, index: number) => {
                                            return (
                                                <Fragment key={index}>
                                                    <option
                                                        value={size}
                                                    >
                                                        {size}
                                                    </option>
                                                </Fragment>
                                            )
                                        })
                                    }

                                </  Field>
                            </div>
                            {/*  */}
                            <div className="text-left pb-2">
                                เลือกสีเสื้อ
                            </div>
                            <div className="text-left w-100">
                                <Field
                                    disabledState={false}
                                    name={productDetailPresenter.chooseColor.name}
                                    style="select-input d-block"
                                    currentValue={productDetailPresenter.chooseColor.chooseColorValue}
                                    component={SelectField}
                                    styleTextError="text-danger"
                                    onChange={(event: any) => handleChangeColor(event.target.value)}
                                >

                                    {
                                        productDetailPresenter.colorList.map((color, index: number) => {
                                            return (
                                                <Fragment key={index}>
                                                    <option
                                                        value={color}
                                                    >
                                                        {color}
                                                    </option>
                                                </Fragment>
                                            )
                                        })
                                    }

                                </Field>
                            </div>

                            <div className="text-left pb-2">
                                จำนวน
                        </div>
                            <div className="d-flex flex-row align-items-center">
                                <a onClick={() => productDetailPresenter.amount.amount === 1 ?
                                    '' : subtractAmount()} className="btn-amount mr-2 text-white mb-3">-</a>
                                <div className="text-left">
                                    <Field
                                        name={productDetailPresenter.amount.name}
                                        type="number"
                                        styleTextError="text-danger"
                                        component={TextField}
                                        className="input-amount d-block"
                                        currentValue={productDetailPresenter.amount.amount}
                                        onChange={(event: any) => handleChangeAmount(event.target.value)}
                                    />
                                </div>
                                <a onClick={() => addAmount()} className="btn-amount ml-2 text-white mb-3">+</a>
                            </div>
                            <button className="btn btn-add-cart" type="submit">
                                <div className="d-flex justify-content-center">
                                    <div>
                                        <FontAwesomeIcon icon={faShoppingCart} /> &nbsp;&nbsp;&nbsp;
                                </div>
                                    <div>
                                        หยิบใส่ตระกร้า
                                </div>
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-12 mt-5">
                    <h2>
                        รายละเอียดของสินค้า
                    </h2>
                    <div className="row">
                        <div className="col-lg-5 col-6 container-detail-product"> <h5>ประเภทของเนื้อผ้า</h5></div>
                        <div className="col-lg-7 col-6 container-detail-product"> <p>ประเภทของเนื้อผ้า</p></div>
                        <div className="col-lg-5 col-6 container-detail-product"><h5>รายละเอียดเสื้อผ้า</h5></div>
                        <div className="col-lg-7 col-6 container-detail-product">
                            <p>
                                ไซส์ L : รอบอก 40 นิ้ว, รอบแขนกว้าง 15 นิ้ว
                            <br />
                            ไซส์ XL : รอบอก 42 นิ้ว, รอบแขนกว้าง 15.5 นิ้ว

                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 mt-5">
                    <h2>
                        สินค้าแนะนำ
                    </h2>
                      Comming soon !
                </div>
            </div>
        </div>
    )
}

export default ProductDetail