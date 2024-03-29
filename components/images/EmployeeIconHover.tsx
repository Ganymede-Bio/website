import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IEmployee } from "../../types/EmployeeInterface";

export default function EmployeeIcon(person: IEmployee) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex">
      <div className="mx-auto space-y-2 overflow-visible text-center">
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link href={person.linkedinUrl} legacyBehavior>
            <Image
              className="transition ease-in-out duration-100 m-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 
              hover:shadow-md hover:shadow-yellow-200"
              src={person.imageUrl}
              alt={person.name}
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

        {isHovering && <div className="mx-auto mt-3">

          <p className="text-black text-sm">
            {person.blurb}
          </p>
          {/* <ul className="list-disc pl-6 mt-3">
            <li key="nucleateAC">
              Led the successful launch of the NYC branch of Nucleate, an international organization that facilitates the formation of pioneering life sciences companies
            </li>
            <li key="phdInfoAC">
              Received PhD training in intersection of biomedical engineering and cancer under Dr. Gordana Vunjak-Novakovic at Columbia University
            </li>
            <li key="epigeneticsFounderAC">
              Co-founded the Center for Epigenetics Research at Memorial Sloan Kettering Cancer Center
            </li>
          </ul> */}

        </div>}
      </div>
    </div>
  );
}
