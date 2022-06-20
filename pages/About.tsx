import EmployeeIcon from "../components/images/EmployeeIcon";
import { people } from "../utils/constants/constants";
import Image from "next/image";
// import Navigation from "../layout/navs/Navigation";
import Header from "./headers/Header";
// import Link from "next/link";

export default function About() {
  return (
    <>
      <Header />
      <div id="about-section">
        <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8 mt-6">
          <div className="relative z-0">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                Meet our team
              </h2>
              <p className="text-xl text-gray-500 pb-8">
                A team that dreams to improve data and communication in the
                sciences.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3"
            >
              {people.map((person) =>
                <li key={person.name}>
                  <EmployeeIcon {...person} />
                </li>
              )}
              {/* {people.map((person) => {
                return (
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
                      </div>
                    </div>
                  </li>
                );
              })} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
