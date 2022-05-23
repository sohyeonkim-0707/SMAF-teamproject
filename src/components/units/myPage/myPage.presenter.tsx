import * as S from "./myPage.styles";
import styled from "@emotion/styled";
import UserInfoCard from "../../commons/userInfoCard/userInfoCard.container";
import { IMyPageUIProps } from "./myPage.types";
import { v4 as uuidv4 } from "uuid";
import Project01 from "../../commons/project/01/project01.container";
// import InfiniteScroll from "react-infinite-scroller";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Project02 from "../../commons/project/02/project02.container";
import Project03 from "../../commons/project/03/project03.container";
import PaymentModal from "../../commons/modal/paymentModal/paymentModal.container";

const SliderWrapper = styled(Slider)`
  .slick-list {
    margin-right: -19px;
  }
  height: 24rem;
  width: 97rem;
`;

export default function MyPageUI(props: IMyPageUIProps) {
  const showMaxCnt = 3;
  const arr = Array.from(new Array(3));

  const settings = {
    dots: false, // dots 사진 밑에 버튼 false 하면 사라진다
    infinite: arr.length > showMaxCnt,
    rows: 1,
    speed: 500, // 콘텐츠를 넘어갈 때 속도
    slidesToShow: showMaxCnt, // 한 화면에 보이는 콘텐츠 수
    slidesToScroll: showMaxCnt, // 한 번에 넘어가는 콘텐츠 수
  };

  return (
    <S.Wrapper>
      {/* leftWrapper */}
      <UserInfoCard onClickMoveToPaymentList={props.onClickMoveToPaymentList} />

      <S.RightWrapper>
        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>진행 중인 프로젝트</S.Title>
            <S.AddButton onClick={props.onClickMoveToNewProject}>
              + 프로젝트 추가하기
            </S.AddButton>
          </S.ProjectTitle>
          {/* 진행 중인 프로젝트 */}
          <SliderWrapper {...settings}>
            {props.activeData?.fetchActivatedProject.map((el: any) => (
              <Project01 key={uuidv4()} el={el} />
            ))}
          </SliderWrapper>
        </S.InnerWrapper>

        <S.InnerWrapper>
          <S.ProjectTitle>
            <S.Title>지난 프로젝트</S.Title>
            <S.DateButton>최신순</S.DateButton>
          </S.ProjectTitle>
          {/* 지난 프로젝트 */}
          <SliderWrapper {...settings}>
            {/* 프로젝트가 없을때 조건 보여줘야함  */}
            {props.inActiveData?.fetchInactivatedProject.map((el: any) => (
              <Project02 key={uuidv4()} el={el} />
            ))}
          </SliderWrapper>
        </S.InnerWrapper>
      </S.RightWrapper>
    </S.Wrapper>
  );
}

// {props.el.images[0] ? (
//   <ProductImage
//     src={`https://storage.googleapis.com/${props.el.images[0]}`}
//     alt="상품이미지"
//   />
// ) : (
//   <ProductImage src="/images/images.png" />
// )}
