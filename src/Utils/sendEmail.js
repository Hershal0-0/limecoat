import React from "react";
import { Resend } from "resend";
// import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "../Components/ContactFormEmail";

const resend = new Resend(process.env.REACT_APP_RESEND_API_KEY);

export const sendEmail = async (formData) => {
  const senderEmail = formData.email;
  const message = formData.message;

  // simple server-side validation
  //   if (!validateString(senderEmail, 500)) {
  //     return {
  //       status: 400,
  //       error: "Invalid sender email",
  //     };
  //   }
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!emailRegex.test(senderEmail)) {
  //     return {
  //       status: 400,
  //       error: "Invalid sender email",
  //     };
  //   }
  //   if (!validateString(message, 5000)) {
  //     return {
  //       status: 401,
  //       error: "Invalid message",
  //     };
  //   }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hershalrao.acc@gmail.com",
      subject: "Message from Limecoat contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
  } catch (error) {
    return {
      status: 402,
      error: error,
    };
  }

  return {
    status: 200,
    data,
  };
};
