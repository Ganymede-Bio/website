import React from 'react'
import { EnvelopeIcon, PhoneIcon, UsersIcon } from "@heroicons/react/24/outline";
import ContactForm from "../../components/forms/ContactForm";
import AnimateAppear from "../../components/animations/AnimateAppear";
import DividerTitleLeft from "../../components/dividers/DividerTitleLeft";
import { classNames } from "../../utils/util";
import { useForm } from "react-hook-form";

interface IContactForm {
  name: string;
  email: string;
  message: string;
}

interface IContactProps {
  title?: boolean;
}

export default function Contact({ title = true }: IContactProps) {
  const form = useForm<IContactForm>();

  return (
    <section id="contact-section">
      {title && <DividerTitleLeft title='Contact Us' />}
      <AnimateAppear startY={'5vw'}>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 pt-6">
          <div className={classNames(
            form.formState.isSubmitting || !form.formState.isSubmitted ? "bg-white" : "bg-stone-300",
            "rounded-lg py-16 px-4 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12")}>
            <div className="max-w-lg mx-auto lg:max-w-none">
              <ContactForm register={form.register} formState={form.formState} handleSubmit={form.handleSubmit} />
            </div>
          </div>
          <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-2 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl flex justify-center">
                Get in touch
              </h2>
              <div className="mt-3 text-lg leading-6 text-gray-500">
                <p>
                  We&apos;d love to hear from you. <a href="https://calendly.com/alan_ganymedebio/30-minute-meeting"
                    className="inline font-semibold hover:text-blue-800 visited:text-regal-purple">Request a demo</a>, ask us questions,
                  inquire about openings, or just send us a note with how we can help!
                </p>
              </div>
              <dl className="mt-6 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <div className="flex flex-col items-center mb-6">
                      <p>Ganymede Bio</p>
                      <p>3000 El Camino Real</p>
                      <p>Bldg. 4, Suite 200</p>
                      <p>Palo Alto, CA 94306</p>
                    </div>
                  </dd>
                </div>
                <div className="mt-4">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-600 font-medium hover:font-semibold hover:text-blue-800">
                      <a href="tel:+14154099768">
                        +1 (415) 409-9768
                      </a></span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-600 font-medium">
                      <a href="mailto:hello@ganymede.bio"
                        className="inline hover:font-semibold hover:text-blue-800 visited:text-regal-purple">
                        hello@ganymede.bio
                      </a>
                    </span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Schedule a demo</dt>
                  <dd className="flex">
                    <UsersIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-600"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-gray-600 font-medium">
                      <a href="https://calendly.com/alan_ganymedebio/30-minute-meeting"
                        className="inline hover:font-semibold hover:text-blue-800 visited:text-regal-purple">
                        Schedule a demo
                      </a>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </AnimateAppear >
    </section >
  );
}
