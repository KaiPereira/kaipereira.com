import React from "react"
import emailjs from "emailjs-com"


export default function ContactMain(props) {
    const form = React.useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cu9t9dx', 'template_1hdaicr', form.current, 'uMOzHGGuFxwXmHefZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
        <main>
            <section className="contactAlign">
                <div className="contact">
                    <div className="contactText">
                        <p className="contactTextSubHeader">Contact</p>
                        <h1>Let&apos;s Talk!</h1>
                        <p className="contactTextDescription">Send me a message through the form or even contact me directly at kaipereira2020@gmail.com</p>
                    </div>
                    <form className="contactForm" onSubmit={sendEmail} ref={form}>
                        <div>
                            <p className="contactFormName">* Name</p>
                            <input type="text" className="contactFormInput" placeholder="John Doe" name="first_name" required/>
                        </div>
                        <div>
                            <p className="contactFormName">* Email</p>
                            <input type="text" className="contactFormInput" placeholder="John Doe@service.com" name="email" required/>
                        </div>
                        <div className="contactFormInputSpan2">
                            <p className="contactFormName">* Reason</p>
                            <input type="text" className="contactFormInput" placeholder="Web Development" name="subject" required/>
                        </div>
                        <div className="contactFormInputSpan2">
                            <p className="contactFormName">* Reason</p>
                            <textarea type="text" className="contactFormTextarea" placeholder="We need help designing, developing and optimising a website for our new app ZenMind. Can you help?" name="message" required/>
                        </div>
                        <div className="contactFormSubmitAlign">
                            <button onMouseEnter={props.cursorEnter} onMouseLeave={props.cursorLeave}>Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    )
}