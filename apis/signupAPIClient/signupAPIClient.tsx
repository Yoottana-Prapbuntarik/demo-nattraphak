import service from '../baseAPIs'
import { Dispatch } from 'redux'

export let statusCode: number

export enum SignupActionAPI {
    signupSuccess = 'signupSuccess',
    signupFailed = 'signupFailed'
}

export const signupAPI: any = (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthDate: string,
) => async (dispatch: Dispatch) => {
    service({
        method: 'post',
        url: 'user/register/',
        data: params(
            email,
            password,
            firstName,
            lastName,
            gender,
            birthDate,
        )
    })
        .then((response) => {
            if (response) {
                statusCode = response.status
                dispatch({
                    type: SignupActionAPI.signupSuccess,
                    dataAPI: response.data,
                    keyMessage: "สมัครสมาชิกสำเร็จ! โปรดตรวจสอบอีเมลล์"
                })
            }
        })
        .catch((error) => {
            if (error) {
                statusCode = error.response.status
                dispatch({
                    type: SignupActionAPI.signupFailed,
                    keyMessage: "สมัครสมาชิกไม่สำเร็จ"
                })
            }
        })
}

const params = (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    birthDate: string,
) => {
    return {
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        gender: gender,
        birthdate: birthDate
    }
}
