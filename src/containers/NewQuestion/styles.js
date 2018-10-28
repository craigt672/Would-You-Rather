import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-evenly;
  > p {
    align-self: center;
  }

  h4 {
    margin: 0;
  }

  input {
    height: 30px;
    border-radius: 5px;
    border: 1px solid gray;
    padding-left: 10px;
    font-size: 1.1em;
  }

  button {
    margin-top: 20px;
  }
`;
