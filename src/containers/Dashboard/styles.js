import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 100px auto;
  box-sizing: border-box;
`;

export const QuestionsContainer = styled.div`
  border: 1px solid gray;
  max-width: 700px;
  padding: 20px 80px;
  box-sizing: border-box;
`;

export const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  > form {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    padding: 10px;
    > label {
      padding: 10px;
    }
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: bold;
`;

export const Button = styled.button`
  width: 100%;
  border: 2px solid #04c78bfa;
  font-size: 1em;
  padding: 10px;
  color: #04c78bfa;
  border-radius: 20px;
  :hover {
    background: #04c78bfa;
    color: white;
    cursor: pointer;
  }
`;
