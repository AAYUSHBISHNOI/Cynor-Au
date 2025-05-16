"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { YourEmail, YourName, YourPhone } from "../Common/Icon";

const SendMessage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    const serviceId = "service_l8ffkws";
    const templateId = "template_73j7hqb";
    const publicKey = "2_LJF84hx4UrWCocR";

    const emailParams = {
      email,
      name,
      lastName,
      phone,
      message,
    };

    console.log("Sending email with the following data:", {
      serviceId,
      templateId,
      publicKey,
      emailParams,
    });

    emailjs
      .send(serviceId, templateId, emailParams, publicKey)
      .then(() => {
        setSuccessMessage("Your message has been sent successfully!");
        setEmail("");
        setName("");
        setLastName("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setErrorMessage(
          `Failed to send the message: ${
            error?.text || "Please try again later."
          }`
        );
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="py-10 lg:pt-14 xl:pt-40 lg:pb-28">
      <div className=" container max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-[40%] text-center md:text-start">
            <h1 className="font-Manrope text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#fb7221] leading-[116%]">
              SEND A MESSAGE
            </h1>
            <p className="font-Manrope text-base lg:text-[28px] leading-[126%] font-medium mt-2 md:mt-3 mb-0">
              We bring a personal and effective approach to every project we
              work on.
            </p>
            {/* Contact Form */}
            <div className="mt-10 md:mt-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Your Name */}
                <div className="relative w-full max-w-[744px]">
                  {name === "" && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <YourName />
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`w-full bg-transparent pt-2 pr-2 outline-none font-Manrope font-semibold text-xl leading-[116%] opacity-100 placeholder-gray-600 transition-all duration-300 ${
                      name === ""
                        ? "pl-14 md:placeholder:text-3xl"
                        : "pl-0 placeholder:text-base"
                    }`}
                  />
                </div>
                <hr className="bg-[#8e8e8e] h-0.5 w-full max-w-[744px]" />
                {/* Email */}
                <div className="relative w-full max-w-[744px] mt-16">
                  {email === "" && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <YourEmail />
                    </div>
                  )}
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full bg-transparent pt-2 pr-2 outline-none font-Manrope font-semibold text-black text-xl leading-[116%] opacity-100 placeholder-gray-600 transition-all duration-300 ${
                      email === ""
                        ? "pl-14 md:placeholder:text-3xl"
                        : "pl-0 placeholder:text-base"
                    }`}
                  />
                </div>
                <hr className="bg-[#8e8e8e] h-0.5 w-full max-w-[744px]" />
                {/* Phone Number */}
                <div className="relative w-full max-w-[744px] mt-16">
                  {phone === "" && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <YourPhone />
                    </div>
                  )}
                  <input
                    type="text"
                    placeholder="Phone Number"
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    className={`w-full bg-transparent pt-2 pr-2 outline-none font-Manrope font-semibold text-xl leading-[116%] opacity-100 placeholder-gray-600 transition-all duration-300 ${
                      phone === ""
                        ? "pl-14 md:placeholder:text-3xl"
                        : "pl-0 placeholder:text-base"
                    }`}
                  />
                </div>
                <hr className="bg-[#8e8e8e] h-0.5 w-full max-w-[744px]" />
                {/* Message */}
                <div className="relative w-full max-w-[744px] mt-16">
                  {message === "" && (
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                      <YourEmail />
                    </div>
                  )}
                  <textarea
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`w-full bg-transparent pt-2 pr-2 outline-none resize-none font-Manrope font-semibold text-xl leading-[116%] opacity-100 placeholder-gray-600 transition-all duration-300 ${
                      message === ""
                        ? "pl-14 md:placeholder:text-3xl"
                        : "pl-0 placeholder:text-base"
                    }`}
                  />
                </div>
                <hr className="bg-[#8e8e8e] h-0.5 w-full max-w-[744px]" />
                {/* Status Messages */}
                {successMessage && (
                  <p className="text-green-600">{successMessage}</p>
                )}
                {errorMessage && <p className="text-red-600">{errorMessage}</p>}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSending}
                  className="font-Manrope text-semibold text-2xl text-white bg-[#fb7221] py-4 px-10 xl:px-28 rounded-2xl hover:bg-black transition duration-700 mt-5 md:mt-10"
                >
                  {isSending ? "Sending..." : "SEND MESSAGE"}
                </button>
              </form>
            </div>
          </div>
          <div className="w-full md:w-[50%] flex justify-center mt-10">
            <img
              src="/Images/Home/Webp/SendImage.png"
              alt="Send Message"
              className="h-[518px] md:h-[730px] lg:h-[903px] max-w-[508px] w-full rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMessage;
