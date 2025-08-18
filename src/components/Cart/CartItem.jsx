import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setDecreaseItemQuantity, setIncreaseItemQuantity, setRemoveItemFromCart } from "../../app/CartSlice";

const CartItem = ({ item: { id, title, text, img, color, shadow, price, cartQuantity } }) => {
    const dispatch = useDispatch();

    const onRemoveItemFromCart = () => {
        dispatch(setRemoveItemFromCart({ id, title, text, img, color, shadow, price, cartQuantity }))
    }

    const onIncreaseItemQuantity = () => {
        dispatch(setIncreaseItemQuantity({ id, title, text, img, color, shadow, price, cartQuantity }))
    }

    const onDecreaseItemQuantity = () => {
        dispatch(setDecreaseItemQuantity({ id, title, text, img, color, shadow, price, cartQuantity }))
    }

    return (
        <div className = "flex items-center justify-between w-full px-5">
            <div className = "flex items-center gap-5">
                <div className = {`bg-gradient-to-b ${color} ${shadow} grid items-center relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out`}>
                    <img src = {img} alt = {`img/cart-item/${id}`} className = "w-36 lg:w-28 h-auto object-fill" />
                    <div className  = "absolute top-1 right-1 text-xs px-1 blur-effect-theme bg-white/80 text-black rounded">
                        S/. {price}
                    </div>
                </div>
                <div className = "grid items-center gap-4">
                    <div className = "grid items-center leading-none">
                        <h2 className = "font-medium text-lg lg:text-sm text-slate-900">
                            {title}
                        </h2>
                        <h3 className = "text-sm lg:text-xs text-slate-800">
                            {text}
                        </h3>
                    </div>
                    <div className = "flex items-center justify-around w-full">
                        <button type = "button" className = "flex items-center justify-center w-6 lg:w-5 h-6 lg:h-5 bg-theme-cart rounded active:scale-90" onClick = {onDecreaseItemQuantity}>
                            <MinusIcon className = "w-5 lg:w-4 h-5 lg:h-4 text-white stroke-[2]" />
                        </button>
                        <div className = "flex items-center justify-center w-7 lg:w-6 h-6 lg:h-5 bg-theme-cart rounded text-white font-medium lg:text-xs">
                            {cartQuantity}
                        </div>
                        <button type = "button" className = "flex items-center justify-center w-6 lg:w-5 h-6 lg:h-5 bg-theme-cart rounded active:scale-90" onClick = {onIncreaseItemQuantity}>
                            <PlusIcon className = "w-5 lg:w-4 h-5 lg:h-4 text-white stroke-[2]" />
                        </button>
                    </div>
                </div>
            </div>
            <div className = "grid items-center gap-5">
                <div className = "grid items-center justify-center">
                    <p className = "text-lg lg:text-base text-slate-900 font-medium">
                        S/. {(price * cartQuantity).toFixed(2)}
                    </p>
                </div>
                <div className = "grid items-center justify-center">
                    <button type = "button" className = "bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center" onClick = {onRemoveItemFromCart}>
                        <TrashIcon className = "w-5 h-5 text-white" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartItem;