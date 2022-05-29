import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Table = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  /* padding: 2.9rem 5.7rem 2.7rem 5.4rem; */
  padding: 31px 150px 31px 116px;
  border-bottom: 1px solid #ededed;
  background-color: white;
  color: #111111;
  @media ${breakPoints.mobile} {
    width: 320px;
    padding: 20px 22px;
  }
`;

export const BasicRow = styled.div`
  display: flex;
`;

// 번호
export const TableMenuNo = styled.div`
  width: 2.2rem;
  height: 2.3rem;
  margin-right: 9.5rem;
  /* border: 1px solid red; */
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

// 2022-05-20
export const TableMenuPaymentDate = styled.div`
  width: 9.7rem;
  height: 2.3rem;
  margin-right: 12.3rem;
  /* border: 1px solid red; */
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    margin-right: 0rem;
    width: 7.4rem;
    height: 1.7rem;
    font-size: 12px;
    line-height: 17px;
    margin-right: 35px;
  }
`;

// 결제상품
export const TableMenuProduct = styled.div`
  width: 4rem;
  height: 2.3rem;
  margin-right: 13.2rem;
  /* border: 1px solid red; */
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 2.3rem;
  @media ${breakPoints.mobile} {
    margin-right: 0rem;
    width: 5.1rem;
    height: 2rem;
    font-size: 12px;
    line-height: 17px;
    margin-right: 70px;
  }
`;
// 결제금액
export const TableMenuMoney = styled.div`
  width: 3.9rem;
  height: 2.3rem;
  margin-right: 15rem;
  /* border: 1px solid red; */
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    margin-right: 0rem;
    width: 5.4rem;
    height: 2rem;
    font-size: 12px;
    line-height: 17px;
  }
`;

// 작성일
export const TableMenuDate = styled.div`
  display: flex;
  justify-content: center;
  width: 11.9rem;
  height: 2.3rem;
  margin-right: 3.4rem;
  /* border: 1px solid red; */
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  @media ${breakPoints.mobile} {
    display: none;
    margin-right: 0rem;
  }
`;

// 버튼 함수 주기 환불하기, 사용완료
export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 8rem;
  height: 2.8rem;
  border: none;
  border-radius: 8px;
  background: #f0f0f0;
  color: #999999;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;
