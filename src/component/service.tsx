
import React from "react";

const Service = (props : any) => {

    const { serviceInfo } = props;

    
        return (
            <div>
                <div className="d-flex flex-column align-items-center mb-5 ">
                    <h2 className="fs-2 fw-bold text-white mt-5 mb-3 " >
                        Choose your Destiny </h2>
                    <span className="title__line"></span>
                </div>

                <figure className="d-grid cols-3 gap container text-center ">

                    {serviceInfo.map((service: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                        <div className=" " key={service.id}>
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