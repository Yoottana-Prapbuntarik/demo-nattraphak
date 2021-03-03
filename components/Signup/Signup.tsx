import { Field } from "redux-form";
import SweetAlert from 'react-bootstrap-sweetalert';
import {
    Fragment,
} from "react";
import TextField from "../FieldComponents/TextField";
import ButtonSubmit from "../FieldComponents/ButtonSubmit";
import SelectField from "../FieldComponents/SelectField";
import Loading from "../Loading/LoadingPage";
import "./signup.scss";
const Signup = (
    { signupPresenter,
        acknowledge,
        handleSubmit,
        submitSignup,
        handleChangeFirstName,
        handleChangeLastName,
        handleChangeGender,
        handleChangeBirthDate,
        handleChangeEmail,
        handleChangeConfirmPassword,
        handleChangePassword
    }: any) => {

    const acceptAcknowledge = (bool: boolean) => {
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
                        show={signupPresenter.isAcknowledge}
                        confirmBtnBsStyle="btn text-white mt-5 position-relative position-button"
                        title={"สมัครสมาชิก"}
                        onConfirm={() => acceptAcknowledge(false)}
                    >
                        <span className="detail-popup">{signupPresenter.keyAcknowledge}</span>
                    </SweetAlert>
                    {
                        signupPresenter.isLoadingSignup && <Loading /> 
                    }
                    <div className="col-12 text-center">
                        <h1 className="my-3 title-header-signup">
                            {signupPresenter.labelSignup}
                        </h1>
                        <div className="mt-2 padding-session">
                            <form onSubmit={handleSubmit(submitSignup)} className="signup-form">
                                <div className="row">
                                    <div className="col-lg-6 text-left">
                                        <label>{signupPresenter.firstName.placeholder}</label>
                                        <Field
                                            name={signupPresenter.firstName.name}
                                            type="text"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="w-100 input-box p-2"
                                            currentValue={signupPresenter.firstName.firstNameValue}
                                            label={signupPresenter.firstName.placeholder}
                                            onChange={(event: any) => handleChangeFirstName(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label>{signupPresenter.lastName.placeholder}</label>
                                        <Field
                                            name={signupPresenter.lastName.name}
                                            type="text"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="w-100 input-box p-2"
                                            currentValue={signupPresenter.lastName.lastNameValue}
                                            label={signupPresenter.lastName.placeholder}
                                            onChange={(event: any) => handleChangeLastName(event.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <Field
                                            disabledState={false}
                                            label={signupPresenter.gender.placeholder}
                                            name={signupPresenter.gender.name}
                                            style="w-100 input-box"
                                            currentValue={signupPresenter.gender.genderValue}
                                            component={SelectField}
                                            styleTextError="text-danger"
                                            onChange={(event: any) => handleChangeGender(event.target.value)}
                                        >
                                            {
                                                signupPresenter.genderList.map((genderItems, index: number) => {
                                                    return (
                                                        <Fragment key={index}>
                                                            <option
                                                                value={genderItems.value}
                                                            >
                                                                {genderItems.name}
                                                            </option>
                                                        </Fragment>
                                                    )
                                                })
                                            }

                                        </  Field>
                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label>{signupPresenter.birthDate.placeholder}</label>
                                        <Field
                                            name={signupPresenter.birthDate.name}
                                            type="date"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="w-100 input-box p-2"
                                            currentValue={signupPresenter.birthDate.birthDateValue}
                                            label={signupPresenter.birthDate.placeholder}
                                            onChange={(event: any) => handleChangeBirthDate(event.target.value)}
                                        />

                                    </div>
                                    <div className="col-lg-12 text-left">
                                        <label>{signupPresenter.emailSignup.placeholder}</label>
                                        <Field
                                            name={signupPresenter.emailSignup.name}
                                            type="text"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="w-100 input-box p-2"
                                            currentValue={signupPresenter.emailSignup.emailSignupValue}
                                            label={signupPresenter.emailSignup.placeholder}
                                            onChange={(event: any) => handleChangeEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label>{signupPresenter.passwordSignup.placeholder}</label>
                                        <Field
                                            name={signupPresenter.passwordSignup.name}
                                            type="password"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="w-100 input-box p-2 mb-2"
                                            currentValue={signupPresenter.passwordSignup.passwordSignupValue}
                                            label={signupPresenter.passwordSignup.placeholder}
                                            onChange={(event: any) => handleChangePassword(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-lg-6 text-left">
                                        <label>{signupPresenter.confirmPasswordSignup.placeholder}</label>
                                        <Field
                                            name={signupPresenter.confirmPasswordSignup.name}
                                            type="password"
                                            styleTextError="text-danger"
                                            component={TextField}
                                            className="w-100 input-box p-2 mb-2"
                                            currentValue={signupPresenter.confirmPasswordSignup.passwordConfirmSignupValue}
                                            label={signupPresenter.confirmPasswordSignup.placeholder}
                                            onChange={(event: any) => handleChangeConfirmPassword(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <div className="d-flex flex-column align-items-center">
                                            <Field
                                                name="submit"
                                                type="submit"
                                                style="w-100 text-white mt-2 btn text-white bg-pink btn-signin-modal"
                                                component={ButtonSubmit}
                                                label={signupPresenter.labelSignup}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;