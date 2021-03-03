import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from 'redux-form';
import { navigationReducer } from "../components/Navigation/NavigationContainer";
import { footerReducer } from "../components/Footer/FooterContainer";
import { pageginationReducer } from "../components/Pagegination/PaginationContainer";
import { signinReducer } from "../components/Modal/Signin/SigninContainer";
import { signinViewReducer } from "../components/Modal/Signin/SigninPresenterComponentContainer";
import { signupReducer } from "../components/Signup/SignupContainer";
import { activateAccountReducer } from "../components/ActivateAccount/ActivateAccountContainer";
import { pageNotFoundContainerReducer } from "../components/PageNorFound/PageNotFoundContainer";
import { searchReducer } from "../components/Search/SearchContainer";
import { searchPageContainer } from "../components/Search/SearchPageContainer";
import { productDetailReducer } from "../components/ProductDetail/ProductDetailContainer";
import { cartReducer } from "../components/Cart/CartContainer";
import { cartPopupReducer } from "../components/Cart/CartPopupContainer";

export interface initialState { }

const rootReducers = combineReducers({
  navigationReducer: navigationReducer,
  footerReducer: footerReducer,
  pageginationReducer: pageginationReducer,
  signupReducer: signupReducer,
  signinReducer: signinReducer,
  signinViewReducer: signinViewReducer,
  activateAccountReducer: activateAccountReducer,
  pageNotFoundContainerReducer: pageNotFoundContainerReducer,
  searchReducer: searchReducer,
  searchPageContainer: searchPageContainer,
  productDetailReducer: productDetailReducer,
  cartReducer: cartReducer,
  cartPopupReducer: cartPopupReducer,
  form: reduxFormReducer
});

export default rootReducers;