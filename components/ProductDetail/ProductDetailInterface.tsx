export interface ChooseSize {
    name: string;
    chooseSizeValue: string;
}

export interface ChooseColor {
    name: string;
    chooseColorValue: string;
}

export interface Amount {
    name: string;
    amount: any;
}
export interface ProductDetailPresenter {
    productDetailData: any;
    cart: Array<any>;
    colorList: Array<any>;
    sizeList: Array<any>;
    amount: Amount;
    chooseSize: ChooseSize;
    chooseColor: ChooseColor;
}


export enum ProductDetailAction {
    addItemsToCart = "addItemsToCart",
    handleChangeSize = "handleChangeSize",
    handleChangeColor = "handleChangeColor",
    handleChangeAmount = "handleChangeAmount",
    clearCart = "clearCart",
    addAmount = "addAmount",
    subtractAmount = "subtractAmount",
    loadCartLocalStorage = "loadCartLocalStorage",
    removeItemFromCart = "removeItemFromCart"
}