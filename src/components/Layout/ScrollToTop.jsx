import React, { useEffect, useState } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setClicked(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setTimeout(() => setClicked(false), 300);
    }

    return (
        <div className = "fixed bottom-4 right-4 z-50">
            <button className = {`bg-gradient-to-r from-[#28adde] to-[#1b4ce0] hover:opacity-90 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none transition-all duration-300 shadow-lg ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`} onClick = {scrollToTop}>
                <ArrowUpIcon className = {`text-lg w-6 h-6 ${clicked ? "animate-bounce" : ""}`} />
            </button>
        </div>
    )
}

export default ScrollToTop;