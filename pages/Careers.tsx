import { UsersIcon } from "@heroicons/react/solid";
import {
  workableURL,
  careerSortOrder,
  corporatePrinciples,
} from "../utils/constants/constants";
import Image from "next/image";

interface IPosition {
  id: string;
  title: string;
  full_title: string;
  shortcode: string;
  code: string;
  state: string;
  department: string;
  department_hierarchy: {
    id: number;
    name: string;
  };
  url: string;
  application_url: string;
  shortlink: string;
  location: {
    location_str: string;
    country: string;
    country_code: string;
    region: string;
    region_code: string;
    city: string;
    zip_code: string;
    telecommuting: boolean;
  };
  created_at: Date;
}

interface IPositions {
  [positions: string]: Array<IPosition>;
}

export async function getStaticProps() {
  const res = await fetch(workableURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.WORKABLE}`,
      "Content-Type": "application/json",
    },
  });

  const data = await res.json();
  const positions = data.jobs.sort(function (a: IPosition, b: IPosition) {
    if (a.department == b.department) {
      if (careerSortOrder.get(a.title) == careerSortOrder.get(b.title))
        return 0;
      if (careerSortOrder.get(a.title) < careerSortOrder.get(b.title))
        return -1;
      if (careerSortOrder.get(a.title) > careerSortOrder.get(b.title)) return 1;
    }

    if (a.department.toUpperCase() < b.department.toUpperCase()) return -1;
    if (a.department.toUpperCase() > b.department.toUpperCase()) return 1;
  });
  const jobCategories: string[] = Array.from(
    new Set(positions.map((position: IPosition) => position.department.trim()))
  );

  let positionsOutput = new Map<string, IPosition[]>();

  for (const category of jobCategories) {
    positionsOutput.set(
      category,
      positions.filter(
        (position: IPosition) => position.department.trim() === category
      )
    );
  }

  return { props: Object.fromEntries(positionsOutput) };
}

export default function Careers(positions: IPositions) {
  return (
    <>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="pb-6">
              <Image
                src="/logo/favicon.png"
                alt=""
                width={50}
                height={50}
                quality={100}
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 pb-12">
              Careers at Ganymede
            </h2>
          </div>
          <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
            {corporatePrinciples.map((principle) => (
              <div key={principle.name} className="relative">
                <dt>
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-800">
                    {principle.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">
                  {principle.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-gray-50 px-4 py-8 border-b border-gray-200 sm:px-6">
        <h3 className="text-2xl leading-6 font-medium text-gray-900 text-center">
          Openings
        </h3>
      </div>
      {/* <p className="text-gray-900 text-xl text-left">{categories[1]}</p> */}
      {/* {["Engineering", "General"].map((category: string) => ( */}
      <div className="bg-gray-50 shadow overflow-hidden sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {positions["Engineering"]
            // .filter((p: IPosition) => p.department === category)
            .map((position: IPosition) => (
              <li key={position.id}>
                <a href={position.url} className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-nathan-orange truncate">
                        {position.title}
                      </p>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {position.department}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-md text-gray-500">
                          <UsersIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.department}
                        </p>
                        {/* <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.location.location_str}
                        </p> */}
                      </div>
                      {/* <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <CalendarIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Closing on{" "}
                          <time dateTime={position.created_at}>
                            {position.created_at}
                          </time>
                        </p> 
                      </div> */}
                    </div>
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </div>
      {/* ))} */}
    </>
  );
}
