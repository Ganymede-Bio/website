/* eslint-disable @next/next/no-img-element */
import React from 'react'
import AnimateAppear from "../../components/animations/AnimateAppear";
import { imageHostURL } from "../../utils/constants/constants";
import {
  uiFeatures,
  apiFeatures,
  transfersFeatures,
} from "../../utils/content/productContent";

export default function ProductSection() {
  return (
    <section
      id="product-section"
      className="pt-8 overflow-hidden lg:pt-16"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <AnimateAppear startY={'5vw'}>
          <div className="relative">
            <h2 className="text-center text-4xl leading-14 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              The modern approach to automation
            </h2>
          </div>
        </AnimateAppear>

        <AnimateAppear startY={'5vw'}>
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="relative">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                The only <div className="inline text-regal-purple-light">entire-lab</div> integration and automation platform
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
                src={`${imageHostURL}/app/code_bioreactor.png`}
                alt=""
              />
            </div>
          </div>
        </AnimateAppear>
        <AnimateAppear startY={'5vw'}>
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
                  src={`${imageHostURL}/app/dag_bioreactor.png`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </AnimateAppear>
        <AnimateAppear startY={'5vw'}>
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
              <img
                className="relative mx-auto rounded-md shadow-lg"
                width={600}
                src={`${imageHostURL}/app/flow/GanymedeFlowScreenshot.png`}
                alt=""
              />
            </div>
          </div>
        </AnimateAppear>
      </div>
    </section>
  );
}
