import React, { useState } from "react";  // Added useState import
import "./ImageApp.css";
import pic from "../images/test output.png";

const ImageApp = () => {
    const [width, setWidth] = useState(200);
    const [height, setHeight] = useState(200);
    const [rotation, setRotation] = useState(0);

    const increaseWidth = () => setWidth(width + 20);
    const decreaseWidth = () => setWidth(width - 20);
    const increaseHeight = () => setHeight(height + 20);
    const decreaseHeight = () => setHeight(height - 20);
    const rotateImage = () => setRotation(rotation + 45);

    return (
        <div>
            <div 
                style={{
                    display: "inline-block",
                    transform: `rotate(${rotation}deg)`,
                    transition: "transform 0.3s",
                }}
            >
                <img src={pic} width={width} height={height} alt="Dynamic" />
            </div>
            <div>
                <button onClick={increaseWidth}>Increase Width</button>
                <button onClick={decreaseWidth}>Decrease Width</button>
                <button onClick={increaseHeight}>Increase Height</button>
                <button onClick={decreaseHeight}>Decrease Height</button>
                <button onClick={rotateImage}>Rotate</button>
            </div>
        </div>
    );
};

export default ImageApp;
