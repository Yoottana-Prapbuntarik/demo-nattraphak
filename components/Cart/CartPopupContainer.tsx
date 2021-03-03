import {
    CartAction,
    CartPresenter
} from "./CartInterface"

import { loadCart, closeTooltip } from "./CartAction";
import { connect } from "react-redux";
import Cart from "./CartPopup";
import { Dispatch } from "redux";

let tooltipTarget: any

const cartPresenter: CartPresenter = {
    cart: [],
    total: 0,
    cartToggle: false,
    cartTooltipTarget: ""
}

export const cartPopupReducer = (state: CartPresenter = cartPresenter, action: any) => {
    switch (action.type) {
        case CartAction.loadCart:
            let total = 0;
            action.payload.forEach(item => {
                total += item.price
            });
            return {
                ...state,
                cart: action.payload,
                total: total
            }

        case CartAction.toggleTooltip:
            return {
                ...state,
                cartToggle: !state.cartToggle,
                cartTooltipTarget: action.target
            }

        case CartAction.closeTooltip:
            return {
                ...state,
                cartToggle: false,
            }
        default:
            return state;
    }
}

const mapStateToProps = (state: any) => {
    return {
        cartPresenter: state.cartReducer,
        productDetailPresenter: state.productDetailReducer,
        cartPopupPresenter: state.cartPopupReducer,
        initialState: {

        }
    }
}

export const toggleTooltipTargetCart = (e: any) => {
    tooltipTarget = e.target
}

export const tooltipSearchToggleCart = (dispatch: Dispatch) => {
    dispatch({
        type: CartAction.toggleTooltip,
        target: tooltipTarget
    })
}

const mapDispatchToProps = (dispatch: Dispatch) => ({

    loadCart: (event: any) => {
        dispatch(loadCart(event))
    },

    tooltipSearchToggleCart: tooltipSearchToggleCart,

    closeTooltipCart: () => {
        dispatch(closeTooltip())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)