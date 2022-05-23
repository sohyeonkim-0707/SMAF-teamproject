import styled from "@emotion/styled";
import { Modal } from "antd";

export const ModalWrapper = styled(Modal)`
  width: 28rem;
  height: 40rem;
`;

export const Title = styled.h1`
  width: 174px;
  height: 40px;
  margin-bottom: 28px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
`;

export const CouponWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 204px;
  height: 68px;
  border-radius: 8px;
  background: #f1f1f5;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 196px;
    height: 60px;
    border: 1px solid #ffffff;
    border-radius: 8px;
  }
  img {
    width: 20px;
    height: 18px;
  }
  span {
    width: 118px;
    height: 20px;
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
  }
`;

export const SubTitle = styled.p`
  width: 217px;
  height: 20px;
  margin-top: 24px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 21.6rem;
  margin-top: 2.8rem;
  button {
    width: 10.4rem;
    height: 4rem;
    border: none;
    border-radius: 8px;
    background: #333333;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.02em;
    color: #ffffff;
    outline: none;
    cursor: pointer;
    :hover {
      border: none;
      background: #dbdbdb;
    }
  }
`;
