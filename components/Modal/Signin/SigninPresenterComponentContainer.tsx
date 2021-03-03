import {
    EmailField,
    PasswordField,
    SigninPresenter,
    SigninAction,
    EmailFieldView,
    PasswordFieldView,

} from "./SigninInterface";
import Router from "next/router";
import { SigninActionAPI, signinAccount, statusCode } from "../../../apis/signinAPIClient/signinAPIClient";

import SigninPresenterComponent from "./SigninPresenterComponent";
import { connect } from "react-redux";
import { FormManager } from "../../../manager/formManager";
import {
    reduxForm,
    reset,
    actionTypes as formActionTypes

} from "redux-form";
import { Dispatch } from 'redux'
import validate from "../../../validate/signinValidator/signinValidator";
import { routeManager } from "../../../manager/routeManager";
import { InputNameManger } from "../../../manager/inputNameManger";
import { KeyManager } from "../../../manager/keyManager";
const emailField: EmailField = {
    name: InputNameManger.signInEmail,
    placeholder: KeyManager.email,
    emailValue: ''
}
const passwordField: PasswordField = {
    name: InputNameManger.signInPassword,
    placeholder: KeyManager.password,
    passwordValue: ''
}
const emailSigninView: EmailFieldView = {
    name: InputNameManger.emailSigninView,
    placeholder: KeyManager.email,
    emailValueView: ''
}
const passwordSigninView: PasswordFieldView = {
    name: InputNameManger.passwordSigninView,
    placeholder: KeyManager.password,
    passwordValueView: ''
}
const signinPresenter: SigninPresenter = {
    labelSignin: "เข้าสู่ระบบ",
    emailSignin: emailField,
    passwordSignin: passwordField,
    isLoading: false,
    isAcknowledge: false,
    emailSigninView: emailSigninView,
    passwordSigninView: passwordSigninView,
    keyAcknowledge: "",
    isSigninModal: false,
    dataAPI: ""
}

export const signinViewReducer = (state: SigninPresenter = signinPresenter,
    action: any
) => {
    switch (action.type) {
        case SigninActionAPI.signSuccess:
            return {
                ...state,
                emailSigninView: {
                    name: InputNameManger.emailSigninView,
                    placeholder: KeyManager.email,
                    emailValueView: ''
                },

                passwordSigninView: {
                    name: InputNameManger.emailSigninView,
                    placeholder: KeyManager.password,
                    passwordValueView: ''
                },
                isLoading: false,
                keyAcknowledge: action.keyMessage,
                isAcknowledge: true,
                dataAPI: action.dataAPI
            }

        case SigninActionAPI.signinFailed:
            return {
                ...state,
                emailSigninView: {
                    name: InputNameManger.emailSigninView,
                    placeholder: 'อีเมล์',
                    emailValueView: ''
                },

                passwordSigninView: {
                    name: 'passwordSigninView',
                    placeholder: 'รหัสผ่าน',
                    passwordValueView: ''
                },
                isLoading: false,
                keyAcknowledge: action.keyMessage,
                isAcknowledge: true
            }


        case SigninAction.Acknowledge:
            return {
                ...state,
                isLoading: false,
                isAcknowledge: action.payload
            }

        case SigninAction.LoadingPage:
            return {
                ...state,
                isLoading: action.payload
            }

        case SigninAction.HandleChangeEmailView:
            return {
                ...state,
                emailSigninView: {
                    name: InputNameManger.emailSigninView,
                    placeholder: KeyManager.email,
                    emailValueView: action.payload
                }
            }

        case SigninAction.HandleChangePasswordView:
            return {
                ...state,
                passwordSigninView: {
                    name: InputNameManger.passwordSigninView,
                    placeholder: KeyManager.password,
                    passwordValueView: action.payload
                },
            }
        case formActionTypes.INITIALIZE:
            const signinPresenterInit = {
                emailSigninView: {
                    name: InputNameManger.emailSigninView,
                    placeholder: KeyManager.email,
                    emailValueView: state.emailSigninView.emailValueView
                },
                passwordSigninView: {
                    name: InputNameManger.passwordSigninView,
                    placeholder: KeyManager.password,
                    passwordValueView: state.passwordSigninView.passwordValueView
                },

            }
            return {
                ...state,
                signinPresenterInit,
            }
        default:
            return state
    }
}

// Map dispatch to prop
const mapDispatchToProps = (dispatch: Dispatch) => ({
    submitSignin: (event: any) => {
        dispatch({
            type: SigninAction.LoadingPage,
            payload: true
        })
        dispatch(signinAccount(event.emailSigninView, event.passwordSigninView, event.checkbox))
        dispatch(reset(FormManager.SigninFormView))
    },

    acknowledge: (event: any) => {
        dispatch({
            type: SigninAction.Acknowledge,
            payload: event
        })
        dispatch(reset(FormManager.SigninFormView))
        if (statusCode === 200) {
            Router.replace(routeManager.routerToHomepage)
        }
    },
    handleChangeEmailView: (event: any) => {
        dispatch({
            type: SigninAction.HandleChangeEmailView,
            payload: event
        })
    },

    handleChangePasswordView: (event: any) => {
        dispatch({
            type: SigninAction.HandleChangePasswordView,
            payload: event
        })
    }
})

// Map state to prop
const mapStateToProps = (state: any) => {
    return {
        signinViewPresenter: state.signinViewReducer,
        initialValues: {
            "emailSigninView": state.signinViewReducer.emailSigninView.emailValueView,
            "passwordSigninView": state.signinViewReducer.passwordSigninView.passwordValueView
        }
    }
}

const form = reduxForm({
    form: FormManager.SigninFormView,
    shouldValidate: () => true,
    validate
})(SigninPresenterComponent)

export default connect(mapStateToProps, mapDispatchToProps)(form)
