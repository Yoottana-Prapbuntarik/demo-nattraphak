import { Card } from "react-bootstrap";
import './itemPagegination.scss'
import Link from "next/link";

const ItemPagegination = ({ data }: any) => {
    return (
        <>
            {
                data.map((items, idx) => {
                    return (
                        <Link href={`/product/${items.id}`} key={idx}>
                            <a className="decoration-none">
                                <Card>
                                    <div className="img-wrapper">
                                        <Card.Img variant="top" src={items.images} />
                                        <div className="amount-items">{Math.ceil(Math.random() * 100)} ชิ้น</div>
                                    </div>
                                    <Card.Body>
                                        <p>{items.pName}</p>
                                        <div>
                                            <p>
                                                <s className="original-price">
                                                    {parseInt(items.originalPrice).toLocaleString()}
                                                </s>
                                            &nbsp;
                                            <span className="price">
                                                    {parseInt(items.price).toLocaleString()} บาท
                                            </span>
                                            </p>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </a>
                        </Link>
                    )
                })
            }
        </>
    )
}

export default ItemPagegination;