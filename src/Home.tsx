import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <React.Fragment>
            <h1><Link to="/store">스토어 페이지로 이동</Link></h1>
            <h1><Link to="/priority">우선순위 페이지로 이동</Link></h1>
        </React.Fragment>
    );
};

export default Home;
