import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "139dd538-3bf9-4300-b1e5-27be6379bb85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          molestiae commodi, sunt eos quia fuga dignissimos provident amet
          blanditiis iure.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Contact@mail.me
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91 1234 567 890
          </li>
          <li>
            <img src={location_icon} alt="" />
            Kandivali Mumbai SubUrban
            <br />
            Maharashtra India
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name:"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone Number:"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" cols="30" rows="10" required></textarea>
          <button type="submit" className="btn btn-blue">
            Submit now <img src={white_arrow} />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
