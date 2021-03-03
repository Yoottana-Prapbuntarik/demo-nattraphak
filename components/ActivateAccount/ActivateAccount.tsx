import Router from 'next/router';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { routeManager } from "../../manager/routeManager";
import LoadingPage from "../Loading/LoadingPage";

const ActivateAccount = ({ activateAccountPresenter, verificationUser }: any) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(verificationUser);
	}, []);
	return (
		<Fragment>
			{
				activateAccountPresenter.statusCode === undefined &&
				<LoadingPage />
			}
			{
				activateAccountPresenter.statusCode === 200 &&
				< div className="container my-5">
					<div className="row align-items-center">
						<div className="col-lg-6 col-12 my-3 text-center">
							<img
								className="img-responsive w-100"
								src={activateAccountPresenter.keyImagePath}
								alt="img activate account"
							/>
						</div>
						<div className="col-lg-6 col-12 my-3 text-center">
							<h1>{activateAccountPresenter.keyTitleActivateAccount}</h1>
							<p>{activateAccountPresenter.keyDetailActivateAccount}</p>
							<button className="btn btn-pink" onClick={() => Router.replace(routeManager.routerToHomepage)}>
								{activateAccountPresenter.keyBackToSignin}
							</button>
						</div>
					</div>
				</div>

			}
		</Fragment >
	);
};

export default ActivateAccount;