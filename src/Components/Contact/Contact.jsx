import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8fad75cc-4165-44c5-ae4c-7bc07d848ea7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    }


    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p>Feel free to reach out through contact or find our contact information below.
                    Your feedback,questions,and suggestions are important to us as we strive to provide
                    exceptional service to our university community.
                </p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@123.com</li>
                    <li><img src={phone_icon} alt="" />+91 1234567890</li>
                    <li><img src={location_icon} alt="" />Address,Place,Pincode-1234 <br />State,Country</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label >Enter your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label >Enter your Phone number</label>
                    <input type="text" name='phone' placeholder='Enter your mobile number' required />
                    <label >Write your message here</label>
                    <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                    <button className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                </form>
                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact
