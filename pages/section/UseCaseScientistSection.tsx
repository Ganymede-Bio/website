import {
  connectFeatures,
  apiFeatures,
  analysisFeatures,
  storageFeatures
} from "../../utils/content/useCaseContent";

export default function UseCaseScientistSection() {
  return (

    <div
      id="use-case-scientist-section"
      className="pt-8 overflow-hidden lg:pt-16"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-14 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            The modern approach to automation
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              The only <div className="inline text-regal-purple-light">entire-lab</div> integration and automation platform
            </h3>
            <h3 className="mt-3 text-lg text-gray-500">
              Connect all your lab instruments to a cloud environment complete with data, metadata, and code versioning
            </h3>
            {/* <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Connect your instruments to the cloud, complete with data versioning
            </h3> */}

            <dl className="mt-10 space-y-10">
              {connectFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-nathan-orange text-white">
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
              src="/placeholder_image.png"
              alt=""
            />
          </div>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Sync your data with your ELN/LIMS of choice
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Create apps and automate your work whether you're an engineer or scientist. Ganymede flexibly configures to
                interact with your preferred analytical environment.
              </p>

              <dl className="mt-10 space-y-10">
                {apiFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-nathan-orange text-white">
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
                src="/placeholder_image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Never do data entry again
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Form a clean interface between your internal databases, CRO outputs, and external databases.
            </p>

            <dl className="mt-10 space-y-10">
              {analysisFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-nathan-orange text-white">
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
              src="/placeholder_image.png"
              alt=""
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
                Create apps and automate your work whether you're an engineer or scientist. Ganymede automatically generates a UI for mapping data that serves engineers' integrations as tables.
              </p>

              <dl className="mt-10 space-y-10">
                {storageFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-nathan-orange text-white">
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
                src="/placeholder_image.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}