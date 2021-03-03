import { connect } from 'react-redux';
import { PageNotFoundPresenter } from './PageNotFoundInterface';
import PageNotFound from "./PageNotFound";
const pageNotFoundPresenter: PageNotFoundPresenter = {
    keyImagePath: '/assets/images/notFound/no-data.jpg',
};

export const pageNotFoundContainerReducer = (state: PageNotFoundPresenter = pageNotFoundPresenter) => {
    return state;
};

const mapStateToProps = (state: any) => ({
    pageNotFoundPresenter: state.pageNotFoundContainerReducer,
});

export default connect(mapStateToProps)(PageNotFound);