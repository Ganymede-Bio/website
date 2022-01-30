import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import ContactForm from "../../components/forms/ContactForm";

export default function Contact() {
  return (
    <>
      <div id="contact-section" className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <div className="mt-3 text-lg leading-6 text-gray-500">
                <p>
                  We'd love to hear from you. Ask us a question, or just send us
                  a note to keep up with our news as we get close to launching.
                </p>
                <p className="mt-3">
                  We may reach out to learn more about how we can help build a
                  great product for you.
                </p>
              </div>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>Ganymede Bio</p>
                    <p>PO Box 225273</p>
                    <p>San Francisco, CA 94122</p>
                  </dd>
                </div>
                <div className="mt-6">
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
              {/* <p className="mt-6 text-base text-gray-500">
                Looking for careers?{" "}
                <a href="#" className="font-medium text-gray-700 underline">
                  View all job openings
                </a>
                .
              </p> */}
            </div>
          </div>
          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12 rounded-lg">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
