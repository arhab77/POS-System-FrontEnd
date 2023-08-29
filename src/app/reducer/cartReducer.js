const initialState = {
    cart: [],
    subTotalPrice: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                cart: [...action.payload],
                subTotalPrice: subTotal(action.payload)
            };
        case 'GET_CART':
            return {
                ...state,
                cart: [...action.payload],
                subTotalPrice: subTotal(action.payload)
            };
        case 'INC_QUANTITY':
        case 'DEC_QUANTITY':
            return {
                ...state,
                cart: [...action.payload],
                subTotalPrice: subTotal(action.payload)
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: [...action.payload],
                subTotalPrice: subTotal(action.payload)
            };
        default:
            return state;
    }
};

const subTotal = (cartItems) => {
    return cartItems.reduce((total, item) => total + item.product.price * item.qty, 0);
};

export default cartReducer;