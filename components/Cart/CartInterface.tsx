export interface CartPresenter {
    cart: Array<any>;
    total: any;
    cartToggle?:boolean;
    cartTooltipTarget?:string;
}

export enum CartAction {
    loadCart = "loadCart", 
    closeTooltip = "closeTooltip",
    toggleTooltip = "toggleTooltip"
}