import MainLayout from '../layouts/MainLayout'
import Head from "next/head";
import Search from "../components/Search/SearchPageContainer";

const search = () => {
    return (
        <MainLayout>
            <Head>
                <title>
                    ค้นหา
                </title>
            </Head>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <Search />
                </div>
            </div>
        </MainLayout>
    );
};

export default search;