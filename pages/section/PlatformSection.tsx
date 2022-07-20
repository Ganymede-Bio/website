export default function PlatformSection() {
  return (
    <section
      id="platform-section"
      className="relative overflow-hidden pt-8 sm:pt-12 lg:pt-16"
    >
      <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
        <div>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-normal sm:text-4xl">
            Built as a turnkey solution
          </p>
          <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            Connect to Ganymede over its APIs/SDK; or, connect Ganymede directly
            to your database. We provide a powerful React-like library for
            engineers, synced with a web app for end users.
          </p>
        </div>
        <div className="mt-12 pb-10">
          <img
            className="object-center static mx-auto lg:max-w-5xl"
            src="/app/new_platform_light.png"
            alt=""
          />
        </div>

        <svg
          className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
          width={784}
          height={404}
          fill="none"
          viewBox="0 0 784 404"
        >
          <defs>
            <pattern
              id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={784}
            height={404}
            fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
          />
        </svg>

      </div>
    </section>
  );
}
