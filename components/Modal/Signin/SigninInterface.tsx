export interface EmailField {
    name: string;
    placeholder: string;
    emailValue: string;
}

export interface PasswordField {
    name: string;
    placeholder: string;
    passwordValue: string;
}

export interface EmailFieldView {
    name: string;
    placeholder: string;
    emailValueView: string;
}

export interface PasswordFieldView {
    name: string;
    placeholder: string;
    passwordValueView: string;
}

export interface SigninPresenter {
    readonly labelSignin: string;
    emailSignin: EmailField;
    passwordSignin: PasswordField;
    emailSigninView: EmailFieldView;
    passwordSigninView: PasswordFieldView;
    isLoading: boolean;
    isAcknowledge: boolean;
    keyAcknowledge: string;
    isSigninModal: boolean;
    dataAPI: any;
}

export enum SigninAction {
    Acknowledge = "acknowledge",
    LoadingPage = "isLoading",
    HandleChangeEmail = "HandleChangeEmail",
    HandleChangePassword = "HandleChangePassword",
    HandleChangeEmailView = "HandleChangeEmailView",
    HandleChangePasswordView = "HandleChangePasswordView",
    SigninModal = "SigninModal",
}