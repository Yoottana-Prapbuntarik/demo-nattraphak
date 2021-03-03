export const saveCartToLocalStorage = (state: any) => {
    try {
        
        if (state.productDetailReducer.cart.length === 0) { return; }
        else {   
            const serialisedState = JSON.stringify(state.productDetailReducer.cart);
            localStorage.setItem("persistantCart", serialisedState);
        }
    } catch (e) {
        console.warn(e);
    }
}

export const loadCartFromLocalStorage = (): any => {
    try {
        const serialisedState = localStorage.getItem("persistantCart");
        if (serialisedState === null) return undefined;
        return JSON.parse(serialisedState);
    } catch (e) {
        console.warn(e);
        return undefined;
    }
}