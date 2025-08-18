import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

const CartCount = ({ quantity, onCartToggle, onClearCartItems }) => {
    return (
        <div className = "bg-white w-full h-10 flex items-center justify-between px-3 sticky top-0 right-0 left-0">
            <div className = "flex items-center gap-3">
                <div className = "grid items-center cursor-pointer" onClick = {onCartToggle}>
                    <ChevronDoubleLeftIcon className = "w-5 h-5 text-slate-900 hover:text-blue-600 stroke-[2]" />
                </div>
                <div className = "grid items-center">
                    <h2 className = "text-base font-medium text-slate-900">
                        Tu bolsa <span className = "bg-theme-cart rounded px-1 py-0.5 text-slate-100 font-normal text-xs">({quantity} Items)</span>
                    </h2>
                </div>
            </div>
            <div className = "flex items-center">
                <button type = "button" className = "rounded bg-theme-cart active:scale-90 p-0.5" onClick = {onClearCartItems}>
                    <XMarkIcon className = "w-5 h-5 text-white stroke-[2]" />
                </button>
            </div>
        </div>
    )
}

export default CartCount;