import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";

const Clips = ({ imgSrc, imgAlt, clip }) => {
    return (
        <>
            <div className = "relative w-32 sm:w-20 md:w-24 lg:w-28 h-28 sm:h-16 md:h-20 lg:h-24 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300">
                <img src = {imgSrc} alt = {imgAlt} className = "absolute inset-0 flex w-full h-full top-0 right-0 left-0 rounded-xl opacity-100 object-cover transition-opacity duration-500 z-10" />
                <div className = "bg-white blur-effect-theme w-8 md:w-5 h-8 md:h-5 flex items-center justify-center rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 z-[100]">
                    <PlayIcon className = "icon-style md:w-3 md:h-3 text-slate-900" />
                </div>
                <video autoPlay = {true} loop = {true} muted = {true} playsInline = {true} className = "absolute top-0 right-0 left-0 flex w-full h-full object-cover group-hover:opacity-100 group-hover:z-50 opacity-0 rounded-xl z-0">
                    <source src = {clip} type = "video/mp4" />
                </video>
            </div>
        </>
    )
}

export default Clips;