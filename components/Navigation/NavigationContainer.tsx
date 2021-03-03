import { connect } from "react-redux";
import Navigation from "./Navigation";
import { NavigationPresenter, NavigationItems } from "./NavigationInterface";
import { SigninActionAPI } from "../../apis/signinAPIClient/signinAPIClient";
const navigationItems: NavigationItems[] = [
    {
        keyTitle: 'หน้าหลัก',
        routePath: '/'
    },
    // {
    //     keyTitle: 'ประเภทสินค้า',
    //     routePath: [
    //         { type: 'เสื้อ', path: 'shirt' },
    //         { type: 'รองเท้า', path: 'shoes' },
    //     ]
    // },
    // {
    //     keyTitle: 'สินค้าทั้งหมด',
    //     routePath: '/product'
    // },
    // {
    //     keyTitle: 'สินค้าใหม่',
    //     routePath: '/'
    // },
]

const navigationPresenter: NavigationPresenter = {
    navigationItems: navigationItems,
    isToggleNav: false,
    dataAPI: ""
}

export const navigationReducer = (
    state: NavigationPresenter = navigationPresenter, action: any
) => {

    switch (action.type) {
        case SigninActionAPI.signSuccess:
            return {
                ...state,
                dataAPI: action.dataAPI
            }

        default:
            return state
    }
}

const mapStateToProps = (state: any) => ({
    navigationPresenter: state.navigationReducer,
    productDetailPresenter: state.productDetailReducer,
})

export default connect(mapStateToProps)(Navigation)