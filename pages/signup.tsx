import  MainLayout from '../layouts/MainLayout'
import Head from 'next/head'
import Signup from "../components/Signup/SignupContainer";

const Signin = () => { 
    return(
        <MainLayout>
            <Head>
                <title>
                    สมัครสมาชิก
                </title>
            </Head>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                    <Signup/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Signin