import React from "react";
import styled from "styled-components";

type Props = {
    type: "marginBottomImg" | "marginFourEightDiv" | "marginBottomPage" | "marginTwoFour" | "marginBottomPageTwo";
}

enum Type {
    MARGIN_BOTTOM_IMG = "marginBottomImg",
    MARGIN_FOUR_EIGHT = "marginFourEightDiv",
    MARGIN_BOTTOM_PAGE = "marginBottomPage",
    MARGIN_TWO_FOUR = "marginTwoFour",
    MARGIN_BOTTOM_PAGE_TWO = "marginBottomPageTwo",
}

const HEIGHT = [
    {
        height: 24,
        type: Type.MARGIN_TWO_FOUR,
    },
    {
        height: 32,
        type: Type.MARGIN_BOTTOM_IMG,
    },
    {
        height: 48,
        type: Type.MARGIN_FOUR_EIGHT,
    },
    {
        height: 64,
        type: Type.MARGIN_BOTTOM_PAGE,
    },
    {
        height: 80,
        type: Type.MARGIN_BOTTOM_PAGE_TWO,
    },
];

const Margin = ({type}: Props) => {
    return (
        <MarginBox num={HEIGHT.find((doc) => doc.type === type)?.height ?? 0}/>
    );
};

const MarginBox = styled.div<{ num: number }>`
  position: relative;
  height: ${(props) => props.num}px;
`;

export default Margin;
