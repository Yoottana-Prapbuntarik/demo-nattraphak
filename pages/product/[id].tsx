import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout"
import Head from "next/head"
import ProductDetailContainer from "../../components/ProductDetail/ProductDetailContainer";
const productDetail = ({ }: any) => {

    const router = useRouter()
    return (
        <MainLayout>
            <Head>
                <title>
                    รายละเอียดสินค้า
                </title>
            </Head>
            <div className="container mt-5 min-vh-100">
                <div className="row">
                </div>
                <ProductDetailContainer />
            </div>
        </MainLayout>
    )
}

export default productDetail