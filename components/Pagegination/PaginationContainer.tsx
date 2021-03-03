import { connect } from "react-redux";
import Pagegination from "./Pagegination";
import { PageginationPresenter } from "./PageginationInterface";

const pageginationPresenter: PageginationPresenter = {
}

export const pageginationReducer = (state: PageginationPresenter = pageginationPresenter) => {
    return state
}

const mapStateToProps = (state: any) => ({
    pageginationPresenter: state.pageginationReducer
})

export default connect(mapStateToProps)(Pagegination)