import Link from "next/link";

export default function HeroSection() {
  return (
    <main className="z-20 pb-80">
      <div className="mx-auto max-w-7xl sm:pt-64 px-4 align-middle">
        <div className="text-left">
          <h1 className="text-4xl tracking-normal font-extrabold z-20 text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block sm:ml-10 sm:mr-10 ml-4 mr-4">
              <span className="inline xl:inline text-regal-purple-light">
                Integrate
              </span>{" "}
              <span className="inline xl:inline">
                your entire lab in hours, not months
              </span>

            </span>
          </h1>
          <p className="sm:ml-10 sm: mr-10 pt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Ganymede is the modern platform for software engineers in science. Quickly connect, program, and automate your lab in a low-code hosted PaaS.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 pt-8">
            <div className="rounded-md shadow">
              <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-regal-purple-dark hover:bg-regal-purple md:py-4 md:text-lg md:px-10">
                <Link href="#features-section ">Learn More</Link>
              </div>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#contact-section"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-regal-purple bg-gray-100 hover:bg-gray-200 md:py-4 md:text-lg md:px-10"
              >
                Request demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}