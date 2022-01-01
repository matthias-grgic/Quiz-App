import { useEffect, useState } from "react"
import styled from "styled-components"
import GlobalStyle from "./globalStyles"
import Footer from "./components/footer"
import Header from "./components/header"
import MainApp from "./components/maincards"

function App() {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <MainApp />
            <Footer />
        </div>
    )
}

export default App
