import React, {useEffect} from "react";

const Effect = () => {
    /* useEffect > 마운트(처음 나타났을때), 언마운트(사라질때), 업데이트 될 때(props 변경될 때) */
    useEffect(()=> {
        console.log("컴포넌트가 화면에 나타남(마운트)");
        return () => {
            console.log("컴포넌트가 화면에서 사라짐(언마운튼)");
        }
    }, []);
    return (
        <div>

        </div>
    );
};

export default Effect;
