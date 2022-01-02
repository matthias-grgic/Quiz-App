import styled from "styled-components"

function AddQuestions() {
    const FormularAll = (
        <>
            <FormularItems>
                <label htmlFor="question">
                    <h3>QUESTION</h3>
                </label>
                <input type="text" id="question" name="question" />
            </FormularItems>
            <FormularItems>
                <label htmlFor="answer">
                    <h4>ANSWER 1</h4>
                </label>
                <input type="text" id="answer" name="answer" />
            </FormularItems>
            <FormularItems>
                <label htmlFor="answer">
                    <h4>ANSWER 2</h4>
                </label>
                <input type="text" id="answer" name="answer" />
            </FormularItems>
            <FormularItems>
                <label htmlFor="answer">
                    <h4>ANSWER 3</h4>
                </label>
                <input type="text" id="answer" name="answer" />
            </FormularItems>
            <FormularItems>
                <label htmlFor="answer">
                    <h4>ANSWER 4</h4>
                </label>
                <input type="text" id="answer" name="answer" />
            </FormularItems>
            <FormularItems>
                <input type="submit" value="ADD QUESTION" />
            </FormularItems>
        </>
    )

    return <MainFormular>{FormularAll}</MainFormular>
}

export default AddQuestions

const FormularItems = styled.div`
    display: flex;
    flex-direction: column;
`

const MainFormular = styled.div`
    background: linear-gradient(180deg, rgba(2, 0, 36, 0.4009978991596639) 0%, rgba(185, 131, 255, 1) 0%, rgba(148, 179, 253, 1) 44%, rgba(148, 218, 255, 1) 76%, rgba(153, 254, 255, 0.8211659663865546) 100%);
    box-shadow: 0 2px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 12px;
    column-gap: 12px;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    gap: 10px 20px;
    margin: 80px 15px 60px 15px;
    padding: 15px;
    row-gap: 25px;
    text-align: center;

    input[type="submit"] {
        border: none;
        border-style: none;
        border-radius: 50px;
        cursor: pointer;
        background-color: #f0a5f7;
        margin: 4px 2px;
        padding: 10px 10px 10px 10px;
        text-decoration: none;
    }

    input[type="text"] {
        border-style: none;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        background-color: #ffffff;
        margin: 4px 2px;
        padding: 10px 10px 10px 10px;
        text-decoration: none;
    }
`
