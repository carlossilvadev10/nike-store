import React from "react";
import Title from "../UI/Title";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ClockIcon, HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { truncate } from "lodash";
import "@splidejs/react-splide/css";

const Stories = ({ story: { title, news } }) => {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: "loop",
        rewind: true,
        keyboard: "global",
        gap: "1rem",
        pagination: false,
        padding: "2rem",
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        breakpoints: {
            1200: { perPage: 3 },
            991: { perPage: 2.3 },
            768: { perPage: 2 },
            500: { perPage: 1.3 },
            425: { perPage: 1 },
        }
    }

    return (
        <>
            <div className = "nike-container mb-10">
                <Title title = {title} />
                <div className = "mt-6">
                    <Splide options = {splideOptions}>
                        {
                            news.map((item, i) => (
                                <SplideSlide key = {i} className = "mb-0.5">
                                    <div className = "relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                                        <div className = "flex items-center justify-center">
                                            <img src = {item.img} alt = {item.imgAlt} className = "w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg" />
                                        </div>
                                        <div className = "flex items-center justify-between px-4">
                                            <div className = "flex items-center gap-0.5">
                                                <HeartIcon className = "icon-style w-5 h-5 text-red-500" />
                                                <span className = "text-xs font-bold">
                                                    {item.like}
                                                </span>
                                            </div>
                                            <div className = "flex items-center gap-0.5">
                                                <ClockIcon className = "icon-style w-4 h-4 text-black" />
                                                <span className = "text-xs font-bold">
                                                    {item.time}
                                                </span>
                                            </div>
                                            <div className = "flex items-center gap-0.5">
                                                <HashtagIcon className = "icon-style text-blue-600" />
                                                <span className = "text-xs font-bold text-blue-600">
                                                    {item.by}
                                                </span>
                                            </div>
                                        </div>
                                        <div className = "grid items-center justify-items-start px-4">
                                            <h2 className = "text-base lg:text-sm font-semibold">
                                                {item.title}
                                            </h2>
                                            <p className = "text-sm lg:text-xs text-justify">
                                                {
                                                    truncate(item.text, {
                                                        length: 200,
                                                        separator: " ",
                                                        omission: "..."
                                                    })
                                                }
                                            </p>
                                        </div>
                                        <div className = "flex items-center justify-center w-full px-4">
                                            <a href = {item.url} target = "_blank" role = "button" className = "w-full text-center text-slate-100 bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black py-1.5 button-theme">
                                                {item.btn}
                                            </a>
                                        </div>
                                    </div>
                                </SplideSlide>
                            ))
                        }
                    </Splide>
                </div>
            </div>
        </>
    )
}

export default Stories;