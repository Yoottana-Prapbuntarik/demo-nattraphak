import { SignupVariable } from "./utils/variable";
import {
    FirstName,
    LastName,
    Gender,
    BirthDate,
    Email,
    Password,
    SignupPresenter,
    SignupAction,
    GenderList,
    ConfirmPassword
} from "./SignupInterface";
import Signup from "./Signup";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { genderSelect } from "./utils/genderSelect";
import { signupAPI, SignupActionAPI, statusCode } from "../../apis/signupAPIClient/signupAPIClient";
import { FormManager } from "../../manager/formManager";
import { routeManager } from "../../manager/routeManager";
import {
    reduxForm,
    reset,
    actionTypes as formActionTypes
} from 'redux-form';
import validate from "../../validate/signupValidate/signupValidate";
import Router from "next/router";
import { InputNameManger } from '../../manager/inputNameManger'
import { KeyManager } from '../../manager/keyManager'

const firstName: FirstName = {
    name: InputNameManger.firstName,
    placeholder: KeyManager.name,
    firstNameValue: ''
}

const lastName: LastName = {
    name: InputNameManger.lastName,
    placeholder: KeyManager.lastName,
    lastNameValue: ''
}

const gender: Gender = {
    name: InputNameManger.gender,
    placeholder: KeyManager.gender,
    genderValue: ''
}

const birthDate: BirthDate = {
    name: InputNameManger.birthDate,
    placeholder: KeyManager.birthday,
    birthDateValue: ''
}

const email: Email = {
    name: InputNameManger.emailSignup,
    placeholder: KeyManager.email,
    emailSignupValue: ''
}

const password: Password = {
    name: InputNameManger.passwordSignup,
    placeholder: KeyManager.password,
    passwordSignupValue: ''
}

const confirmPasswordSignup: ConfirmPassword = {
    name: InputNameManger.confirmPasswordSignup,
    placeholder: KeyManager.confirmPassword,
    passwordConfirmSignupValue: ''
}

const genderList: GenderList[] = [
    {
        name: "ชาย",
        value: "Male"
    },
    {
        name: "หญิง",
        value: "Female"
    },
    {
        name: "อื่นๆ",
        value: "LGBT"
    }
]

const signupPresenter: SignupPresenter = {
    labelSignup: "สร้างบัญชี",
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    birthDate: birthDate,
    emailSignup: email,
    passwordSignup: password,
    confirmPasswordSignup: confirmPasswordSignup,
    isLoadingSignup: false,
    isAcknowledge: false,
    keyAcknowledge: "",
    genderList: genderList
}

export const signupReducer = (state: SignupPresenter = signupPresenter,
    action: any) => {
    switch (action.type) {
        case SignupActionAPI.signupSuccess:
            return {
                ...state,
                firstName: {
                    name: InputNameManger.firstName,
                    placeholder: KeyManager.name,
                    firstNameValue: ''
                },
                lastName: {
                    name: InputNameManger.lastName,
                    placeholder: KeyManager.lastName,
                    lastNameValue: ''
                },
                gender: {
                    name: InputNameManger.gender,
                    placeholder: KeyManager.gender,
                    genderValue: ''
                },
                birthDate: {
                    name: InputNameManger.birthDate,
                    placeholder: KeyManager.birthday,
                    birthDateValue: ''
                },
                emailSignup: {
                    name: InputNameManger.emailSignup,
                    placeholder: KeyManager.email,
                    emailSignupValue: ''
                },
                passwordSignup: {
                    name: InputNameManger.passwordSignup,
                    placeholder: KeyManager.password,
                    passwordSignupValue: ''
                },
                confirmPasswordSignup: {
                    name: InputNameManger.confirmPasswordSignup,
                    placeholder: KeyManager.confirmPassword,
                    passwordConfirmSignupValue: ''
                },
                isLoadingSignup: false,
                keyAcknowledge: action.keyMessage,
                isAcknowledge: true
            }
        case SignupActionAPI.signupFailed:
            return {
                ...state,
                isLoadingSignup: false,
                keyAcknowledge: action.keyMessage,
                isAcknowledge: true
            }
        case SignupAction.Acknowledge:
            return {
                ...state,
                isLoadingSignup: false,
                isAcknowledge: action.payload,
            }

        case SignupAction.LoadingPage:
            return {
                ...state,
                isLoadingSignup: action.payload
            }

        case SignupAction.HandleChangeFirstName:
            return {
                ...state,
                firstName: {
                    name: InputNameManger.firstName,
                    placeholder: KeyManager.name,
                    firstNameValue: action.payload
                }
            }
        case SignupAction.HandleChangeLastName:
            return {
                ...state,
                lastName: {
                    name: InputNameManger.lastName,
                    placeholder: KeyManager.lastName,
                    lastNameValue: action.payload
                }
            }

        case SignupAction.HandleChangeGender:
            return {
                ...state,
                gender: {
                    name: InputNameManger.gender,
                    placeholder: KeyManager.gender,
                    genderValue: action.payload
                }
            }

        case SignupAction.HandleChangeBirthDate:
            return {
                ...state,
                birthDate: {
                    name: InputNameManger.birthDate,
                    placeholder: KeyManager.birthday,
                    birthDateValue: action.payload
                }
            }

        case SignupAction.HandleChangeEmailSignup:
            return {
                ...state,
                emailSignup: {
                    name: InputNameManger.emailSignup,
                    placeholder: KeyManager.email,
                    emailSignupValue: action.payload
                }
            }

        case SignupAction.HandleChangePasswordSignup:
            return {
                ...state,
                passwordSignup: {
                    name: InputNameManger.passwordSignup,
                    placeholder: KeyManager.password,
                    passwordSignupValue: action.payload
                }
            }

        case SignupAction.HandleChangeConfirmPassword:
            return {
                ...state,
                confirmPasswordSignup: {
                    name: InputNameManger.confirmPasswordSignup,
                    placeholder: KeyManager.confirmPassword,
                    passwordConfirmSignupValue: action.payload
                }
            }

        case formActionTypes.INITIALIZE:
            const signupPresenterInit = {
                gender: {
                    name: InputNameManger.gender,
                    placeholder: KeyManager.gender,
                    genderValue: state.gender.genderValue
                },
            }
            return {
                ...state,
                signupPresenterInit,
            }

        default:
            return state
    }
}

// // Map state to props
const mapStateToProps = (state: any) => {
    let selectGender = genderSelect(state.signupReducer.gender.value)
    let initGender = state.signupReducer.gender.genderValue = selectGender.value
    return {
        signupPresenter: state.signupReducer,
        initialValues: {
            "gender": initGender,
        }
    }
}

// Map dispatch To Props
const mapDispatchToProps = (dispatch: Dispatch) => ({
    handleChangeFirstName: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangeFirstName,
            payload: event
        })
    },

    handleChangeLastName: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangeLastName,
            payload: event
        })
    },

    handleChangeGender: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangeGender,
            payload: event
        })
    },

    handleChangeBirthDate: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangeBirthDate,
            payload: event
        })
    },

    handleChangeEmail: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangeEmailSignup,
            payload: event
        })
    },

    handleChangePassword: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangePasswordSignup,
            payload: event
        })
    },

    handleChangeConfirmPassword: (event: any) => {
        dispatch({
            type: SignupAction.HandleChangeConfirmPassword,
            payload: event
        })
    },
    submitSignup: (event: any) => {
        dispatch({
            type: SignupAction.LoadingPage,
            payload: true
        })
        dispatch(signupAPI(
            event.emailSignup,
            event.passwordSignup,
            event.firstName,
            event.lastName,
            event.gender,
            event.birthDate,
            event.confirmPasswordSignup
        ))
    },

    acknowledge: (event: any) => {
        dispatch({
            type: SignupAction.Acknowledge,
            payload: event
        })
        if (statusCode !== SignupVariable.BAD_REQUEST) {
            dispatch(reset(FormManager.SignupForm))
            Router.replace(routeManager.routerToHomepage)
        }
    },
})

const form = reduxForm({
    form: FormManager.SignupForm,
    validate,
    shouldValidate: () => true,
    shouldAsyncValidate: () => true,
})(Signup)

export default connect(mapStateToProps, mapDispatchToProps)(form)