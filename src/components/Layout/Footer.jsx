import React from "react";

const Footer = ( { footerAPI: { titles, links } }) => {
    return (
        <footer className = "bg-theme pt-6 pb-5">
            <div className = "nike-container text-slate-200">
                <div className = "grid items-start grid-cols-3 max-w-6xl md:max-w-none w-full mx-auto gap-2 md:gap-3">
                    {
                        titles.map((title, i) => (
                            <div key = {i} className = "grid items-center">
                                <h2 className = "text-lg md:text-sm lg:text-base text-center sm:text-start uppercase font-semibold">
                                    {title.title}
                                </h2>
                            </div>
                        ))
                    }
                    {
                        links.map((list, i) => (
                            <ul key = {i} className = "grid items-center gap-2 justify-items-center sm:justify-items-start">
                                {
                                    list.map((link, j) => (
                                        <li key = {j} className = "text-sm sm:text-xs">
                                            <a href = {link.url} className = "">
                                                {link.link}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
                <div className = "mt-5 text-center">
                    <p className = "text-sm md:text-center">
                        Copyright <span className = "text-base font-bold">&copy;</span> {new Date().getFullYear()} Nike, Inc. Todos los derechos reservados. <a href = "https://github.com/carlossilvadev10" target = "_blank" rel = "noopener noreferrer" className = "font-semibold">carlossilvadev10</a>.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;