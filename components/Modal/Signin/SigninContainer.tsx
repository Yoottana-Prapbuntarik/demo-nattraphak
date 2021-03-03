import {
    EmailField,
    PasswordField,
    EmailFieldView,
    PasswordFieldView,
    SigninPresenter,
    SigninAction
} from "./SigninInterface";
import { SigninActionAPI, signinAccount, statusCode } from "../../../apis/signinAPIClient/signinAPIClient";
import Signin from "./Signin";
import { connect } from "react-redux";
import { FormManager } from "../../../manager/formManager";
import { KeyManager } from "../../../manager/keyManager";
import { InputNameManger } from "../../../manager/inputNameManger";
import {
    reduxForm,
    reset
} from "redux-form";

import { Dispatch } from 'redux'
import validate from "../../../validate/signinValidator/signinValidator";
const emailSignin: EmailField = {
    name: InputNameManger.signInEmail,
    placeholder: KeyManager.email,
    emailValue: ''
}
const passwordSignin: PasswordField = {
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
    labelSignin: KeyManager.signin,
    emailSignin: emailSignin,
    passwordSignin: passwordSignin,
    isLoading: false,
    isAcknowledge: false,
    emailSigninView: emailSigninView,
    passwordSigninView: passwordSigninView,
    keyAcknowledge: "",
    isSigninModal: false,
    dataAPI: ""
}

export const signinReducer = (state: SigninPresenter = signinPresenter,
    action: any
) => {
    switch (action.type) {
        case SigninActionAPI.signSuccess:
            return {
                ...state,
                emailSignin: {
                    name: InputNameManger.signInEmail,
                    placeholder: KeyManager.email,
                    emailValue: ''
                },
                passwordSignin: {
                    name: InputNameManger.signInPassword,
                    placeholder: KeyManager.password,
                    passwordValue: ''
                },
                isLoading: false,
                keyAcknowledge: action.keyMessage,
                isAcknowledge: true,
                dataAPI: action.dataAPI
            }

        case SigninActionAPI.signinFailed:
            return {
                ...state,
                emailSignin: {
                    name: InputNameManger.signInEmail,
                    placeholder: KeyManager.email,
                    emailValue: ''
                },
                passwordSignin: {
                    name: InputNameManger.signInPassword,
                    placeholder: KeyManager.password,
                    passwordValue: ''
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

        case SigninAction.HandleChangeEmail:
            return {
                ...state,
                emailSignin: {
                    name: InputNameManger.signInEmail,
                    placeholder: KeyManager.email,
                    emailValue: action.payload
                }
            }

        case SigninAction.HandleChangePassword:
            return {
                ...state,
                passwordSignin: {
                    name: InputNameManger.signInPassword,
                    placeholder: KeyManager.password,
                    passwordValue: action.payload
                }
            }

        case SigninAction.SigninModal:
            return {
                ...state,
                isSigninModal: !state.isSigninModal
            }
        default:
            return state
    }
}

export const signinModalAction = (dispatch: Dispatch) => {
    dispatch({
        type: SigninAction.SigninModal,
    })
}

// Map dispatch to props
const mapDispatchToProps = (dispatch: Dispatch) => ({
    submitSignin: (event: any) => {
        dispatch({
            type: SigninAction.LoadingPage,
            payload: true
        })
        dispatch(signinAccount(event.signInEmail, event.signInPassword, event.checkbox))
        dispatch(reset(FormManager.SigninForm))
    },

    acknowledge: async (event: any) => {
        await dispatch({
            type: SigninAction.Acknowledge,
            payload: event
        })
        await dispatch(reset(FormManager.SigninForm))
        if (statusCode === 200) {
            dispatch({
                type: SigninAction.SigninModal,
            })
        }
    },

    handleChangeEmail: (event: any) => {
        dispatch({
            type: SigninAction.HandleChangeEmail,
            payload: event
        })
    },

    handleChangePassword: (event: any) => {
        dispatch({
            type: SigninAction.HandleChangePassword,
            payload: event
        })
    },
    signinModalAction: signinModalAction,
    disableSigninModalAction: () => {
        dispatch({
            type: SigninAction.SigninModal,
        })
    }

})

// Map state to props
const mapStateToProps = (state: any) => {
    return {
        signinPresenter: state.signinReducer,
    }
}

const signinMapper = connect(mapStateToProps, mapDispatchToProps)(Signin)

const form = reduxForm({
    form: FormManager.SigninForm,
    shouldValidate: () => true,
    validate,
    shouldAsyncValidate: () => true,
})(signinMapper)

export default form
