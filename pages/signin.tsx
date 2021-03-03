import  MainLayout from '../layouts/MainLayout'
import SigninComponent from "../components/Modal/Signin/SigninPresenterComponentContainer";
import Head from 'next/head'

const Signin = () => { 
    return(
        <MainLayout>
            <Head>
                <title>
                    เข้าสู่ระบบ
                </title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SigninComponent/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Signin