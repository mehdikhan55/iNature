import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        "service_pmiy664",
        "template_43r7qr7",
        form.current,
        "RwofKjhBu30YRXiZn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          form.current.reset(); 
        },
        (error) => {
          console.log(error.text);
        }
        
      );
  };

  return (
    <StyledContactForm>
      <form className="text-white" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input  placeholder="Enter Your Name" type="text" name="user_name" />
        <label>Email</label>
        <input placeholder="Enter Your Email" type="email" name="user_email" />
        <label>Message</label>
        <textarea placeholder="Message" name="message" />
        <input type="submit" value="Send" />
      </form>
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 400px;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #20c997;
      color: black;
      border: none;
      border: none;
    }
    input[type="submit"]:hover{
      margin-top: 2rem;
      cursor: pointer;
      background: transparent;
      color: #20c997;
      border: 2px solid #20c997;
    }
  }
`;