import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox";
import {PaletteTree} from "./palette";
import App from "../App";
import Card from "../typescript/components";
import Join from "../typescript/join";
import AnodtherJoin from "../typescript/AnodtherJoin";

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
