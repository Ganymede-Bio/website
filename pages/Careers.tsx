import {
  workableURL,
  careerSortOrder,
  corporatePrinciples,
  imageHostURL,
} from "../utils/constants/constants";
import Image from "next/image";

import { IPosition, IPositions } from "../types/PositionInterface";
import JobListing from "../components/lists/JobListing";
import Header from "./headers/Header";
import FooterSection from "./section/FooterSection";
import MoleculeStarsBackground from "../components/backgrounds/MoleculeStarsBackground";

export async function getServerSideProps() {
  const res = await fetch(workableURL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.WORKABLE}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  // sort data by department, and then by seniority within department
  const positions = data.jobs.sort(function (a: IPosition, b: IPosition) {
    a.department = a.department || "";
    b.department = b.department || "";

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
      <Header />
      <MoleculeStarsBackground>
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-8 lg:px-8">
          <div className="max-w-3xl mx-auto text-center pt-24">
            <div className="pb-6">
              <Image
                src={`${imageHostURL}/logo/favicon.png`}
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


        <div className="pt-4 py-8 border-b border-gray-200 sm:px-6">
          <h3 className="text-3xl leading-6 font-medium text-gray-900 text-center">
            Openings
          </h3>
        </div>
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="text-2xl text-left">
            <ul role="list" className="divide-y divide-gray-200 pb-2">
              {Object.entries(positions).map(([department, pos]) => (
                <li key={department} className="divide-y divide-gray-200">
                  <p className="py-10 ml-2">{department}</p>
                  <JobListing {...pos} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </MoleculeStarsBackground>
      <FooterSection />
    </>
  );
}
