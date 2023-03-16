import React from 'react';
import styled from "styled-components";
import {motion} from "framer-motion";
import {animal01} from '../yeonpick/Animal';

type Props = {
    textArr: string;
};

const AnimalButton = () => {
    return (
        <React.Fragment>
            <Btn src={animal01}/>
        </React.Fragment>
    );
};

const Btn = styled(motion.img)`
  width: 72px;
  height: 72px;
  z-index: 1;
`

export default AnimalButton;
