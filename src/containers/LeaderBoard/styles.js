import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 100px auto;
  box-sizing: border-box;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px 50px;
  > h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #04c78bfa;
    text-transform: uppercase;
  }
`;

export const ScoreBox = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  > h3 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > span {
      padding: 0 5px;
    }
  }
`;

export const TotalScoreBox = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  text-align: center;
  > h2 {
    border-bottom: 1px solid gray;
    padding: 0 5px;
  }
  > div {
    > h3 {
      margin: 10px auto 20px auto;
      width: 20px;
      height: 20px;
      background: #04c78bfa;
      padding: 10px;
      border-radius: 100%;
      font-weight: 700;
      color: white;
    }
  }
`;
