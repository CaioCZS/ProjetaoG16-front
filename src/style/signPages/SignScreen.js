import styled from "styled-components"

const SignScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #f0cdab;
  form {
    padding: 20px;
    min-height: 40vh;
    max-height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  input {
    width: 80vw;
    height: 40px;
    border-radius: 50px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    padding-left: 23px;
    &::placeholder {
      letter-spacing: 2px;
      color: #000000;
      font-size: 10px;
    }
  }
  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 1px solid #000000;
    outline: 0;
  }
  button {
    width: 60vw;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 2px;
    color: #000000;
    font-size: 10px;
    margin-top: 15px;
  }
`
export default SignScreen
