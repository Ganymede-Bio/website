import { UsersIcon, LocationMarkerIcon } from "@heroicons/react/outline";
import { IPosition } from "../../types/PositionInterface";

export default function JobListing(positions: Array<IPosition>) {
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-200">
        {Object.values(positions).map((position) => (
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
                  <div className="sm:flex text-sm">
                    {/* <p className="flex items-center text-md text-gray-500">
                      <UsersIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.department}
                    </p> */}
                    <p className="flex items-center text-sm text-gray-500">
                      <LocationMarkerIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.location.city}
                      {position.location.telecommuting && "; Remote US"}
                      {/* SF Bay Area or NYC Preferred; Remote Available */}
                    </p>
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
  );
}
