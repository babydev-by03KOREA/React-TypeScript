import React, {useState} from "react";

const ShopList = () => {
    const [list, setList] = useState<string[]>([]);
    const [item, setItem] = useState<string>("");

    const addItem = () => {
        setList([...list, item]);
        setItem("");
    };

    return (
        <React.Fragment>
            <h1>쇼핑 리스트</h1>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
            <div>
                <input type="text" value={item} onChange={e => setItem(e.target.value)} />
                <button onClick={addItem}>추가</button>
            </div>
        </React.Fragment>
    );
};

export default ShopList;
