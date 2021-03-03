import { Modal } from "react-bootstrap";
import { Field } from "redux-form";
import Link from "next/link";
import SweetAlert from 'react-bootstrap-sweetalert';
import './signin.scss'
import TextField from "../../FieldComponents/TextField";
import ButtonSubmit from "../../FieldComponents/ButtonSubmit";
import Loading from "../../Loading/LoadingPage";
import SocialButton from "../../SocialLogin/SocialButton";
import { SecretKey } from "../../../manager/keyLoginSocial";
const Signin = (
    { signinPresenter,
        disableSigninModalAction,
        acknowledge,
        handleSubmit,
        handleChangeEmail,
        handleChangePassword,
        submitSignin
    }: any) => {
    const acceptAcknowledge = (bool: boolean) => {
        acknowledge(bool);
    };

    const closeModalSignin = async () => {
        await disableSigninModalAction()
    }
    
    return (
        <div>
            <SweetAlert
                custom
                showCloseButton
                confirmBtnText="ตกลง"
                show={signinPresenter.isAcknowledge}
                confirmBtnBsStyle="btn text-white mt-5 position-relative position-button"
                title={"เข้าสู่ระบบ"}
                onConfirm={() => acceptAcknowledge(false)}
            >
                <span className="detail-popup">{signinPresenter.keyAcknowledge}</span>
            </SweetAlert>
            {signinPresenter.isLoading && <Loading />}
            <Modal
                show={signinPresenter.isSigninModal}
                size="sm"
                onHide={disableSigninModalAction}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className="title-popup-signin" id="contained-modal-title-vcenter">
                        {signinPresenter.labelSignin}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="mt-2">
                    <form onSubmit={handleSubmit(submitSignin)}>
                        <Field
                            name={signinPresenter.emailSignin.name}
                            type="text"
                            styleTextError="text-danger"
                            component={TextField}
                            className="w-100 input-box p-2"
                            currentValue={signinPresenter.emailSignin.emailValue}
                            label={signinPresenter.emailSignin.placeholder}
                            onChange={(event: any) => handleChangeEmail(event.target.value)} />
                        <Field
                            name={signinPresenter.passwordSignin.name}
                            type="password"
                            styleTextError="text-danger"
                            component={TextField}
                            className="w-100 input-box p-2 mb-2"
                            currentValue={signinPresenter.passwordSignin.passwordValue}
                            label={signinPresenter.passwordSignin.placeholder}
                            onChange={(event: any) => handleChangePassword(event.target.value)} />
                        <div className="row">
                            <div className="col-12 ">
                                <div className="d-flex h-100 align-items-center justify-content-end">
                                    <Link href="/forgotPassword">
                                        <a className="signup-button">
                                            ลืมรหัสผ่าน
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <Field
                                name="submit"
                                type="submit"
                                style="w-100 text-white mt-2 btn text-white bg-pink btn-signin-modal"
                                component={ButtonSubmit}
                                label={signinPresenter.labelSignin} />
                        </div>
                    </form>

                    <div className="d-flex flex-column align-items-center">
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
                        <div className="d-flex py-2 h-100 align-items-center">
                            <div className="h-100 pt-2">
                                <div className="line-not-signup"></div>
                            </div>
                            <div className="w-100 px-2 pt-2 text-center not-signup-text">ยังไม่เคยสมัครมาก่อน</div>
                            <div className="h-100 pt-2">
                                <div className="line-not-signup"></div>
                            </div>
                        </div>

                        <div className="d-flex">
                            <Link href="/signup">
                                <a className="signup-button" onClick={() => closeModalSignin()}>
                                    สมัครสมาชิกด้วยอีเมล์
                            </a>
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal >
        </div >
    );
}

export default Signin;