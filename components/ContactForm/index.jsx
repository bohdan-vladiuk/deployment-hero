"use client";

import React from "react";
import "./styles.scss";

function Contact() {
  return (
    <div className="contact bg-white">
      <p className="pb-3">Send us a message</p>
      <form action="">
        <div className="w-full grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                placeholder="John"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                type="text"
                className="form-control"
                placeholder="Doe"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                className="form-control"
                placeholder="email@email.com"
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Customize my ERP PLEASE"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[6px] lg:col-span-2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={8}
              className="form-control"
              placeholder="You! Fix! I! Pay!"
            />
          </div>
          <div className="flex justify-end lg:col-span-2">
            <button className="btn btn-blue w-[216px]">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
