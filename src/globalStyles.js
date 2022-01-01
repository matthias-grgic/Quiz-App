import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
font-family: "Sora", sans-serif;
margin: 0;
padding: 0;
}

h3 {
        font-size: 36px;
        font-weight: 600;
    }

h4 {
  font-size: 18px;
  font-weight: 500;
}
`

export default GlobalStyle
