import Carousel from 'react-bootstrap/Carousel';


import { JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import './css/review.css'

const Review = (props : any) => {

    const { reviewsInfo } = props;


    return (
        <>
            <div className="section-title-wrapper">
                <h2 className="h2-title h2-title_reviews">
                    Reviews </h2>
                <span className="title__line"></span>
            </div>

            <Carousel>
                {reviewsInfo.map((review: { id: Key | null | undefined; src: string | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                    <Carousel.Item key={review.id}>
                        <img
                            className="d-block w-100" height="400"
                            src={review.src}
                            alt={`Slide ${review.id}`}
                        />
                        <Carousel.Caption>
                            <div className="carousel-caption h bg-secondary d-none d-md-block rounded-5 px-5 bottom">
                                <h5 className="fs-2">{review.title}</h5>
                                <p className="fs-5">{review.description}</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

        </>

    );

};

export default Review;