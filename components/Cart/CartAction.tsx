import { CartAction } from "./CartInterface";
import { Dispatch } from "redux";

export const loadCart: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: CartAction.loadCart,
        payload: event
    })
}

export const closeTooltip: any = () => (dispatch: Dispatch) => {
    dispatch({
        type: CartAction.closeTooltip,
    })
}
