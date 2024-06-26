import { Link } from "gatsby";
import React from "react";

export default function ContactThanks() {
  return (
    <div className="my-5 mx-5 text-start">
      <h1 className="my-5">Thank You for Getting in Touch!</h1>
      <h2 className="my-5">I Appreciate Your Message</h2>
      <p>Dear Visitor,</p>
      <p>
        Thank you for reaching out! Your message has been successfully received,
        and I appreciate you taking the time to contact me. I strive to respond
        to all inquiries as promptly as possible, so please expect to hear back
        from me soon.
      </p>
      <p>
        In the meantime, feel free to explore more of my work and stay updated
        on my latest projects. Your interest means a lot to me.
      </p>
      <p>Warm regards,</p>
      <p>Tom</p>
      <Link to="/">Back to Home Page</Link>
    </div>
  );
}
