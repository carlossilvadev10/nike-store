import React from "react";
import Clips from "../UI/Clips";
import SocialLinks from "../UI/SocialLinks";

const Hero = ( { heroAPI: { title, subtitle, btnText, img, alt, socialLinks, videos } }) => {
    return (
        <>
            <div className = "relative h-auto w-auto flex flex-col mb-5">
                <div className = "bg-theme clip-path w-auto h-[85vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] absolute top-0 right-0 left-0 opacity-100 z-10" />
                <div className = "relative opacity-100 z-10">
                    <div className = "nike-container relative opacity-100 z-20 grid items-center justify-items-center">
                        <div className = "grid items-center justify-items-center mt-24">
                            <h1 className = "text-6xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold filter drop-shadow-sm text-slate-200 capitalize">
                                {title}
                            </h1>
                            <h2 className = "text-6xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-extrabold filter drop-shadow-sm text-slate-200">
                                {subtitle}
                            </h2>
                            <button type = "button" className = "button-theme bg-slate-200 shadow-slate-200 rounded-xl my-5">
                                {btnText}
                            </button>
                            <div className = "absolute w-auto h-auto grid items-center md:gap-3 gap-5 top-[33vh] sm:top-[32vh] lg:top-[30vh] left-36 xl:left-0">
                                {
                                    videos.map((video, i) => (
                                        <Clips key = {i} imgSrc = {video.imgSrc} imgAlt = {video.imgAlt} clip = {video.clip} />
                                    ))
                                }
                            </div>
                            <div className = "grid items-center absolute top-[40vh] lg:top-[34vh] right-36 xl:right-0 gap-5">
                                {
                                    socialLinks.map((social, i) => (
                                        <SocialLinks key = {i} icon = {social.icon} alt = {social.alt} />
                                    ))
                                }
                            </div>
                        </div>
                        <div className = "">
                            <img src = {img} alt = {alt} className = "w-auto h-[45vh] xsm:h-[20vh] sm:h-[25vh] md:h-[30vh] lg:h-[35vh] transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;