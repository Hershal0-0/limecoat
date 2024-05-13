"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { sendEmail } from "../../utils/sendEmail";
import { contactFormType } from "@/src/types/forms";

export default function Contact() {
  const [formData, setFormData] = useState<contactFormType>({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

  const validateForm = (formData: contactFormType) => {
    return new Promise((resolve, reject) => {
      // Regular expression for email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      // Regular expression for name validation (only text)
      const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/;
      // Regular expression for mobile validation (only numbers)
      const mobileRegex = /^[0-9]+$/;

      if (!formData.name) {
        reject("Empty Name");
      } else if (!nameRegex.test(formData.name)) {
        reject("Invalid Name");
      } else if (!formData.email) {
        reject("Empty Email");
      } else if (!emailRegex.test(formData.email)) {
        reject("Invalid Email");
      } else if (!formData.mobile) {
        reject("Empty Mobile");
      } else if (!mobileRegex.test(formData.mobile)) {
        reject("Invalid Mobile");
      } else if (!formData.message) {
        reject("Empty Message");
      } else {
        resolve("Form is valid");
      }
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData);
    validateForm(formData)
      .then(() => {
        toast.success("Form is valid");

        sendEmail(formData)
          .then((res) => {
            console.log(res);
            if (res.status === 200) {
              toast.success("Email Sent Successfully");
              setFormData({
                name: "",
                email: "",
                mobile: "",
                subject: "",
                message: "",
              });
            }
          })
          .catch((err) => {
            toast.error(err);
          });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error, {
          duration: 3000,
        });
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const { name, email, mobile, subject, message } = formData;

  return (
    <div className="flex items-center justify-center xl:h-[80vh] ">
      <section className="w-full px-8 py-10 bg-black sm:w-[100%]  md:w-[90%] lg:w-[70%] xl:w-[60%] 2xl:w-[55%]">
        <div className="flex flex-col items-center gap-4 bg-white group sm:justify-between md:flex-row">
          <div className=" pt-10 md:h-[35rem] sm:w-[50%] pb-10 flex flex-col  justify-center items-center">
            <h1 className="text-[2.2rem]  h-[4rem] font-[200] group-hover:text-[2.5rem] group-hover:-translate-y-4 transition-all duration-300 ">
              Contact Us
            </h1>
            <h2 className="text-2xl font-[100] mt-3">
              {" "}
              Mumbai | Maharashtra | India.
            </h2>
            <h2 className="text-xl font-[100] mt-3">
              {" "}
              mahalaxmitextures@gmail.com
            </h2>

            <h2 className="text-lg font-[100] mt-3">
              {" "}
              +91-9029353543 | +91-8976449585
            </h2>
          </div>
          <div className=" h-[35rem] sm:w-[50%] md:pt-20 flex flex-col items-center">
            <div className="input_wrap">
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
              <label>Full Name *</label>
            </div>
            <div className="mt-4 input_wrap">
              <input
                type="text"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label>Email</label>
            </div>
            <div className="mt-4 input_wrap">
              <input
                type="text"
                name="mobile"
                value={mobile}
                onChange={handleChange}
                required
              />
              <label>Phone</label>
            </div>
            <div className="mt-4 input_wrap">
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={handleChange}
                required
              />
              <label>Subject</label>
            </div>
            <div className="mt-4 input_wrap">
              <input
                type="textarea"
                name="message"
                value={message}
                onChange={handleChange}
                required
              />
              <label>Message</label>
            </div>
            <div className="w-[300px] flex justify-between items-center mt-4 ">
              <p className=" text-[white] text-lg font-[200] text-center">
                Thanks For Submitting
              </p>
              <button
                className="h-10 px-5 rounded-sm bg-slate-300"
                onClick={handleSubmit}
              >
                {" "}
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
