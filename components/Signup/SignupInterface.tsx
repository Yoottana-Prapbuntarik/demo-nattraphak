export interface Email {
    name: string;
    placeholder: string;
    emailSignupValue: string;
}

export interface FirstName {
    name: string;
    placeholder: string;
    firstNameValue: string;
}

export interface LastName {
    name: string;
    placeholder: string;
    lastNameValue: string;
}

export interface Gender {
    name: string;
    placeholder: string;
    genderValue: string;
}

export interface BirthDate {
    name: string;
    placeholder: string;
    birthDateValue: string;
}


export interface Password {
    name: string;
    placeholder: string;
    passwordSignupValue: string;
}

export interface ConfirmPassword {
    name: string;
    placeholder: string;
    passwordConfirmSignupValue: string;
}

export interface GenderList {
    name: string;
    value: string;
} 

export interface SignupPresenter {
    readonly labelSignup: string;
    firstName: FirstName;
    lastName: LastName;
    gender: Gender;
    birthDate: BirthDate;
    emailSignup: Email;
    passwordSignup: Password;
    confirmPasswordSignup: ConfirmPassword;
    isLoadingSignup: boolean;
    isAcknowledge: boolean;
    keyAcknowledge: string;
    genderList: GenderList[];
}

export enum SignupAction {
    Acknowledge = "acknowledge",
    LoadingPage = "LoadingPage",
    HandleChangeEmailSignup = "HandleChangeEmailSignup",
    HandleChangeFirstName = "HandleChangeFirstName",
    HandleChangeLastName = "HandleChangeLastName",
    HandleChangeGender = "HandleChangeGender",
    HandleChangeBirthDate = "HandleChangeBirthDate",
    HandleChangePasswordSignup = "HandleChangePasswordSignup",
    HandleChangeConfirmPassword = "HandleChangeConfirmPassword"
}