import React from "react";
// import ImageButton from "../Element/ImageButton";
//
// type imgArr = {
//     id: number,
//     text: string,
//     root: string
// };
//
// type Props = {
//     imgArr: imgArr[],
//     item: number,
//     setItem: (value: number) => void,
// };
//
// const ImgBtnSingle = ({imgArr, item, setItem}: Props) => {
//     // setItem 바로 넣지 않은 이유는 한번에 검증을 한 후 함수를 넘기기 | Multi 에서는 어짜피 필요함.
//     const onClick = (num: number) => {
//         if (item !== num) {
//             setItem(num);
//         }
//     };
//     return (
//         <React.Fragment>
//             {
//                 imgArr.map((elem, index) => (
//                     <ImageButton key={index} img={elem.root} text={elem.text} item={elem.id} setItem={onClick}
//                                  isOn={elem.id === item}/>
//                 ))
//             }
//         </React.Fragment>
//     );
// };
//
// export default ImgBtnSingle;
