import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App";
import Card from "../hooks/components";
import Join from "../hooks/join";
import AnodtherJoin from "../hooks/AnodtherJoin";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Card">
                <Card/>
            </ComponentPreview>
            <ComponentPreview path="/Join">
                <Join/>
            </ComponentPreview>
            <ComponentPreview path="/AnodtherJoin">
                <AnodtherJoin/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
