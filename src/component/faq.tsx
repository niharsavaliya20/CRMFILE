import Accordion from 'react-bootstrap/Accordion';
import './css/faq.css'
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const Faq = (props : any) => {

    const { faqsInfo } = props;


    return (
        <>
            <div className="section-title-wrapper">
                <h2 className="h2-title h2-title_faq">
                    FAQ </h2>
                <span className="title__line"></span>
            </div>

            <Accordion className='faq-accordian'>

                {faqsInfo.map((faq: { id: Key ; question: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; answer: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
                    <div key={faq.id}>
                        <Accordion.Item eventKey={faq.id.toString()}>
                            <Accordion.Header >
                                <div className='faq-size'>{faq.question}</div></Accordion.Header>
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