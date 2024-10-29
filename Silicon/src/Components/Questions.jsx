const Questions = () => {

    return(
        <>
            <section className="questions">
            <div className="container">
                <h2>Any questions? <br/> Check out the FAQs</h2>
                <p className="questions-text">Still have unanswered questions and need to get in touch?</p>
                <div className="questions-wrapper">
                    <div className="questions-card">
                        <img className="logo" src="/HTML-assignment/Assets/phone-icon.svg" alt="purple phone dialing."/>
                        <p className="card-text">Still have questions?</p>
                        <a className="phone-contact" href="#">Contact us <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                    <div className="questions-card">
                        <img className="logo" src="/HTML-assignment/Assets/message-icon.svg" alt="green message icon."/>
                        <p className="card-text">Don't like phone calls?</p>
                        <a className="text-contact" href="#">Contact us <i className="fa-regular fa-arrow-right"></i></a>
                    </div>
                </div>

                <div className="faqs">
                    <div className="faq-card">
                        <h3>Is any of my personal information stored in the App? <i className="fa-duotone fa-solid fa-circle-chevron-down" style="--fa-primary-color: #33354d; --fa-secondary-color: #f3f6ff;"></i></h3>
                    </div>

                    <div className="faq-card">
                        <h3>What formats can I download my transaction history in? <i className="fa-duotone fa-solid fa-circle-chevron-down" style="--fa-primary-color: #33354d; --fa-secondary-color: #f3f6ff;"></i></h3>
                    </div>

                    <div className="faq-card">
                        <h3>Can I transfer future transfers? <i className="fa-duotone fa-solid fa-circle-chevron-up" style="--fa-primary-color: #ffffff; --fa-secondary-color: #6366f1; --fa-secondary-opacity: 1;"></i></h3>
                        <p className="answer">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>

                    <div className="faq-card">
                        <h3>When can I use Banking App services? <i className="fa-duotone fa-solid fa-circle-chevron-down" style="--fa-primary-color: #33354d; --fa-secondary-color: #f3f6ff;"></i></h3>
                    </div>

                    <div className="faq-card">
                        <h3>Can I create my own password that is easy for me to remember? <i className="fa-duotone fa-solid fa-circle-chevron-down" style="--fa-primary-color: #33354d; --fa-secondary-color: #f3f6ff;"></i></h3>
                    </div>

                    <div className="faq-card">
                        <h3>What happens if I forget or lose my password? <i className="fa-duotone fa-solid fa-circle-chevron-down" style="--fa-primary-color: #33354d; --fa-secondary-color: #f3f6ff;"></i></h3>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Questions