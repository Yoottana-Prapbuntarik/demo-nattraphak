import { FormErrors } from 'redux-form';
import { ErrorField } from '../interfaceValidate';
import { emailValidator } from '../emailValidate/emailValidate';
import { passwordValidator, passwordMatchingValidator } from "../passwordValidate/passwordValidate";
import { plainTextValidator, Field } from "../painTextValidate/painTextValidate";
const validate = (signupInformation: any): FormErrors => {
    let errors: FormErrors<ErrorField> = {};

    let firstNameValidatorResult = plainTextValidator(signupInformation.firstName, Field.FirstName);

    if (!firstNameValidatorResult.status) {
        errors.firstName = firstNameValidatorResult.keyMessage;
    }

    let lastNameValidatorResult = plainTextValidator(signupInformation.lastName, Field.LastName);

    if (!lastNameValidatorResult.status) {
        errors.lastName = lastNameValidatorResult.keyMessage;
    }

    let genderValidatorResult = plainTextValidator(signupInformation.gender, Field.Gender);
    if (!genderValidatorResult.status) {
        errors.gender = genderValidatorResult.keyMessage;
    }

    let birthDateValidatorResult = plainTextValidator(signupInformation.birthDate, Field.BirthDate);
    if (!birthDateValidatorResult.status) {
        errors.birthDate = birthDateValidatorResult.keyMessage;
    }

    let emailValidatorResult = emailValidator(signupInformation.emailSignup);
    if (!emailValidatorResult.status) {
        errors.emailSignup = emailValidatorResult.keyMessage;
    }

    let passwordValidatorResult = passwordValidator(signupInformation.passwordSignup);

    if (!passwordValidatorResult.status) {
        errors.passwordSignup = passwordValidatorResult.keyMessage;
    }

    let passwordMatchingValidatorResult = passwordMatchingValidator(
        signupInformation.passwordSignup,
        signupInformation.confirmPasswordSignup
    );

    if (!passwordMatchingValidatorResult.status) {
        errors.confirmPasswordSignup = passwordMatchingValidatorResult.keyMessage;
    }

    return errors;
};

export default validate;
