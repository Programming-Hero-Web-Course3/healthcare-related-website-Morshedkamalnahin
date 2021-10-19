import React from 'react'
import { Carousel, CarouselItem, } from 'react-bootstrap'

const Banner = () => {
    return (
        <div className="container mt-5 p-1">
            <Carousel >
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src="https://www.masvenarch.com/wp-content/uploads/2015/03/news-post5.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src="https://www.masvenarch.com/wp-content/uploads/2015/03/news-post5.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </CarouselItem>
                <CarouselItem>
                    <img
                        className="d-block w-100"
                        src="https://www.masvenarch.com/wp-content/uploads/2015/03/news-post5.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </CarouselItem>
            </Carousel>
        </div>


    )
}

export default Banner;
