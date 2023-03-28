import React from 'react';
import BackBar from "./BackBar";

type Props = {
  page: string,
}

const Store = ({page} : Props) => {
  return (
    <BackBar text={page}/>
  );
};

export default Store;
