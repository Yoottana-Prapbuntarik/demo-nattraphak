import MainLayout from '../layouts/MainLayout'
import Head from 'next/head'
import CartContainer from "../components/Cart/CartContainer";
const Cart = () => {
    return (
        <MainLayout>
            <Head>
                <title>
                    ตะกร้าสินค้า
                </title>
            </Head>
            <div className="container">
                <CartContainer />
            </div>
        </MainLayout>
    )
}

export default Cart