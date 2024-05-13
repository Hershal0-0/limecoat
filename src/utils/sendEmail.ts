"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../utils/validation";
import ContactFormEmail from "../components/ContactFormEmail";
import { contactFormType } from "../types/forms";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: contactFormType) => {
  const senderEmail = formData.email;
  const message = formData.message;
  const subject = formData.subject;
  const mobile = formData.mobile;
  const name = formData.name;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      status: 400,
      error: "Invalid sender email",
    };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(senderEmail)) {
    return {
      status: 400,
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      status: 401,
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "hershalrao.acc@gmail.com",
      subject: "Message from Portfolio contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        name,
        mobile,
        subject,
      }),
    });
  } catch (error: unknown) {
    return {
      status: 402,
      error: getErrorMessage(error),
    };
  }

  return {
    status: 200,
    data,
  };
};
