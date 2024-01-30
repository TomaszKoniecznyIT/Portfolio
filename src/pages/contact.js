import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      <div className="my-5">
        <h1>Contact me</h1>
        <p>
          I'm glad you visited my portfolio. I'll be happy to answer your
          questions!
        </p>
      </div>
      <ContactForm />
    </>
  );
}
