import MainLayout from '../layouts/MainLayout'
import NotFound from "../components/PageNorFound/PageNotFoundContainer";
import Head from 'next/head'

const pageNotFound = () => {
    return (
        <MainLayout>
            <Head>
                <title>
                    NOT FOUND !
                </title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <NotFound />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default pageNotFound