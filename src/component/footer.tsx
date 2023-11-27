const Footer = () => {

    return (

        <>
           
            <div className="border-top border-danger border-5 container footer-font">
                <div className="py-5">
                    <div className="row">
                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column ">
                                <li className=" mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
                                <li className=" mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
                                <li className=" mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
                                <li className=" mb-2"><a href="#faq" className="nav-link p-0 text-light">FAQs</a></li>
                                <li className=" mb-2"><a href="#about-us" className="nav-link p-0 text-light">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#faq" className="nav-link p-0 text-light">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#about-us" className="nav-link p-0 text-light">About</a></li>
                            </ul>
                        </div>

                        <div className="col-6 col-md-2 mb-3">
                            <h5>Section</h5>
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Home</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Features</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-light">Pricing</a></li>
                                <li className="nav-item mb-2"><a href="#faq" className="nav-link p-0 text-light">FAQs</a></li>
                                <li className="nav-item mb-2"><a href="#about-us" className="nav-link p-0 text-light">About</a></li>
                            </ul>
                        </div>

                        <div className="col-md-5 offset-md-1 mb-3">
                            <form>
                                <h5>Subscribe to our newsletter</h5>
                                <p>Monthly digest of what's new and exciting from us.</p>
                                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                    <label className="visually-hidden">Email address</label>
                                    <div id="newsletter1" className="form-control" placeholder="Email address"></div>
                                    <button className="btn btn-primary" type="button">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Footer;