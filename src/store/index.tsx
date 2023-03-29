import React from "react";
import BackBar from "./BackBar";
import Carousel from "./Carousel";
import styled from "styled-components";
import PointBox from "./PointBox";
import PointCharge from "./PointCharge";
import UsePoint from "./UsePoint";
import CollectPoint from "./CollectPoint";

type PricechargeArray = {
    id: number,
    point: string,
    real: string
};

type BuyArray = {
    id: number,
    img: string,
    title: string,
    description: string,
    point: number,
};

type CollectArray = {
    title: string,
    img: string,
    price: string
};

type Props = {
    chargeArray: PricechargeArray[],
    buyArray: BuyArray[],
    collectArray: CollectArray[],
    page: string,
}

const Store = ({chargeArray, buyArray, collectArray ,page}: Props) => {
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
                    chargeArray.map((elem, index) => (
                        <PointCharge key={index} price={elem.point} realPrice={elem.real}/>
                    ))
                }
            </PointChargeBox>
            <BuyPointTitle>구매하기</BuyPointTitle>
            <UsePointBox>
                {
                    buyArray.map((elem, index) => (
                        <UsePoint key={index} price={elem.point} img={elem.img} description={elem.description}
                                  title={elem.title}/>
                    ))
                }
            </UsePointBox>
            <CollectPointTitle>포인트 모으기</CollectPointTitle>
            <CollectPointBox>
                {
                    collectArray.map((elem, index) => (
                        <CollectPoint key={index} title={elem.title} img={elem.img} price={elem.price} />
                    ))
                }
            </CollectPointBox>
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
  left: calc(50% - 360px / 2 + 48px);
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
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

const BuyPointTitle = styled.p`
  position: relative;
  top: 260px;
  left: calc(50% - 360px / 2 + 48px);
  width: 63px;
  height: 28px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;

const UsePointBox = styled.div`
  position: relative;
  width: 258px;
  height: 168px;
  top: 273px;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 18px;
`;

const CollectPointTitle = styled.p`
  position: absolute;
  width: 98px;
  height: 28px;
  left: calc(50% - 360px / 2 + 48px);
  top: 1042px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #000000;
`;

const CollectPointBox = styled.div`
  position: relative;
  top: 374px;
  left: calc(50% - 360px / 2 + 48px);
  padding-bottom: 80px;
`;

export default Store;
