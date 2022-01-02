import { useEffect, useState } from "react"
import GlobalStyle from "./globalStyles"
import Footer from "./components/footer"
import Header from "./components/header"
import MainApp from "./components/maincards"
import Profile from "./components/profile"
import AddQuestions from "./components/addQuestions"
import { Routes, Route } from "react-router-dom"

function App() {
    const [cards, setCards] = useState([])

    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const response = await fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
                const quiz = await response.json()
                setCards(
                    quiz.results.map((loadedQuestion, index) => {
                        return {
                            id: index + 1,
                            question: loadedQuestion.question,
                            answer: loadedQuestion.correct_answer,
                            incorrect_answers: loadedQuestion.incorrect_answers,
                        }
                    })
                )
            } catch (e) {
                console.error(e)
            }
        }

        fetchMyAPI()
    }, [])

    return (
        <div>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<MainApp cardsMainApp={cards} />} />
                {/* <Route path="/favourites" element={} />
                <Route path="/addquestions" element={} /> */}
                <Route path="/profile" element={<Profile />} />
                <Route path="/addQuestions" element={<AddQuestions />} />
            </Routes>
            <Footer />
        </div>
    )
}

export default App
