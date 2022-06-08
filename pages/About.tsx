import { people } from "../utils/constants/constants";
import Image from "next/image";
import Navigation from "../layout/navs/Navigation";
import Header from "./headers/Header";
// import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <div id="about-section">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 relative z-0">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-gray-500">
                A team that dreams to improve data and communication in the
                sciences.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl"
            >
              {people.map((person) => {
                const jsx = (
                  <li key={person.name} className="z-10">
                    <div className="space-y-6">
                      <Image
                        className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
                        src={person.imageUrl}
                        alt=""
                        width="200"
                        height="200"
                      />
                      <div>
                        <div className="text-xl leading-6 font-medium">
                          <h3>{person.name}</h3>
                          <p className="text-nathan-orange text-lg">
                            {person.role}
                          </p>
                        </div>
                        <div>
                          <p className="text-regal-purple-light">
                            {person.focus}
                          </p>
                        </div>
                        {/* <ul
                          role="list"
                          className="justify-center pt-3 text-gray-400"
                        >
                          {person.blurb.map((b, idx) => (
                            <li key={b + idx.toString()}>{b}</li>
                          ))}
                        </ul> */}
                        {/* <ul role="list" className="flex justify-center space-x-5">
                        <li className="text-gray-400 hover:text-gray-500">
                          <a href={person.githubUrl}>
                            <span className="sr-only">Twitter</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                        </li>
                        <li className="text-gray-400 hover:text-gray-500">
                          <a href={person.linkedinUrl}>
                            <span className="sr-only">LinkedIn</span>
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                        </li>
                      </ul> */}
                      </div>
                    </div>
                  </li>
                );

                return jsx;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
