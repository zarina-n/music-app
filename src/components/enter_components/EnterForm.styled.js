import styled from "styled-components";

export const StyledWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

export const EnterContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalBlock = styled.div`
  position: absolute;
  z-index: 2;
  left: calc(50% - (366px / 2));
  top: calc(50% - (439px / 2));
  opacity: 1;
`;

export const ModalForm = styled.form`
  min-width: 366px;
  min-height: 439px;
  background-color: #ffffff;
  color: black;
  border-radius: 12px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 43px 47px 47px 40px;

  p {
    color: salmon;
    font-size: 15px;
    margin-bottom: 10px;
    width: 300px;
  }

  input {
    width: 100%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #d0cece;
    padding: 8px 8px;
    margin-bottom: 30px;
  }

  input::-webkit-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  input:-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  input::-ms-input-placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  input::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: #d0cece;
  }

  input:focus {
    outline: none;
    border-bottom: #000 solid 2px;
  }
`;

export const ModalLogo = styled.div`
  width: 140px;
  height: 21px;
  margin-bottom: 34px;
  background-color: transparent;

  img {
    width: 140px;
    height: auto;
  }
`;

export const ModalButton = styled.button`
  width: 278px;
  height: 52px;
  background-color: #580ea2;
  padding: ${({ padding }) => padding};
  border-radius: 6px;
  margin-top: ${({ margintop }) => margintop};
  margin-bottom: 20px;
  border: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &:hover {
    background-color: #3f007d;
  }
`;

export const SignupButton = styled.button`
  width: 278px;
  height: 52px;
  background-color: transparent;
  border: 1px solid #d0cece;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: ${({ color }) => color};

  &:hover {
    background-color: #f4f5f6;
  }
`;

export const ModalLink = styled.a`
  width: 100%;
  height: 100%;
  font-size: 18px;
  letter-spacing: -0.05px;
  color: ${({ color }) => color};
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  &:active {
    background-color: ${({ backgroundcolor }) => backgroundcolor};
    border-radius: 6px;
  }
`;
