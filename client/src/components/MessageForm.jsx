import React, { useState } from "react";
import toast from "react-toastify";

import axios from "axios";

const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const onFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const onLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const onPhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onMessageChange = (e) => {
    setMessage(e.target.value);
  };
  const submitHanler = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://localhost:5174/api/v1/message/send",
          { firstName, lastName, email, phoneNumber, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setPhoneNumber("");
          setEmail("");
          setMessage("");
        });
    } catch (error) {
        toast.error(error.response.data.message)
    }
  };

  return (
    <div className="container message-form form-component">
      <h2>Send Us A Message</h2>
      <form action="" onSubmit={submitHanler}>
        <div>
          <input
            type="text"
            value={firstName}
            onChange={(e) => onFirstNameChange(e)}
            placeholder="First Name"
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => onLastNameChange(e)}
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => onEmailChange(e)}
            placeholder="email"
          />
          <input
            type="number"
            value={phoneNumber}
            onChange={(e) => onPhoneNumberChange(e)}
            placeholder="Phone Number"
          />
        </div>
        <textarea
          rows={7}
          value={message}
          onChange={(e) => onMessageChange(e)}
          placeholder="message"
        ></textarea>
        <div>
          <button style={{ justifyContent: "center", alignItems: "center" }}>
            Send
          </button>
        </div>
      </form>
      <img src="/Vector.png" alt="vector" />
    </div>
  );
};

export default MessageForm;
