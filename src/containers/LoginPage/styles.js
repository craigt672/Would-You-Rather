import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px;
  margin: 100px auto;
  box-sizing: border-box;
  > div {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      select {
        padding: 20px !important;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.3em;
        height: 40px;
        width: 100%;
        margin-bottom: 50px;
      }
      button {
        width: 100%;
      }
      img {
        display: block;
        width: 300px;
        height: 300px;
        margin: 0 auto;
      }
    }
  }
`;
