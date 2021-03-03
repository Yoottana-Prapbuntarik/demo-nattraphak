import service from '../baseAPIs'
import { Dispatch } from 'redux'
export let statusCode: number

export enum SigninActionAPI {
  signSuccess = 'signSuccess',
  signinFailed = 'signinFailed'
}

export const signinAccount: any = (email: string, password: string, isRemember?: boolean) => async (dispatch: Dispatch) => {
  service({
    method: 'post',
    url: 'user/login/',
    data: params(email, password, isRemember)
  })
    .then((response) => {
      if (response) {
        statusCode = response.status        
        dispatch({
          type: SigninActionAPI.signSuccess,
          dataAPI: response.data,
          keyMessage: "เข้าสู่ระบบสำเร็จ"
        })
      }
      localStorage.setItem('access-token', response.data.token)
    })
    .catch((error) => {      
      if (error) {
        statusCode = error.response.status
        dispatch({
          type: SigninActionAPI.signinFailed,
          keyMessage: "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง"
        })
      }
    })
}

const params = (email: string, password: string, isRemember?: boolean) => {
  if (isRemember === undefined) {
    return {
      email: email,
      password: password
    }
  }

  return {
    email: email,
    password: password,
    is_remember: isRemember
  }
}
