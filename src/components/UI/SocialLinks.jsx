import React from "react";

const SocialLinks = ({ icon, alt }) => {
    return (
        <>
            <img src = {icon} alt = {alt} className = "w-8 sm:w-5 md:w-6 h-8 sm:h-5 md:h-6 flex items-center cursor-pointer transition-all duration-200 hover:scale-110 z-10" />
        </>
    )
}

export default SocialLinks;