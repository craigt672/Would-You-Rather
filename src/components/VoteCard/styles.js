import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  border: ${props => (props.voted ? "1px solid #04c78bfa" : "1px solid gray")};
  background: ${props => (props.voted ? "#E4FAF8" : "white")};
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  box-sizing: border-box;
  margin: 15px 0;
  padding: 5px 10px;
  h4 {
    color: ${props => (props.voted ? "#04c78bfa" : "black")};
  }
`;

export const VoteStamp = styled.div`
  width: 30px;
  height: 30px;
  font-size: 0.8em;
  font-weight: bold;
  display: flex;
  border-radius: 50%;
  position: absolute;
  top: -15px;
  align-items: center;
  justify-content: center;
  right: -15px;
  z-index: 200;
  background: #dbba31;
  color: white;
`;

export const PercentageBar = styled.ul`
  border: 1px solid gray;
  height: 30px;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;
  background: gray;
  border-radius: 5px;
  color: white;
  > li {
    display: flex;
    align-items: center;
    flex-flow: row-reverse;
    padding-right: 10px;
    box-sizing: border-box;

    list-style: none;
    height: 100%;
    width: ${props => (props.width ? `${props.width}%` : "100%")};
    background: ${props => (props.width ? "#04c78bfa" : "gray")};
    border-radius: 5px;
  }
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
