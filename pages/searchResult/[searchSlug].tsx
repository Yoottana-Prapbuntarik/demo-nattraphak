import { useRouter } from 'next/router'
import MainLayout from '../../layouts/MainLayout'
import Head from "next/head";
import CardContent from "../../components/CardContent/CardContent";
import { arr } from "../../mockup/mockup";
const searchResult = () => {
    const router = useRouter();
    return (
        <MainLayout className="min-vh-100">
            <Head>
                <title>
                    ผลการค้นหา : {router.query.searchSlug}
                </title>
            </Head>
            <div className="container mt-5">
                <div className="row pb-5">
                    <h1 className="text-center w-100">
                        ผลการค้นหา :  "{router.query.searchSlug}"
                    </h1>
                </div>
                <div className="row">
                    {
                        arr.map((item, index: number) => {
                            return (
                                router.query.searchSlug == item.pName ?
                                    <div className="col-lg-4 col-12" key={index}>
                                        <CardContent
                                            images={item.images}
                                            pName={item.pName}
                                            originalPrice={item.originalPrice}
                                            price={item.price}
                                            id={item.id}
                                        />
                                    </div> : ('')
                            )
                        })
                    }
                </div>
            </div>
        </MainLayout>
    );
};

export default searchResult;