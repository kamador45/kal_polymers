import React from "react";
import {Slide, Zoom} from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import Slide1 from "../../public/1.jpg";
import Slide2 from "../../public/2.jpg";
import Slide3 from "../../public/3.jpg";

const Slider = () => {

    const imagesArray = [
        {
            url:Slide1,
            caption:"Kal-Polymers"
        },
        {
            url:Slide2,
            caption:"Kal-Polymers"
        },
    ]

    return(
        <div className="slider-outer">
            <Zoom scale={0.5}>
                {
                    imagesArray.map((items, index) => (
                        <img key={index} src={items.url.src} style={{width:"100vw", height:"70vh", objectFit:"cover"}} />
                    ))
                }
            </Zoom>
        </div>
    )
}

export default Slider;