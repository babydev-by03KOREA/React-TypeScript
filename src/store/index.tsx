import React from "react";
import BackBar from "./BackBar";
import Carousel from "./Carousel";
import styled from "styled-components";
import PointBox from "./PointBox";
import PointCharge from "./PointCharge";

type PriceArray = {
    id: number,
    point: string,
    real: string
};

type Props = {
    array: PriceArray[],
    page: string,
}

const Store = ({array, page}: Props) => {
    return (
        <React.Fragment>
            <BackBar text={page}/>
            <CarouselBox>
                <Carousel/>
            </CarouselBox>
            {/* MARGIN BOX */}
            <PointBox/>
            <PointChargeTitle>포인트 충전하기</PointChargeTitle>
            <PointChargeBox>
                {
                    array.map((elem, index) => (
                        <PointCharge key={index} price={elem.point} realPrice={elem.real} />
                    ))
                }
            </PointChargeBox>
        </React.Fragment>
    );
};

const CarouselBox = styled.div`
  position: relative;
  width: 360px;
  height: 160px;
  margin: auto;
  top: 93px;
`;

const PointChargeTitle = styled.p`
  position: relative;
  top: 187px;
  left: 48px;
  width: 114px;
  height: 28px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;

const PointChargeBox = styled.div`
  position: relative;
  width: 264px;
  height: 304px;
  top: 215px;
  //left: 48px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;


export default Store;
