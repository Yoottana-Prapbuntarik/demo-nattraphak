import { Field } from "redux-form";
import Link from "next/link";
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    useEffect,
} from "react";
import './signin.scss'
import TextField from "../../FieldComponents/TextField";
import ButtonSubmit from "../../FieldComponents/ButtonSubmit";
import Loading from "../../Loading/LoadingPage";
import Router from "next/router";
import { routeManager } from "../../../manager/routeManager";
import SocialButton from "../../SocialLogin/SocialButton";
import { SecretKey } from "../../../manager/keyLoginSocial";
const SigninPresenterComponent = (
    { signinViewPresenter,
        acknowledge,
        handleSubmit,
        submitSignin,
        handleChangeEmailView,
        handleChangePasswordView

    }: any) => {
    useEffect(() => {
        const isAuthenticated = localStorage.getItem('access-token');
        if (isAuthenticated) {
            Router.replace(routeManager.routerToHomepage)
        }
    }, [])
    const acceptAcknowledge = (bool) => {
        acknowledge(bool)
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <SweetAlert
                        custom
                        showCloseButton
                        confirmBtnText="ตกลง"
                        show={signinViewPresenter.isAcknowledge}
                        confirmBtnBsStyle="btn text-white mt-5 position-relative position-button"
                        title={"เข้าสู่ระบบ"}
                        onConfirm={() => acceptAcknowledge(false)}
                    >
                        <span className="detail-popup">{signinViewPresenter.keyAcknowledge}</span>
                    </SweetAlert>
                    {
                        signinViewPresenter.isLoading && <Loading />
                    }
                    <div className="col-12">
                        <div className="title-popup-signin  padding-sesstion-signin">
                            {signinViewPresenter.labelSignin}
                        </div>
                        <div className="mt-2">
                            <form onSubmit={handleSubmit(submitSignin)}>
                                <Field
                                    name={signinViewPresenter.emailSigninView.name}
                                    type="text"
                                    styleTextError="text-danger"
                                    component={TextField}
                                    className="w-100 input-box p-2"
                                    currentValue={signinViewPresenter.emailSigninView.emailValueView}
                                    label={signinViewPresenter.emailSigninView.placeholder}
                                    onChange={(event: any) => handleChangeEmailView(event.target.value)}
                                />
                                <Field
                                    name={signinViewPresenter.passwordSigninView.name}
                                    type="password"
                                    styleTextError="text-danger"
                                    component={TextField}
                                    className="w-100 input-box p-2 mb-2"
                                    currentValue={signinViewPresenter.passwordSigninView.passwordValueView}
                                    label={signinViewPresenter.passwordSigninView.placeholder}
                                    onChange={(event: any) => handleChangePasswordView(event.target.value)}
                                />
                                <div className="col-12">
                                    <div className="d-flex h-100 align-items-center justify-content-end">
                                        <Link href="/forgotPassword">
                                            <a className="signup-button">
                                                ลืมรหัสผ่าน
                                                </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center mt-3 mb-3">
                                    <Field
                                        name="submit"
                                        type="submit"
                                        style="w-100 text-white mt-2 btn text-white bg-pink btn-signin-modal"
                                        component={ButtonSubmit}
                                        label={signinViewPresenter.labelSignin}
                                    />
                                </div>
                            </form>

                            <div className="row">
                                <div className="col-lg-12 mt-2">
                                    <SocialButton
                                        className="w-100 text-white mt-2 btn btn-signin-modal text-dark"
                                        provider='facebook'
                                        appId={SecretKey.Facebook}
                                        onLoginSuccess={(event) => console.log(event)}
                                        onLoginFailure={(event) => console.log(event)}
                                    >
                                        <div className="d-flex  h-100 align-items-center">
                                            <div className="logo-social-width align-items-center h-100">
                                                <img className="w-100" src="/assets/images/logo/facebook.png" alt="Facebook login" />
                                            </div>
                                            <div className="d-flex  w-100 justify-content-center">
                                                เข้าสู่ระบบด้วย Facebook
                                            </div>
                                        </div>
                                    </SocialButton>
                                </div>

                                <div className="col-lg-12 mt-2">
                                    <SocialButton
                                        className="w-100 text-white mt-2 btn btn-signin-modal text-dark"
                                        provider='google'
                                        appId={SecretKey.Google}
                                        onLoginSuccess={(event) => console.log(event)}
                                        onLoginFailure={(event) => console.log(event)}
                                    >
                                        <div className="d-flex  h-100 align-items-center">
                                            <div className="logo-social-width align-items-center h-100">
                                                <img className="w-100" src="/assets/images/logo/google.png" alt="Google login" />
                                            </div>
                                            <div className="d-flex  w-100 justify-content-center">
                                                เข้าสู่ระบบด้วย Google
                                            </div>
                                        </div>
                                    </SocialButton>
                                </div>
                                <div className="col-lg-12 mt-2">
                                    <button className="w-100 text-white mt-2 btn btn-signin-modal text-dark">
                                        <div className="d-flex  h-100 align-items-center">
                                            <div className="logo-social-width align-items-center h-100">
                                                <img className="w-100" src="/assets/images/logo/line.png" alt="Line login" />
                                            </div>
                                            <div className="d-flex  w-100 justify-content-center">
                                                เข้าสู่ระบบด้วย LINE
                                            </div>
                                        </div>
                                    </button>
                                </div>
                                <div className="col-12 py-3">
                                    <div className="d-flex flex-column h-100 align-items-center">
                                        <div className="w-100 text-center not-signup-text">ยังไม่เคยสมัครมาก่อน</div>
                                        <Link href="/signup">
                                            <a className="signup-button">
                                                สมัครสมาชิกด้วยอีเมล์
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninPresenterComponent;