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
`;

export const Title = styled.h2`
  margin: 0;
  font-weight: bold;
`;
