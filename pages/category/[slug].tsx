import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout'
import Head from "next/head";
const productType = () => {
    const router = useRouter();

    return (
        <MainLayout className="min-vh-100">
            <Head>
                <title>
                    {router.query.name}
                </title>
            </Head>
            <div className="container mt-5">
                <div className="row py-5">
                    <h5 className="text-center w-100">
                        ชนิดสินค้า {router.query.name}   
                    </h5>
                </div>
            </div>
        </MainLayout>
    );
};

export default productType;