/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {
  uiFeatures,
  apiFeatures,
  transfersFeatures,
} from "../../utils/content/productContent";

export default function FeaturesSection() {
  return (
    <section
      id="features-section"
      className="py-16 overflow-hidden lg:py-24"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-14 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Your lab&apos;s core data + automation backbone
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
            Ganymede makes it as easy as possible for software engineers to write integrations, connect software and hardware, and push data around with intuitive versioning.
          </p>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Rapidly develop integrations in code...
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Quickly write, test, and run integrations between everything in your lab. Develop your own connectors and types, or extend our library.
            </p>

            <dl className="mt-10 space-y-10">
              {apiFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-regal-purple-light text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            <img
              className="relative mx-auto rounded-md shadow-lg"
              width={490}
              src="/app/code_bioreactor.png"
              alt="Bioreactor connector code"
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                ...and generate UIs to manage them
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Create apps and automate your work whether you&apos;re an engineer or scientist. Ganymede automatically generates a UI for mapping data that serves engineers&apos; integrations as tables.
              </p>

              <dl className="mt-10 space-y-10">
                {uiFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-regal-purple-light text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                      {item.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
              <img
                className="relative mx-auto rounded-md shadow-lg"
                width={490}
                src="/app/dag_bioreactor.png"
                alt="Bioreactor flow"
              />
            </div>
          </div>
        </div>
        {/* <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4 mt-80"
          width={404}
          height={504}
          fill="none"
          viewBox="0 0 404 504"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg> */}

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Tame your files and tech transfers
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Form a clean interface to CROs and tech transfers with powerful
              file-based tooling.
            </p>

            <dl className="mt-10 space-y-10">
              {transfersFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-regal-purple-light text-white">
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                      {item.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">
                    {item.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
            {/* <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg> */}
            <img
              className="relative mx-auto rounded-md shadow-lg"
              width={490}
              src="/app/jsonlink_new.png"
              alt="Flow cytometry dag"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
