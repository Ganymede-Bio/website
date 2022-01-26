import { useForm, SubmitHandler } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import validator from "validator";
// import PhoneInput from "react-phone-number-input";
// import InputPhoneNumber from "../inputs/InputPhoneNumber";
// import {
//   isValidPhoneNumber,
//   validatePhoneNumberLength,
// } from "libphonenumber-js";

interface IContactForm {
  name: String;
  email: String;
  phone: String;
  message: String;
}

export default function ContactForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IContactForm>();

  const onSubmit: SubmitHandler<IContactForm> = async function (item) {
    // const res = await fetch("../api/addToContact", {
    //   method: "POST",
    //   body: JSON.stringify(item),
    // });
    // const data = await res.json();
    // console.log(data);
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
          placeholder="Email address"
          {...register("email", {
            required: "Please enter your email address",
            validate: (val) =>
              validator.isEmail(val.toString()) ||
              "Please enter a valid email address",
          })}
        />
        <ErrorMessage errors={errors} name="email" />
      </div>
      <div>
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
      </div>
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
          className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
