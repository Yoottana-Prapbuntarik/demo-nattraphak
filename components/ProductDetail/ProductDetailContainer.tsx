import {
    ProductDetailPresenter,
    ProductDetailAction,
    ChooseSize,
    ChooseColor,
    Amount
} from "./ProductDetailInterface";
import { connect } from "react-redux";
import ProductDetail from "./ProductDetail";
import { Dispatch } from "redux";
import {
    addedToCart,
    handleChangeAmount,
    handleChangeColor,
    handleChangeSize,
    addAmount,
    subtractAmount
} from "./ProductDetailAction";
import { FormManager } from "../../manager/formManager";
import {
    reduxForm,
    actionTypes as formActionTypes
} from 'redux-form';

const chooseSize: ChooseSize = {
    name: 'chooseSize',
    chooseSizeValue: 'S'
}
const chooseColor: ChooseColor = {
    name: 'chooseColor',
    chooseColorValue: 'Red'
}

const amount: Amount = {
    name: 'amount',
    amount: 1
}

const productDetailPresenter: ProductDetailPresenter = {
    productDetailData: {},
    cart: [],
    colorList: ["สีแดง", "สีเขียว", "สีน้ำเงิน",],
    sizeList: ["S", "M", "L", "XL"],
    amount: amount,
    chooseSize: chooseSize,
    chooseColor: chooseColor
}
export const productDetailReducer = (
    state: ProductDetailPresenter = productDetailPresenter,
    action: any
) => {

    switch (action.type) {
        case ProductDetailAction.loadCartLocalStorage:
            return {
                ...state,
                cart: action.payload
            }

        case ProductDetailAction.removeItemFromCart:
            if (state.cart.length === 1) {
                localStorage.removeItem('persistantCart')
            }
            let filterNotSameItem = state.cart.filter(item => item.id !== action.payload)
            return {
                ...state,
                cart: state.cart = filterNotSameItem
            }

        case ProductDetailAction.addItemsToCart:
            let addedNewItems = state.cart
            let filterSameItem = state.cart.find(item => item.id === action.payload.id)

            if (filterSameItem !== undefined) {
                let filterNotSameItem = state.cart.filter(item => item.id !== action.payload.id)
                filterSameItem.sizeItems.push(action.payload.chooseSize)
                filterSameItem.colorItems.push(action.payload.chooseColor)
                // Update property
                filterSameItem.amount = filterSameItem.amount + action.payload.amount
                filterSameItem.price = filterSameItem.price + action.payload.price
                filterNotSameItem.push(filterSameItem)
                addedNewItems = filterNotSameItem
                state.amount.amount = 1
            } else {

                // Update property
                action.payload.sizeItems = []
                action.payload.colorItems = []
                action.payload.sizeItems.push(action.payload.chooseSize)
                action.payload.colorItems.push(action.payload.chooseColor)
                addedNewItems.push(action.payload)
            }

            return {
                ...state,
                cart: addedNewItems,
                amount: {
                    name: 'amount',
                    amount: 1
                }
            }

        case ProductDetailAction.clearCart:
            localStorage.removeItem('persistantCart')
            return {
                ...state,
                cart: []
            }

        case ProductDetailAction.handleChangeAmount:
            let amount: number

            if (parseInt(action.payload) < 0) {
                amount = parseInt(action.payload) * -1
            } else if (parseInt(action.payload) === 0) {
                amount = 1
            } else {
                amount = parseInt(action.payload)
            }

            return {
                ...state,
                amount: {
                    name: 'amount',
                    amount: amount
                }
            }

        case ProductDetailAction.handleChangeColor:
            return {
                ...state,
                chooseColor: {
                    name: 'chooseColor',
                    chooseColorValue: action.payload
                }
            }

        case ProductDetailAction.handleChangeSize:
            return {
                ...state,
                chooseSize: {
                    name: 'chooseSize',
                    chooseSizeValue: action.payload
                }
            }

        case ProductDetailAction.addAmount:
        
            let addAmount = state.amount.amount + 1
            return {
                ...state,
                amount: {
                    name: 'amount',
                    amount: addAmount
                }
            }

        case ProductDetailAction.subtractAmount:

            let subtractAmount = state.amount.amount - 1
            return {
                ...state,
                amount: {
                    name: 'amount',
                    amount: subtractAmount
                }
            }


        case formActionTypes.INITIALIZE:
            const productDetailPresenterInit = {

                chooseSize: {
                    name: 'chooseSize',
                    chooseSizeValue: state.chooseSize.chooseSizeValue
                },
                chooseColor: {
                    name: 'chooseColor',
                    chooseColorValue: state.chooseColor.chooseColorValue
                }
            }
            return {
                ...state,
                productDetailPresenterInit,
            }

        default:
            return state;
    }
}


const mapStateToProps = (state: any) => {

    return {
        productDetailPresenter: state.productDetailReducer,
        initialValues: {
            "chooseSize": state.productDetailReducer.chooseSize.chooseSizeValue,
            "chooseColor": state.productDetailReducer.chooseColor.chooseColorValue,
            "amount": state.productDetailReducer.amount.amount
        }
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addedToCart: (event: any) => {
        dispatch(addedToCart(event))
    },
    handleChangeAmount: (event: any) => {
        dispatch(handleChangeAmount(event))
    },
    handleChangeColor: (event: any) => {
        dispatch(handleChangeColor(event))
    },
    handleChangeSize: (event: any) => {
        dispatch(handleChangeSize(event))
    },
    addAmount: (): any => {
        dispatch(addAmount())
    },
    subtractAmount: (): any => {
        dispatch(subtractAmount())
    },
})

const form = reduxForm({
    form: FormManager.Cart,
    enableReinitialize: true,
    keepDirtyOnReinitialize: true
})(ProductDetail)

export default connect(mapStateToProps, mapDispatchToProps)(form)