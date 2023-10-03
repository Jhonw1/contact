import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css'

export const ContactUs = () => {
    const refForm =useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        const serviceId="service_mw849qp";
        const templateId="template_j17sgxq";
        const apikey="WYphGnszER9Zy8YDu"
        emailjs.sendForm(serviceId, templateId,refForm.current,apikey)
        .them(result => console.log(result.text))
        .catch(error => console.error(error))
    }
  return (
        <form ref={refForm} action="" onSubmit={handleSubmit}>
            <div className="header-contact">
                <h2>Contact Us</h2>
                <p>please fill this form </p>
            </div>
            <fieldset className='field-name'>
                <label className='symbol-required-name' htmlFor="">Name</label>
                <input 
                name='username'
                type="text"
                placeholder='ej: jhon'
                required 
                />
            </fieldset>

            <fieldset className='field-email'>
                <label className='symbol-required-email' htmlFor="">Email</label>
                <input 
                name='email'
                id='email'
                type="email"
                placeholder='ej: jhon@gmail.com'
                required 
                />
            </fieldset>

            <fieldset className='field-message'>
                <label className='symbol-required-mesage' htmlFor="">Message</label>
                <textarea maxLength="500" placeholder='type your message' name="message" id="" cols="30" rows="10"></textarea>
            </fieldset>
            <button className='btn-send'>Enviar</button>
        </form>
    )
}
