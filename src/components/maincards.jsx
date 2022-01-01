import { useEffect, useState } from "react"
import styled from "styled-components"

function MainApp({}) {
    const [cards, setCards] = useState([])
    useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
            .then((response) => response.json())
            .then((loadedQuestions) => {
                loadedQuestions.results.map((loadedQuestions, index) => {
                    const formatQuestions = {
                        id: index + 1,
                        question: loadedQuestions.question,
                        answer: loadedQuestions.correct_answer,
                        incorrect_answers: loadedQuestions.incorrect_answers,
                    }
                    setCards(formatQuestions)
                })
            })
    }, [])

    return (
        <MainCards>
            <MainQuestionCard>
                <h4>{cards.question}</h4>
                <MainAnswerOne>{cards.answer}</MainAnswerOne>
                <MainAnswerTwo>{cards.incorrect_answers}</MainAnswerTwo>
                <MainAnswerThree>{cards.incorrect_answers}</MainAnswerThree>
                <MainAnswerFour>{cards.incorrect_answers}</MainAnswerFour>
            </MainQuestionCard>
        </MainCards>
    )
}

export default MainApp

const MainCards = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    margin-bottom: 60px;
    padding: 10px;
    gap: 10px 20px;
`

const MainQuestionCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px;
    gap: 5px;
    column-gap: 12px;
    box-shadow: 0 11px 10px -2px rgba(50, 50, 50, 0.1);
    border-radius: 15px;
    background: linear-gradient(180deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(185, 131, 255, 1) 0%, rgba(148, 179, 253, 1) 44%, rgba(148, 218, 255, 1) 76%, rgba(153, 254, 255, 0.8211659663865546) 100%);
`

const MainAnswer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    gap: 5px;
    column-gap: 12px;
    border-radius: 10px;
    background-color: white;
    background: linear-gradient(180deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(247, 243, 251, 1) 0%, rgba(255, 255, 255, 1) 100%);
`

const MainAnswerOne = styled(MainAnswer)``
const MainAnswerTwo = styled(MainAnswer)``
const MainAnswerThree = styled(MainAnswer)``
const MainAnswerFour = styled(MainAnswer)``
