import { KeyManager } from "../../manager/keyManager";

export enum Field {
    FirstName = 'FirstName',
    LastName = 'LastName',
    Gender = 'Gender',
    BirthDate = 'BirthDate',
}

export const plainTextValidator = (text: string, field: Field) => {
    if (isPlainText(text)) {
        return {
            status: true,
            keyMessage: null
        };
    }
    return {
        status: false,
        keyMessage: keyErrorMessage(field)
    };
};

export const plainTextOrWhitespaceValidator = (text: string, field: Field) => {
    if (isPlainTextAndWhitespace(text)) {
        return {
            status: true,
            keyMessage: null
        };
    }
    return {
        status: false,
        keyMessage: keyErrorMessage(field)
    };
};

const keyErrorMessage = (field: Field) => {
    switch (field) {
        case Field.FirstName:
            return KeyManager.notEmpty;

        case Field.LastName:
            return KeyManager.notEmpty;

        case Field.BirthDate:
            return KeyManager.notEmpty;

        case Field.Gender:
            return KeyManager.notEmpty;

        default:
            return '';
    }
};

const isPlainText = (text: string) => {
    let isHasText = text !== undefined

    if (isHasText) {
        return text.trim().length !== 0
    }

    return isHasText;
};

const isPlainTextAndWhitespace = (text: string) => {
    let isHasText = text !== undefined

    if (isHasText) {
        return text.trim().length !== 0
    }

    return isHasText;
};