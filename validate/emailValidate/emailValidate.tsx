import { regexExpression } from '../interfaceValidate';
import { KeyManager } from '../../manager/keyManager';

export const emailValidator = (email: string) => {
	if (isEmail(email)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.emailInvalid
	};
};

export const emailMatchingValidator = (email: string, confirmEmail: string) => {
	if (isMatching(email, confirmEmail)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.emailNoMatch
	};
};

export const emailAndOptional = (email: string) => {
	if (isEmailAndOptional(email)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.emailNoMatch
	};
};

const isEmail = (email: string) => {
	return regexExpression.regexEmail.test(email);
};

const isEmailAndOptional = (email: string) => {
	return regexExpression.regexEmail.test(email) || email === '' || email === undefined;
};

const isMatching = (email: string, confirmEmail: string) => {
	return email === confirmEmail;
};
