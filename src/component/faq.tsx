import Accordion from 'react-bootstrap/Accordion';

import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const Faq = (props : any) => {

    const { faqsInfo } = props;


    return (
        <>
            <div className="d-flex flex-column align-items-center mt-5 ">
                <div className="fs-2 fw-bold">
                    FAQ </div>
                <span className="title__line"></span>
            </div>

            <Accordion className='container mb-5 d-flex flex-column gap-3'>

                {faqsInfo.map((faq: { id: Key ; question: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; answer: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                    <div key={faq.id}>
                        <Accordion.Item eventKey={faq.id.toString()}>
                            <Accordion.Header >
                                <div className='fs-5 fw-medium '>{faq.question}</div></Accordion.Header>
                            <Accordion.Body>
                               {faq.answer}  
                            </Accordion.Body>
                        </Accordion.Item>                      
                    </div>
                ))}
            </Accordion>
        </>

    );
};

export default Faq;