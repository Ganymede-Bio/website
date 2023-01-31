import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { IEmployee } from "../../types/EmployeeInterface";
import { imageHostURL } from "../../utils/constants/constants";

export default function EmployeeIcon(person: IEmployee) {

  return (
    <div className="flex">
      <div className="mx-auto space-y-2 overflow-visible text-center">
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}>
          <Link href={person.linkedinUrl}>

            <Image
              className="transition ease-in-out duration-100 m-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 
                         hover:shadow-sm hover:shadow-gray-200"
              src={imageHostURL + person.imageUrl}
              alt=""
              width="200"
              height="200"
            />

          </Link>
        </div>

        <div className="text-xl leading-6 font-medium">
          <h3>{person.name}</h3>
          <p className="text-nathan-orange text-lg">
            {person.role}
          </p>
          <p className="font-light text-regal-purple-light text-sm">
            {person.focus}
          </p>
        </div>

        <div className="mx-auto mt-3">
          <div className="text-black text-sm">
            {person.blurb}
          </div>
        </div>
      </div>
    </div>
  );
}
