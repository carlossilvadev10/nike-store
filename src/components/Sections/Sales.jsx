import React from "react";
import Title from "../UI/Title";
import Item from "../UI/Item";

const Sales = ({ endpoint: { title, items }, ifExists }) => {
    return (
        <>
            <div className = "nike-container my-4">
                <Title title = {title} />
                <div className = {`grid items-center justify-items-center gap-7 lg:gap-5 mt-7 ${ifExists ? "grid-cols-3 sm:grid-cols-1 xl:grid-cols-2" : "grid-cols-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}`}>
                    {
                        items.map((item, i) => (
                            <Item key = {i} {...item} ifExists = {ifExists} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Sales;