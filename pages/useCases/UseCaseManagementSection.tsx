import { imageHostURL } from "../../utils/constants/constants";
import {
  costEfficiencyUseCaseManagement,
  structuredDataUseCaseManagement,
  dataIntegrityUseCaseManagement,
  scalabilityUseCaseManagement
} from "../../utils/content/useCaseContent";

export default function UseCaseManagementSection() {
  return (

    <section
      id="use-case-scientist-section"
      className="py-8 overflow-hidden lg:pt-16"
    >
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="relative">
          <h2 className="text-center text-4xl leading-14 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Realize the <div className="inline text-regal-purple-light">full potential</div> of an automated lab
          </h2>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Maximize the <div className="inline text-regal-purple-light">cost-efficiency</div> of your lab operations
            </h3>
            <h3 className="mt-3 text-lg text-gray-500">
              Streamline and automate all lab workflows with Ganymede's flexible cloud platform.  We provide lab instrument integration and data/analysis automation that easily fit into any organization, providing scale, more cost-effective operation, and faster iteration time.
            </h3>
            {/* <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Connect your instruments to the cloud, complete with data versioning
            </h3> */}

            <dl className="mt-10 space-y-10">
              {costEfficiencyUseCaseManagement.map((item) => (
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
              src={`${imageHostURL}/useCase/10 - Maximize the cost-efficiency of your lab operations.png`}
              alt=""
            />
          </div>
        </div>


        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                All your lab data structured and in one accessible spot
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Standardize and centralize your data from instruments, apps, analyses, and even third-party data from partners like CROs or CDMOs.
              </p>

              <dl className="mt-10 space-y-10">
                {structuredDataUseCaseManagement.map((item) => (
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
                src={`${imageHostURL}/useCase/11 - All your lab data structured and in one accessible spot.png`}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
              Institutionalize data integrity and pave the way to GxP
            </h3>
            <p className="mt-3 text-lg text-gray-500">
              Ensure robust GxP compliance by targeting the three biggest sources of vulnerability: documentation, processes, and people.
            </p>

            <dl className="mt-10 space-y-10">
              {dataIntegrityUseCaseManagement.map((item) => (
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
              src={`${imageHostURL}/useCase/12 - Institutionalize data integrity and pave the way to GxP.png`}
              alt=""
            />
          </div>
        </div>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Handle <div className="inline text-regal-purple-light">more data</div> with less people
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Manage the data flows in your organization with our lab-as-code cloud platform that’s built to organically grow with your evolving business needs.
              </p>

              <dl className="mt-10 space-y-10">
                {scalabilityUseCaseManagement.map((item) => (
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
                src={`${imageHostURL}/useCase/13 - Handle more data with less people.gif`}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}