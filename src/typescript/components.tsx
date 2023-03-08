import styled from "styled-components";

import React, {useRef, useState} from 'react';
import {ChakraProvider} from "@chakra-ui/react";

type Image = {
    src: string;
    alt: string;
};

interface CardProps {
    image?: Image;
    title: string;
    content: string;
}

const Card = ({image, title, content}: CardProps) => {
    return (
        <CheckBox>
            <CheckBoxContents>
                대학생
            </CheckBoxContents>
        </CheckBox>
    );
};

const CheckBox = styled.div`
  box-sizing: border-box;
  width: 216px;
  height: 48px;
  border: 1px solid #9754FB;
  box-shadow: 2px 2px 10px 1px rgba(151, 84, 251, 0.2);
  border-radius: 12px;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const CheckBoxContents = styled.div`
  position: absolute;
  width: 42px;
  height: 24px;
  left: 32px;
  top: 12px;
  //font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #9754FB;
`;

const CardBox = styled.div`
  width: 300px;
  height: 150px;
`;

export default Card;
