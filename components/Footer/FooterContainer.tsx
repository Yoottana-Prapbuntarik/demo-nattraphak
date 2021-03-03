import { connect } from "react-redux";
import FooterView from "./FooterView"
import { FooterPresenter, SocialContact } from "./FooterInterface";

const socialContact: SocialContact[] = [
    {
        socialImages: '/assets/images/logo/icon-facebook.png',
        routePath: '/'
    },
    {
        socialImages: '/assets/images/logo/icon-instagram.png',
        routePath: '/'
    },
    {
        socialImages: '/assets/images/logo/icon-line.png',
        routePath: '/'
    },
]

const footerPresenter: FooterPresenter = {
    socialContact: socialContact
}

export const footerReducer = (
    state: FooterPresenter = footerPresenter,
) => {

    return state
}


const mapStateToProps = (state: any) => ({
    footerPresenter: state.footerReducer
})

export default connect(mapStateToProps)(FooterView)