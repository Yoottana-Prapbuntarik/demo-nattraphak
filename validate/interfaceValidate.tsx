export interface ErrorField {
    signInEmail: string;
    signInPassword: string;
    emailSigninView: string;
    passwordSigninView: string;
    firstName: string;
    lastName: string;
    gender: string
    birthDate: string;
    emailSignup: string;
    passwordSignup: string;
    confirmPasswordSignup: string;
}

export const regexExpression = {
    regexEmail: new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9./_*/-]+\.[A-Z]{2,4}$/i),
    regexText: new RegExp(/^[a-zA-Z0-9ก-๙/,&./ ]*$/),
    regexTextOrWhiteSpace: new RegExp(/^[a-zA-Z0-9ก-๙/,&.]*$/),
    regexPassword: new RegExp(/^[a-zA-Z0-9]{5,}$/)
};