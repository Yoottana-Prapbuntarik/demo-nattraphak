import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./gallery.scss";
import {
    Variable
} from './ManageCarousel/CarouselVariable'
const CarouselSlide = ({ dataSlide }: any): any => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="continaer-gallery  m-0">
            <Carousel activeIndex={index} onSelect={handleSelect}
                interval={Variable.timeInterval}
            >
                {
                    dataSlide.map((item, index) => {
                        return (
                            <Carousel.Item key={index}>
                                <img
                                    className="d-block w-100"
                                    src={item.src}
                                    alt={item.alt}
                                />
                                <Carousel.Caption>
                                    <h3>{item.alt}</h3>
                                </Carousel.Caption>
                                <div className="bg-alpha"></div>
                            </Carousel.Item>
                        )
                    })
                }
              
            </Carousel>
        </div>
    );
}

export default CarouselSlide