import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_v2o8hi9",
                "template_htx43zn",
                form.current,
                "F8sHjPP9v8vJ8_m1D"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message envoyé avec succès !");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert("Votre message n'a pas pu être envoyé, réessayez plus tard.");
                }
            );
    };

    return (
                <div className="contact-form">
                    <h3>Envoyez-moi un mail</h3>
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name="title" placeholder="Sujet de votre mail" required />
                        <input type="text" name="name" placeholder="Votre nom" required />
                        <input type="email" name="email" placeholder="Votre email" required />
                        <textarea name="message" placeholder="Votre message" required></textarea>
                        <input type="submit" value="Envoyer" className="submit-btn"/>
                    </form>
                </div>
    );
};

export default Contact;
