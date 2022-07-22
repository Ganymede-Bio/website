import React from 'react'
import Link from "next/link";

export default function HeroText() {

  return (
    <main className="z-20 pb-40">
      <div className="mx-auto max-w-7xl px-4 align-middle">
        <h1 className="text-4xl tracking-normal font-extrabold z-20 text-gray-900 xs:text-xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span className="text-center block sm:ml-10 sm:mr-10 ml-4 mr-4">
            <div className="text-regal-purple-light inline">
              Integrate {" "}
            </div> your entire lab in hours, not months.
          </span>
        </h1>
        <p className="sm:pt-3 max-w-md mx-auto text-base text-gray-500 xs:text-md sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-center">
          Ganymede is the only whole-lab automation and data integration platform. Connect any lab instrument with any app or pipeline, all in one simple low-code platform.
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 pt-4">
          <div className="rounded-md shadow">
            <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-regal-purple-light hover:bg-regal-purple md:py-4 md:text-lg md:px-10">

              <Link href="Contact">Request demo</Link>

            </div>
          </div>
        </div>
      </div>
    </main >
  )
}