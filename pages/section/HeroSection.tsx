import Link from "next/link";
import AnimateTranslate from "../../components/animations/AnimateTranslate";

export default function HeroSection() {

  return (
    <main className="z-20 pb-80">
      <div className="mx-auto max-w-7xl sm:pt-64 px-4 align-middle">
        <h1 className="text-4xl tracking-normal font-extrabold z-20 text-gray-900 sm:text-5xl md:text-6xl">
          <span className="text-center block sm:ml-10 sm:mr-10 ml-4 mr-4">
            <AnimateTranslate startX={-20} startY={-20}>
              <div className="text-regal-purple-light inline">
                Integrate {" "}
              </div> your entire lab in hours, not months.
            </AnimateTranslate>
          </span>
        </h1>
        <p className="sm:ml-10 sm: mr-10 pt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl text-left">
          Ganymede is the modern platform for software engineers in science. Quickly connect, program, and automate your lab in a low-code hosted PaaS.
        </p>
        <AnimateTranslate startX={-20} startY={20}>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 pt-4">
            <div className="rounded-md shadow">
              <div className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-regal-purple-dark hover:bg-regal-purple md:py-4 md:text-lg md:px-10">

                <Link href="Contact">Request demo</Link>

              </div>
            </div>
          </div>
        </AnimateTranslate>
      </div>
    </main >
  )
}