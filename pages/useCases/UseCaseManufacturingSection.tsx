import {
  storageUseCaseManufacturing,
  integrationUseCaseManufacturing,
  modernUseCaseManufacturing
} from "../../utils/content/useCaseContent";

export default function UseCaseManufacturingSection() {
  return (

    <section
      id="use-case-manufacturing-section"
      className="py-8 overflow-hidden lg:pt-16"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-14 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Capture, integrate, and <div className="inline text-regal-purple-light">version</div> all equipment and app data in the cloud
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Say goodbye to audit logs
            </h3>
            <h3 className="mt-3 text-lg text-gray-500">
              All data is logged, versioned, and normalized in one environment.
            </h3>
            <dl className="mt-10 space-y-10">
              {storageUseCaseManufacturing.map((item) => (
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
              width={550}
              src="/useCase/7 - Say goodbye to audit logs.png"
              alt=""
            />
          </div>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Enrich your systems and data with their full context
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Integrate your LIMS with your raw data capture, so you can ensure collected data remains interpretable throughout its lifecycle
              </p>

              <dl className="mt-10 space-y-10">
                {integrationUseCaseManufacturing.map((item) => (
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
                width={550}
                src="/useCase/8 - Enrich your systems and data with their full context.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Track data, compute KPIs, and share observations from a single platform
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Standardize and centralize your data observations, streamlining data-driven decisions across your manufacturing operations.
            </p>

            <dl className="mt-10 space-y-10">
              {modernUseCaseManufacturing.map((item) => (
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
              width={550}
              src="/useCase/9 - Track data, compute KPIs, and share observations from a single platform.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>

  );
}