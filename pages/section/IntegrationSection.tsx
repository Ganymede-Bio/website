import {
  schematicBeforeFeatures,
  schematicAfterFeatures
} from "../../utils/constants/schematic";
import DividerTitleLeft from "../../components/dividers/DividerTitleLeft";

export default function IntegrationSection() {
  return (
    <div
      id="integration-section"
      className="py-16 overflow-hidden lg:py-24"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <DividerTitleLeft title='What we do' />
        {/* <div className="relative">
          <h2 className="text-center text-4xl leading-14 font-bold tracking-tight text-gray-900 sm:text-5xl text-regal-purple">
            Before and After
          </h2>
        </div> */}

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
              <div className="text-regal-purple inline">Before:</div> Scientists perform analysis
              <div className="text-nathan-orange inline">
                { } locally
              </div> and enter results
              <div className="text-nathan-orange inline">
                { } manually
              </div> into apps
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Experimental results are challenging to trace, audit, and replicate.
            </p>

            <dl className="mt-10 space-y-10">
              {schematicBeforeFeatures.map((item) => (
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
              src="/schematic/before.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold text-gray-900 tracking-tight sm:text-3xl">
                <div className="text-regal-purple inline">After:</div> Raw experimental data and analysis are holistically
                <div className="text-nathan-orange inline"> captured</div> and
                <div className="text-nathan-orange inline"> versioned</div>
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Data validation, versioning, and workflows are performed in a cloud-native environment prior to syncing with your system of choice.
              </p>

              <dl className="mt-10 space-y-10">
                {schematicAfterFeatures.map((item) => (
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
                src="/schematic/after.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/*<div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
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
              width={490}
              src="/app/jsonlink_new.png"
              alt=""
            />
          </div> */}
      </div>
    </div>
    // </div >
  );
}
