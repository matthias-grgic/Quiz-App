import styled from "styled-components"
import { Routes, Route, Link } from "react-router-dom"

function Footer({}) {
    return (
        <Navbar>
            <Link to="/">
                <img src="/src/images/home.svg" width="34px" />
            </Link>

            <Link to="/favourites">
                <img src="/src/images/mark.svg" width="34px" />
            </Link>

            <Link to="/AddQuestions">
                <img src="/src/images/note.svg" width="34px" />
            </Link>

            <Link to="/profile">
                <img src="/src/images/profile.svg" width="34px" />
            </Link>
        </Navbar>
    )
}

export default Footer

const Navbar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(0deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(198, 198, 198, 1) 0%, rgba(255, 255, 255, 1) 100%);
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 80px;
    a:hover {
        filter: invert(72%) sepia(12%) saturate(1062%) hue-rotate(200deg) brightness(101%) contrast(94%);
    }
    a {
        filter: ${(props) => (props.primary ? "invert(82%) sepia(10%) saturate(4472%) hue-rotate(191deg) brightness(102%) contrast(94%);" : "")};
    }
`
