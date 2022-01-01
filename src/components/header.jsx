import styled from "styled-components"

function Header({}) {
    return (
        <HeaderBar>
            <h3>QUIZ APP</h3>
        </HeaderBar>
    )
}

export default Header

const HeaderBar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(198, 198, 198, 1) 0%, rgba(255, 255, 255, 1) 100%);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
    padding: 1em;
`
