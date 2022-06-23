import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import ContactForm from "../../components/forms/ContactForm";
import AnimateAppear from "../../components/animations/AnimateAppear";
import DividerTitleLeft from "../../components/dividers/DividerTitleLeft";

export default function Contact() {
  return (
    <section id="contact-section">
      <DividerTitleLeft title='Contact Us' />
      <AnimateAppear startY={'5vw'}>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5 pt-6">
          <div className=" py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-12 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-3 text-lg leading-6 text-gray-500">
                <p>
                  We'd love to hear from you. Request a demo, ask us questions,
                  inquire about openings, or keep up with our developments as we launch.
                </p>
              </div>
              <dl className="mt-4 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>Ganymede Bio</p>
                    <p>PO Box 225273</p>
                    <p>San Francisco, CA 94122</p>
                  </dd>
                </div>
                <div className="mt-4">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (415) 409-9768</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">hello@ganymede.bio</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-12 lg:px-8 xl:pl-12 rounded-lg">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </AnimateAppear>
    </section>
  );
}
