import React from 'react'
import {Blog, Features, Footer, Header, Possibility, Whatgpt3} from "./container"
import {Cta, Brand, Navbar} from "./Components"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
