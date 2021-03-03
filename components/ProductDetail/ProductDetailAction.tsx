import { ProductDetailAction } from "./ProductDetailInterface";
import { Dispatch } from "redux"

export const addedToCart: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.addItemsToCart,
        payload: event
    })
}

export const removeItemFromCart: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.removeItemFromCart,
        payload: event
    })
}

export const loadCartLocalStorage: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.loadCartLocalStorage,
        payload: event
    })
}

export const handleChangeAmount: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.handleChangeAmount,
        payload: event
    })
}

export const handleChangeColor: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.handleChangeColor,
        payload: event
    })
}

export const handleChangeSize: any = (event: any) => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.handleChangeSize,
        payload: event
    })
}
export const addAmount: any = () => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.addAmount,
    })
}

export const subtractAmount: any = () => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.subtractAmount,
    })
}

export const clearCart: any = () => (dispatch: Dispatch) => {
    dispatch({
        type: ProductDetailAction.clearCart,
    })
}
