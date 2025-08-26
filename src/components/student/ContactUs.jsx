import React from "react";
import { assets } from "../../assets/assets";
import { FollowingPointerDemo } from "../ui/Followingpointerdemo";

const ContactUs = () => (
  <div className="contactus-main">
    <style>{`
      .contactus-main {
        font-family: 'Outfit', Arial, sans-serif;
        background: #f7fafc;
        color: #1a202c;
        min-height: 100vh;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .contactus-container {
        display: flex;
        flex-direction: row;
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.09);
        max-width: 980px;
        width: 100%;
        margin: 56px 0;
        padding: 0;
        overflow: hidden;
      }
      .contactus-left {
        flex: 1.2;
        background: #f1f5f9;
        padding: 48px 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
      .contactus-left h1 {
        color: #2563eb;
        font-size: 2.2rem;
        font-weight: 800;
        margin-bottom: 1.2em;
        letter-spacing: -1px;
      }
      .contactus-left form {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.3em;
      }
      .contactus-left label {
        font-weight: 600;
        margin-bottom: 0.4em;
        color: #1a202c;
      }
      .contactus-left input, .contactus-left textarea {
        padding: 0.85em 1em;
        border: 1.5px solid #cbd5e1;
        border-radius: 7px;
        font-size: 1.07rem;
        background: #fff;
        margin-top: 0.1em;
        width: 100%;
        box-sizing: border-box;
        transition: border 0.2s;
      }
      .contactus-left input:focus, .contactus-left textarea:focus {
        border-color: #2563eb;
        outline: none;
        background: #e0e7ef;
      }
      .contactus-left textarea { min-height: 110px; }
      .contactus-left .send-btn {
        background: #2563eb;
        color: #fff;
        border: none;
        border-radius: 7px;
        padding: 1em 0;
        font-size: 1.13rem;
        font-weight: 700;
        cursor: pointer;
        margin-top: 0.5em;
        text-align: center;
        text-decoration: none;
        box-shadow: 0 2px 8px rgba(37,99,235,0.07);
        transition: background 0.2s;
      }
      .contactus-left .send-btn:hover {
        background: #1d4ed8;
      }
      .contactus-right {
        flex: 1;
        background: #fff;
        padding: 48px 36px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        border-left: 1.5px solid #e5e7eb;
      }
      .contactus-right .images-container {
        width: 100%;
        margin-bottom: 1.5em;
        display: flex;
        justify-content: center;
      }
      .contactus-right .images-container img {
        width: 550px;
        border-radius: 12px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.09);
        object-fit: cover;
      }
      .contactus-right .address,
      .contactus-right .contact-info {
        background: #f1f5f9;
        padding: 1.1em 1em;
        border-radius: 8px;
        font-size: 1.07rem;
        margin-bottom: 0.7em;
        text-align: left;
        line-height: 1.6;
        width: 100%;
      }
      .contactus-right .contact-info a {
        color: #2563eb;
        text-decoration: underline;
        word-break: break-all;
      }
      @media (max-width: 900px) {
        .contactus-container {
          flex-direction: column;
          max-width: 98vw;
        }
        .contactus-left, .contactus-right {
          padding: 32px 16px;
          border-left: none;
        }
        .contactus-right .images-container img {
          width: 100%;
          max-width: 320px;
        }
      }
      @media (max-width: 600px) {
        .contactus-left, .contactus-right {
          padding: 18px 6px;
        }
        .contactus-left h1 { font-size: 1.5rem; }
      }
    `}</style>
    <div className="contactus-container">
      {/* Left: Form */}
      <div className="contactus-left">
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="How can we help you?"></textarea>
          </div>
          <a
            href="mailto:Support@v-edu.us"
            className="send-btn"
          >
            Send Message
          </a>
        </form>
      </div>
      {/* Right: Info & Image */}
      <div className="contactus-right">
        <div className="images-container">
          <img src={assets.about3} alt="About V-EDU 3" />
        </div>
        <div className="address">
          <strong>Address:</strong><br />
          1908 Thomes Ave STE 12363,<br />
          Cheyenne, WY 82001
        </div>
        <div className="contact-info">
          <strong>Phone:</strong> +1 888-344-4990<br />
          <strong>Email:</strong> <a href="mailto:support@v-edu.us">support@v-edu.us</a>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;