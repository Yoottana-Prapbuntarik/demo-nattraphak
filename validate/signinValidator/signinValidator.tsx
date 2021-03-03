import { FormErrors } from 'redux-form';
import { ErrorField } from '../interfaceValidate';
import { emailValidator } from '../emailValidate/emailValidate';
import { passwordValidator } from "../passwordValidate/passwordValidate";

const validate = (signinInformation: any): FormErrors => {
	let errors: FormErrors<ErrorField> = {};
	
	let emailValidatorResult = emailValidator(signinInformation.signInEmail);

	if (!emailValidatorResult.status) {
		errors.signInEmail = emailValidatorResult.keyMessage;
	}

	let emailSigninViewValidatorResult = emailValidator(signinInformation.emailSigninView);

	if (!emailSigninViewValidatorResult.status) {
		errors.emailSigninView = emailSigninViewValidatorResult.keyMessage;
	}

	let passwordValidatorResult = passwordValidator(signinInformation.signInPassword);

	if (!passwordValidatorResult.status) {
		errors.signInPassword = passwordValidatorResult.keyMessage;
	}

	let passwordSigninViewValidatorResult = passwordValidator(signinInformation.passwordSigninView);

	if (!passwordSigninViewValidatorResult.status) {
		errors.passwordSigninView = passwordSigninViewValidatorResult.keyMessage;
	}

	return errors;
};

export default validate;
