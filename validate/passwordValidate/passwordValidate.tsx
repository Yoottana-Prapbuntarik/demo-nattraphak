import {regexExpression } from "../../validate/interfaceValidate";
import { KeyManager } from '../../manager/keyManager';

export const passwordValidator = (password: string) => {
	if (isPassword(password)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.passwordInvalid
	};
};

export const passwordMatchingValidator = (password: string, confirmPassword: string) => {
	if (isMatching(password, confirmPassword)) {
		return {
			status: true,
			keyMessage: null
		};
	}

	return {
		status: false,
		keyMessage: KeyManager.passwordNoMatch
	};
};

const isPassword = (password: string) => {
	return regexExpression.regexPassword.test(password) && password !== undefined;
};

const isMatching = (password: string, confirmPassword: string) => {
	return password === confirmPassword;
};
