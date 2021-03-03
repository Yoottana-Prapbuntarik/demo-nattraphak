const PageNotFound = ({ pageNotFoundPresenter}: any) => {

	return (
		<div className="container my-5">
			<div className="row align-items-center justify-content-center">
				<div className="col-lg-6 col-12 my-3">
					<img
						className="img-responsive w-100"
						src={pageNotFoundPresenter.keyImagePath}
						alt="Not Found Data"
					/>
				</div>
			</div>
		</div>
	);
};

export default PageNotFound;