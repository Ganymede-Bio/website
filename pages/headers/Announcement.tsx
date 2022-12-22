import { XMarkIcon } from '@heroicons/react/24/outline'
import { announcements } from '../../utils/constants/menu'
import { useState } from 'react';

export default function Announcement() {
  const [showBanner, setShowBanner] = useState(false);

  return (
    <>
      {!showBanner &&
        (<div className="relative bg-regal-purple invisible md:visible">
          <div className="mx-auto max-w-7xl py-2 px-3 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="font-medium text-white">
                <span className="block sm:ml-2 sm:inline-block">
                  <a href={announcements.href} className="font-bold text-white hover:underline truncate">
                    {announcements.name}
                  </a>
                </span>
              </p>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-start pt-1 pr-1 sm:items-start sm:pt-1 sm:pr-2">
              <button
                type="button"
                className="flex rounded-md p-1 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" onClick={() => setShowBanner(!showBanner)} />
              </button>
            </div>
          </div>
        </div>)
      }
    </>
  )
}