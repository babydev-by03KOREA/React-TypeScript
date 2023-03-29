import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import {carousel01, carousel02, carousel03} from "../yeonpick/Coin";

const Carousel = () => {
    return (
        <SwiperBox>
            <SwiperImage src={carousel01}/>
            <SwiperDescription>
                <TitleBox>연픽 포인트가 출시됐어요!</TitleBox>
                <DescriptionBox>
                    이제 충전한 포인트로 매칭을 결제하거나
                    원하는 혜택을 구매할 수 있어요
                </DescriptionBox>
            </SwiperDescription>
            {/*<SwiperImage src={carousel02}/>
            <SwiperDescription>
                <TitleBox>꼭 충전하지 않아도 돼요</TitleBox>
                <DescriptionBox>
                    연픽 안에서 얼마든지 모을 수 있어요
                    4000포인트만 모아도 스벅 깊티가 🎁!
                </DescriptionBox>
            </SwiperDescription>
            <SwiperImage src={carousel03}/>
            <SwiperDescription>
                <TitleBox>매칭이 성사될 때</TitleBox>
                <DescriptionBox>
                    보유 포인트가 10,000P 이상이면 자동으로
                    소진되어 바로 카톡아이디를 받을 수 있어요
                </DescriptionBox>
            </SwiperDescription>*/}
        </SwiperBox>
    );
};

const SwiperBox = styled.div`
  position: relative;
  width: 270px;
  height: 64px;
  left: 45px;
  top: 32px;
`;

const SwiperImage = styled.img`
  position: absolute;
  width: 64px;
  height: 64px;
`;

const SwiperDescription = styled.div`
  position: absolute;
  margin-left: 80px;
  width: 190px;
  height: 64px;
`;

const TitleBox = styled.p`
  width: 165px;
  height: 24px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;

const DescriptionBox = styled.p`
  width: 190px;
  height: 36px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #2D3748;
  flex: none;
  order: 1;
  flex-grow: 0;
`;


export default Carousel;
