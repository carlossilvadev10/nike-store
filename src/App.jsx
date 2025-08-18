import React from "react"
import { Cart } from "./components/Cart";
import { FlexContent, Hero, Sales, Stories } from "./components/Sections";
import { Footer, Navbar, ScrollToTop } from "./components/Layout";
import { heroAPI, popularSales, topRatedSales, highlight, sneaker, story, footerAPI} from "./data/data";

const App = () => {
  return (
    <>
      <main className = "flex flex-col relative gap-16">
        <Navbar />
        <Cart />
        <Hero heroAPI = {heroAPI} />
        <Sales endpoint = {popularSales} ifExists />
        <FlexContent endpoint = {highlight} ifExists />
        <Sales endpoint = {topRatedSales} />
        <FlexContent endpoint = {sneaker} />
        <Stories story = {story} />
      </main>
      <Footer footerAPI = {footerAPI} />
      <ScrollToTop />
    </>
  )
}

export default App;