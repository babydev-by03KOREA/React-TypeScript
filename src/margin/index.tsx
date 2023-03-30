import React from "react";
import styled from "styled-components";

type Props = {
    type: "marginBottomImg" | "marginFourEightDiv" | "marginBottomPage";
}

enum Type {
    MARGIN_BOTTOM_IMG = "marginBottomImg",
    MARGIN_FOUR_EIGHT = "marginFourEightDiv",
    MARGIN_BOTTOM_PAGE = "marginBottomPage",
}

const HEIGHT = [
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
];

const Margin = ({type}: Props) => {
    return (
        <MarginBox num={HEIGHT.find((doc) => doc.type === type)?.height ?? 0}/>
    );
};

const MarginBox = styled.div<{ num: number }>`
  position:relative;
  height: ${(props) => props.num}px;
`;

export default Margin;
