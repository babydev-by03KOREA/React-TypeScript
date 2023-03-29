import React from 'react';
import styled from "styled-components";

type Props = {
    type: 'marginBottomImg' | '';
}

enum Type {
    MARGIN_BOTTOM_IMG = 'marginBottomImg',
}

const HEIGHT = [
    {
        height: 32,
        type: Type.MARGIN_BOTTOM_IMG,
    },
]

const Margin = ({type} : Props) => {
    return (
        <MarginBox num={HEIGHT.find((doc) => doc.type === type)?.height ?? 0}/>
    );
}

const MarginBox = styled.div<{num: number}>`
  height: ${(props) => props.num}px;
`;

export default Margin;
