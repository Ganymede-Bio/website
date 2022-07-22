import React from 'react'
import { SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import validator from "validator";
import { ScaleLoader } from "react-spinners"
import { HTMLInputTypeAttribute } from "react";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm(
  { register,
    formState: { errors, isSubmitted, isSubmitting },
    handleSubmit }: any
) {
  const onSubmit: SubmitHandler<IContactForm> = async function (item) {
    const payload = {
      method: "POST",
      body: JSON.stringify(item),
    }

    await Promise.allSettled(
      [fetch('../api/addToContact', payload), fetch("../api/sendEmail", payload)])
    // const data = await res.json();
    // console.log(data);
  };

  const showSubmittedMessage = () => {
    const msg = Object.keys(errors).length === 0 && (
      <p className="text-slate-700">
        Thank you for reaching out to us!
      </p>
    );
    return msg;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-y-6"
    >
      <div>
        <label htmlFor="full-name" className="sr-only">
          Full name
        </label>
        <input
          type="text"
          name="full-name"
          id="full-name"
          autoComplete="name"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Full name"
          {...register("name", {
            required: "Please enter your name",
          })}
        />
        <ErrorMessage errors={errors} name="name" />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Work email"
          {...register("email", {
            required: "Please enter your email address",
            validate: (val: HTMLInputTypeAttribute) =>
              validator.isEmail(val.toString()) ||
              "Please enter a valid email address",
          })}
        />
        <ErrorMessage errors={errors} name="email" />
      </div>
      {/* <div>
        <label htmlFor="phone" className="sr-only">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          autoComplete="tel"
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
          placeholder="Phone"
          {...register("phone", {
            validate: (val) =>
              validator.isMobilePhone(val.toString()) ||
              "Please enter a valid phone number",
          })}
        />
        <ErrorMessage errors={errors} name="phone" />
      </div> */}
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 border border-gray-300 rounded-md"
          placeholder="Message"
          defaultValue={""}
          {...register("message")}
        />
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-regal-purple-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
      <div className="text-xl font-light">
        <div className="ml-1">
          <ScaleLoader loading={isSubmitting} width={16} margin={1} />
        </div>
        {isSubmitted && !isSubmitting && showSubmittedMessage()}
      </div>
    </form>
  );
}
