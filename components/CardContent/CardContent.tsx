import { Card } from "react-bootstrap";
import './cardContent.scss'
import Link from "next/link";

const CardContent = ({ images, pName, originalPrice, price, id }: any) => {
    return (
        <Link href={`/product/${id}`}>
            <a className="decoration-none">
                <Card>
                    <div className="img-wrapper">
                        <Card.Img variant="top" src={images} />
                        <div className="amount-items">{Math.ceil(Math.random() * 100)} ชิ้น</div>
                    </div>
                    <Card.Body>
                        <p>{pName}</p>
                        <div>
                            <p>
                                <s className="original-price">
                                    {parseInt(originalPrice).toLocaleString()}
                                </s>
                                &nbsp;
                                <span className="price">
                                    {parseInt(price).toLocaleString()} บาท
                                </span>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </a>
        </Link>
    )
}

export default CardContent