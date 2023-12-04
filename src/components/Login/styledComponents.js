import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`
export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin-top: 34px;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
  @media screen and (max-width: 575px) {
    width: 90%;
  }

  box-shadow: 12px 14px 13px #e2e8f0;
`

export const NxtWatchLogo = styled.img`
  height: 50px;
  width: 190px;
  margin-top: 10px;
  margin-bottom: 15px;
`

export const Label = styled.label`
  font-weight: bold;
  @media screen and (max-width: 575px) {
    font-size: 12px;
  }
`

export const InputField = styled.input`
  width: 100%;
  border: 1px solid #94a3b8;
  font-size: 15px;
  outline-color: #94a3b8;
  height: 30px;
  cursor: pointer;
  @media screen and (max-width: 575px) {
    height: 27px;
  }
  @media screen and (min-width: 576px) {
    height: 37px;
  }
`
export const LoginForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 17px;
`

export const LoginButton = styled.button`
  @media screen and (max-width: 575px) {
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
    border: none;
    border-radius: 7px;
    background-color: #4f46e5;
    height: 30px;
    width: 80%;
    margin: 15px;
    cursor: pointer;
  }
  @media screen and (min-width: 576px) {
    font-weight: bold;
    font-size: 19px;
    color: #ffffff;
    border: none;
    border-radius: 7px;
    background-color: #4f46e5;
    height: 40px;
    width: 80%;
    margin: 15px;
    cursor: pointer;
  }
`

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 95%;
`

export const FieldContainer = styled.div`
  width: 90%;
  margin-top: 18px;
`

export const PassCheckbox = styled.input`
  height: 20px;
  width: 50px;
  margin: 0px;
  cursor: pointer;
`
export const ErrorMessage = styled.p`
  color: red;
  font-weight: bold;
  @media screen and (max-width: 575px) {
    font-size: 10px;
  }
  @media screen and (min-width: 576px) {
    font-size: 14px;
  }
`
