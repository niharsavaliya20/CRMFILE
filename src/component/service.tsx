import About from "./about-us";
import './css/service.css'
import React from "react";

const Service = (props : any) => {

    const { serviceInfo } = props;

    
        return (
            <div>
                <div className="section-title-wrapper">
                    <h2 className="h2-title h2-title_reviews" >
                        Choose your Destiny </h2>
                    <span className="title__line"></span>
                </div>

                <figure className="grid cols-3 gap m-5 text-center ">

                    {serviceInfo.map((service: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                        <div key={service.id}>
                            <div className="card service-bg">
                                <div className="card-body">
                                    <h5 className="card-title p-3">{service.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">{ }</h6>
                                    <p className="card-text">{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </figure>
            </div>

        );
    
};

export default Service;