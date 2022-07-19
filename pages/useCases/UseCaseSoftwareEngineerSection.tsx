import {
  infraUseCaseSoftware,
  principlesUseCaseSoftware,
  whatIsGanymedeUseCaseSoftware,
} from "../../utils/content/useCaseContent";

export default function UseCaseSoftwareEngineerSection() {
  return (

    <section
      id="use-case-software-engineer-section"
      className="py-16 overflow-hidden lg:pt-16"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-14 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            <div className="inline text-regal-purple-light">End-to-end</div> computing for your wet and dry labs
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Lab-as-code for engineers
            </h3>
            <h3 className="mt-3 text-lg text-gray-500">
              Ganymede let's you manage data from your lab instruments, ELN/LIMS, and pipelines on a unified workflow management platform.
            </h3>

            <dl className="mt-10 space-y-10">
              {whatIsGanymedeUseCaseSoftware.map((item) => (
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
              src="/placeholder_image.png"
              alt=""
            />
          </div>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Spend less time on cloud plumbing, more time on analysis
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Ganymede connects everything from instruments to LIMS to pipelines with cloud-native infrastructure that scales and parallelizes your code.
              </p>

              <dl className="mt-10 space-y-10">
                {infraUseCaseSoftware.map((item) => (
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
                src="/placeholder_image.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Built for, rather than adapted to, developers and analysts
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              The Ganymede cloud to provide a common ground for high-code and low-code users, to maximize ergonomics for data-driven workflows.
            </p>

            <dl className="mt-10 space-y-10">
              {principlesUseCaseSoftware.map((item) => (
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
              src="/placeholder_image.png"
              alt=""
            />
          </div>
        </div>

      </div>
    </section>

  );
}