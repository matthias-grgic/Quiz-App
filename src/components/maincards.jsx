import styled from "styled-components"

function MainApp({ cardsMainApp }) {
    const MainCard = cardsMainApp.map((cardsMainApp, index) => (
        <MainQuestionCard key={index}>
            <h4>{cardsMainApp.question}</h4>
            <MainAnswerOne right>{cardsMainApp.answer}</MainAnswerOne>
            <MainAnswerTwo>{cardsMainApp.incorrect_answers.slice(0, 1)}</MainAnswerTwo>
            <MainAnswerThree>{cardsMainApp.incorrect_answers.slice(1, 2)}</MainAnswerThree>
            <MainAnswerFour>{cardsMainApp.incorrect_answers.slice(2, 3)}</MainAnswerFour>
        </MainQuestionCard>
    ))

    return <MainCards>{MainCard}</MainCards>
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

const MainAnswer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 15px;
    gap: 5px;
    column-gap: 12px;
    border-radius: 10px;
    border-style: none;
    background-color: white;
    background: linear-gradient(180deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(247, 243, 251, 1) 0%, rgba(255, 255, 255, 1) 100%);

    &:hover {
        box-shadow: 0 20px 20px -1px rgba(104, 75, 75, 0.1);
        background-color: rgba(170, 165, 165, 0.9);
        border: 1px solid rgba(170, 165, 165, 0.9);
        font-weight: 500;
    }

    &:active,
    &:focus {
        background: ${(props) => (props.right ? "rgba(130, 241, 107, 0.9)" : "rgba(230, 89, 89, 0.9)")};
    }
`

const MainAnswerOne = styled(MainAnswer)``
const MainAnswerTwo = styled(MainAnswer)``
const MainAnswerThree = styled(MainAnswer)``
const MainAnswerFour = styled(MainAnswer)``
