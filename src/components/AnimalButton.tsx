import React, {useState} from "react";
import styled from "styled-components";
import {motion} from "framer-motion";
import {CheckIcon} from "@chakra-ui/icons";
import {theme} from "../style";

type AnimalArray = {
    id: number;
    text: string;
    root: string;
}

type Props = {
    animalArr: AnimalArray[];
    item: number;
    setItem: (value: number) => void;
};

const AnimalButton = ({animalArr, item, setItem}: Props) => {

    return (
        <React.Fragment>
            <Box>
                {
                    animalArr.map((elem, index) => (
                        <AnimalBox key={index}>
                            <AnimalBtn src={elem.root} onClick={() => {setItem(elem.id)}} />
                            {item === elem.id && <Cover>
                                <div className="box"></div>
                                <CheckIcon
                                    className='icon'
                                    boxSize={25}
                                    color='chakraPrimary.500'
                                />
                            </Cover>}
                        </AnimalBox>
                    ))
                }
            </Box>
        </React.Fragment>
    );
};

const AnimalBox = styled.button`
  position: relative;
  overflow: hidden;

  &:hover {
    img {
      filter: brightness(0.8);
    }
  }

  &:active {
    img {
      filter: brightness(0.6);
    }
  }

  img {
    width: 72px;
    height: 72px;
    z-index: 1;
    transition: filter 0.2s ease-out;
  }
`;

const Box = styled.div`
  width: 100%;
  height: 360px;
  padding-left: calc(50% - 360px / 2 + 48px);
  padding-right: calc(50% - 360px / 2 + 48px);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const AnimalBtn = styled(motion.img)`
  width: 72px;
  height: 72px;
  z-index: 1;
`;

const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background: white;
    z-index: 2;
  }

  .icon {
    opacity: 1;
    z-index: 3;
  }
`;

export default AnimalButton;
