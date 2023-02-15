import styled from "styled-components";

export const Container = styled.div`
  h1 {
    margin: 0;
    padding: 0;
    font-size: 26px;
  }
  p {
    font-size: 14px;
    color: #b8b8d4;
  }
  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }
  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      box-sizing: border-box;
      width: 100%;
      padding: 20px 10px;
      border: 2px solid #25cd89;
      border-radius: 10px;
      color: #fff;
      outline: 0;
      font-size: 15px;
      background-color: #02044a;
    }
  }

  button {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
  }

  .backButton {
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #b8b8d4;
  }
`;
