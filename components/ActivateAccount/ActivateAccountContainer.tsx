import { connect } from 'react-redux';
import { ActivateAccountPresenter } from './ActivateAccountInterface';
import ActivateAccount from './ActivateAccount';
import { verificationAction, verification } from '../../apis/verificationAPIClient/verificationAPIClient';
import { Dispatch } from 'redux';
import { KeyManager } from "../../manager/keyManager";
import Router from 'next/router';
import { routeManager } from "../../manager/routeManager";

const activateAccountPresenter: ActivateAccountPresenter = {
	keyImagePath: '/assets/images/activate/activate.jpg',
	keyTitleActivateAccount: KeyManager.titleActivateAccount,
	keyDetailActivateAccount: KeyManager.detailActivateAccount,
	keyBackToSignin: KeyManager.signin,
	statusCode: undefined
};

export const activateAccountReducer = (state: ActivateAccountPresenter = activateAccountPresenter, action: any) => {
	switch (action.type) {
		case verificationAction.verification_Success:
			if (action.verifyData === 204) {
				Router.replace(routeManager.pageNotFound)
			}
			return {
				...state,
				statusCode: action.verifyData
			};

		default:
			return state;
	}
};

const mapStateToProps = (state: any) => ({
	activateAccountPresenter: state.activateAccountReducer,
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: any) => ({
	verificationUser: () => dispatch(verification(ownProps.tokenID, ownProps.pkId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ActivateAccount);