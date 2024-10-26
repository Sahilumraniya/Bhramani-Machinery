"use client";
import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields!", {
        position: "bottom-center",
        autoClose: 5000,
        theme: "dark",
      });
      return;
    }

    try {
      await toast.promise(
        fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, email, phone, message }),
        }).then(() => {
          setName("");
          setEmail("");
          setPhone("");
          setMessage("");
        }),
        {
          pending: "Sending your message...",
          success: "Message sent! We will get back to you soon.",
          error: "Oops! Something went wrong. Please try again.",
        }
      );
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section className="bg-gradient-to-r from-teal-500 to-cyan-600 text-gray-900">
        <div className="container mx-auto px-5 py-24">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
              Get in Touch
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-200">
              We would love to hear from you! Fill out the form below.
            </p>
            <div className="mt-6 text-gray-200">
              <p>
                Email:{" "}
                <a
                  href="mailto:bhramanimachinery@gmail.com"
                  className="text-white hover:underline"
                >
                  bhramanimachinery@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+918160796792"
                  className="text-white hover:underline"
                >
                  +91 8160796792
                </a>
              </p>
            </div>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="lg:w-1/2 md:w-2/3 mx-auto bg-white shadow-lg rounded-lg p-8"
          >
            <div className="flex flex-col space-y-4">
              <div>
                <label className="leading-7 text-sm text-gray-800">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base py-2 px-3"
                />
              </div>
              <div>
                <label className="leading-7 text-sm text-gray-800">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base py-2 px-3"
                />
              </div>
              <div>
                <label className="leading-7 text-sm text-gray-800">Phone</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="tel"
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 text-base py-2 px-3"
                />
              </div>
              <div>
                <label className="leading-7 text-sm text-gray-800">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 h-32 text-base py-2 px-3 resize-none"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="mx-auto bg-teal-600 text-white py-3 px-8 rounded-lg hover:bg-teal-700 transition"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
