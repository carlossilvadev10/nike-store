import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
    cartState: false,
    cartItems: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
    cartTotalAmount: 0,
    cartTotalQuantity: 0,
};

const cartSlice = createSlice({
    initialState,
    name: "cart",
    reducers: {
        setOpenCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setCloseCart: (state, action) => {
            state.cartState = action.payload.cartState;
        },
        setAddItemToCart: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const item = state.cartItems[itemIndex];
                item.cartQuantity += 1;
                toast.success(`Cantidad aumentada. ${item.title} x${item.cartQuantity}`, { duration: 2000, style: { textAlign: "center" } } );
            } else {
                const temp = { ...action.payload, cartQuantity: 1 };
                state.cartItems.push(temp);
                toast.success(`${action.payload.title} agregado al carrito`, { duration: 2000, style: { textAlign: "center" } } );
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setRemoveItemFromCart: (state, action) => {
            const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = removeItem;
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.title} eliminado del carrito`, { duration: 2000, style: { textAlign: "center" } } );
        },
        setIncreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const item = state.cartItems[itemIndex];
                item.cartQuantity += 1;
                toast.success(`Cantidad aumentada. ${item.title} x${item.cartQuantity}`, { duration: 2000, style: { textAlign: "center" } } );
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setDecreaseItemQuantity: (state, action) => {
            const itemIndex = state.cartItems.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                const item = state.cartItems[itemIndex];
                if (item.cartQuantity > 1) {
                    item.cartQuantity -= 1;
                    toast.success(`Cantidad disminuida. ${item.title} x${item.cartQuantity}`, { duration: 2000, style: { textAlign: "center" } } );
                } else {
                    const removeItem = state.cartItems.filter((item) => item.id !== action.payload.id);
                    state.cartItems = removeItem;
                    toast.success(`${item.title} eliminado del carrito`, { duration: 2000, style: { textAlign: "center" } } );
                }
            }
            localStorage.setItem("cart", JSON.stringify(state.cartItems));
        },
        setClearCartItems: (state) => {
            if (state.cartItems.length > 0) {
                state.cartItems = [];
                localStorage.setItem("cart", JSON.stringify(state.cartItems));
                toast.success("Carrito vaciado", { duration: 2000, style: { textAlign: "center" } });
            }
        },
        setGetTotals: (state) => {
            let { total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
                const { price, cartQuantity } = cartItem;
                const totalPrice = price * cartQuantity;
                cartTotal.total += totalPrice;
                cartTotal.quantity += cartQuantity;
                return cartTotal;
            }, { total: 0, quantity: 0 });
            state.cartTotalAmount = parseFloat(total.toFixed(2));
            state.cartTotalQuantity = quantity;
        },
    },
});

export const { setOpenCart, setCloseCart, setAddItemToCart, setIncreaseItemQuantity, setDecreaseItemQuantity, setClearCartItems, setRemoveItemFromCart, setGetTotals } = cartSlice.actions;
export const selectCartState = (state) => state.cart.cartState;
export const selectCartItems = (state) => state.cart.cartItems;
export const selectCartTotalAmount = (state) => state.cart.cartTotalAmount;
export const selectCartTotalQuantity = (state) => state.cart.cartTotalQuantity;
export default cartSlice.reducer;