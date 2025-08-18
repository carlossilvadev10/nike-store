import React from "react";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../../app/CartSlice";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const Item = ({ ifExists, id, title, text, rating, btn, img, imgAlt, price, color, shadow }) => {
    const dispatch = useDispatch();
    const onAddToCart = () => {
        const item = { id, title, text, img, color, shadow, price, }
        dispatch(setAddItemToCart(item));
    }
    const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }));
    }

    return (
        <>
            <div className = {`relative bg-gradient-to-b ${color} ${shadow} w-full grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"} rounded-xl px-5 py-4 transition-all duration-700 ease-in-out hover:scale-105`}>
                <div className = {`grid items-center ${ifExists ? "justify-items-start" : "justify-items-center"}`}>
                    <h2 className = "text-slate-200 text-xl md:text-base lg:text-lg font-medium filter drop-shadow">
                        {title}
                    </h2>
                    <h3 className = "text-slate-200 text-base md:text-sm font-normal filter drop-shadow z-10 text-center">
                        {text}
                    </h3>
                    <div className = "flex items-center justify-between w-28 my-2">
                        <div className = "flex items-center bg-white/80 px-1 rounded blur-effect-theme">
                            <p className = "text-black text-sm font-medium">
                                S/. {price}
                            </p>
                        </div>
                        <div className = "flex items-center gap-1">
                            <StarIcon className = "icon-style w-5 md:w-4 h-5 md:h-4" />
                            <p className = "md:text-sm font-normal text-slate-100">
                                {rating}
                            </p>
                        </div>
                    </div>
                    <div className = "flex items-center gap-3">
                        <button type = "button" className = "bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200" onClick = {() => onAddToCart()}>
                            <ShoppingBagIcon className = "icon-style text-slate-900" />
                        </button>
                        <button type = "button" className = "bg-white/90 blur-effect-theme button-theme text-sm text-black px-2 py-1 shadow shadow-sky-200" onClick = {() => {onAddToCart(); onCartToggle();}}>
                            {btn}
                        </button>
                    </div>
                </div>
                <div className = {`flex items-center ${ifExists ? "absolute top-5 right-1" : "justify-center"}`}>
                    <img src = {img} alt = {`${imgAlt} ${id}`} className = {`transitions-theme hover:rotate-0 ${ifExists ? "h-auto w-64 md:w-48 lg:w-56 -rotate-[25deg]" : "h-36 w-64 z-0"}`} />
                </div>
            </div>
        </>
    )
}

export default Item;