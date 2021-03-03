import {
    CartAction,
    CartPresenter
} from "./CartInterface"
import { clearCart, removeItemFromCart } from "../ProductDetail/ProductDetailAction";
import { loadCart } from "./CartAction";
import { connect } from "react-redux";
import Cart from "./Cart";
import { Dispatch } from "redux";

const cartPresenter: CartPresenter = {
    cart: [],
    total: 0
}

export const cartReducer = (state: CartPresenter = cartPresenter, action: any) => {
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

        default:
            return state;
    }
}

const mapStateToProps = (state: any) => {
    return {
        cartPresenter: state.cartReducer,
        productDetailPresenter: state.productDetailReducer,
        initialState: {

        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clearCart: () => {
        dispatch(clearCart())
    },

    loadCart: (event: any) => {
        dispatch(loadCart(event))
    },

    removeItemFromCart: (event: any) => {
        dispatch(removeItemFromCart(event))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)