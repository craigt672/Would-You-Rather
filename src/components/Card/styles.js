import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  max-width: 800px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

export const Header = styled.div`
  color: black;
  padding: 10px;
  font-weight: bold;
  background: #f2f2f2;
  border-bottom: 1px solid gray;
  > h3 {
    margin: 0;
  }
`;

export const Content = styled.ul`
  display: flex;
  flex-direction: ${props => (props.column ? "column" : "row")};
  align-items: center;
  justify-content: space-around;
  margin: 0;
  padding: 20px;
`;

export const Avatar = styled.li`
  display: flex;
  width: ${props => (props.small ? "48px" : "200px")};
  height: ${props => (props.small ? "36px" : "150px")};
  justify-content: flex-start;
  border-right: ${props => (props.noBorder ? "none" : "1px solid gray")};
  > img {
    width: 100%;
  }
`;

export const ContentBox = styled.li`
  display: flex;
  justify-content: center;
`;
