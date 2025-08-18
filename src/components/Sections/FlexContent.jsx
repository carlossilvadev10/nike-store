import React from "react";

const FlexContent = ({ endpoint: { heading, title, text, btn, url, img, imgAlt }, ifExists }) => {
    return (
        <>
            <div className = {`nike-container flex items-center justify-around my-2 lg:justify-center ${ifExists ? "flex-row-reverse" : "flex-row"} lg:flex-col`}>
                <div className = "max-w-lg lg:max-w-none w-full text-justify md:text-center grid items-center lg:justify-items-center">
                    <h2 className = "text-4xl sm:text-3xl font-bold text-gradient">
                        {heading}
                    </h2>
                    <h3 className = "text-5xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 filter drop-shadow-lg">
                        {title}
                    </h3>
                    <p className = "xl:text-sm my-4 text-slate-900">
                        {text}
                    </p>
                    <a href = {url} target = "_blank" role = "button" className = "flex items-center button-theme bg-slate-900 shadow-slate-900 text-slate-100 py-1.5 w-max">
                        {btn}
                    </a>
                </div>
                <div className = "flex items-center justify-center w-full max-w-xl lg:max-w-none relative">
                    <img src = {img} alt = {imgAlt} className = {`w-auto object-fill transitions-theme ${ifExists ? "h-60 xsm:h-44 sm:h-48 md:h-52 lg:h-56 rotate-12 hover:rotate-0" : "h-68 xsm:h-52 sm:h-56 md:h-60 lg:h-64 rotate-12 hover:rotate-0"}`} />
                </div>
            </div>
        </>
    )
}

export default FlexContent;