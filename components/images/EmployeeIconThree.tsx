// import { people } from "../../utils/constants/constants";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IEmployee } from "../../types/EmployeeInterface";

export default function EmployeeIcon(person: IEmployee) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className="flex h-screen mt-6">
      <div className="mx-auto">
        <div style={{
          display: "flex",
          justifyContent: "center"
        }}
          onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <Link href={person.linkedinUrl} legacyBehavior>
            <Image
              className="transition ease-in-out duration-100 m-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 
              hover:ring hover:ring-yellow-200"
              src={person.imageUrl}
              alt=""
              width="200"
              height="200"
            />
          </Link>
        </div>

        <div className="text-xl leading-6 font-medium text-center">
          <h3>{person.name}</h3>
          <p className="text-nathan-orange text-lg">
            {person.role}
          </p>
        </div>
        <div>
          <p className="text-regal-purple-light text-center">
            {person.focus}
          </p>
        </div>

        {isHovering && <div className="w-1/2 mx-auto mt-3">

          <p className="text-black">
            A scientist by training, I have more than a decade of biomedical research experience leading successful collaborations, innovations,
            and publications with researchers across 10+ world-class research institutions and medical centers.
            Passionate about innovating biomedical research. Excited to shape its future.
          </p>
          <ul className="list-disc pl-6 mt-3">
            <li key="nucleateAC">
              Led the successful launch of the NYC branch of Nucleate, an international organization that facilitates the formation of pioneering life sciences companies
            </li>
            <li key="phdInfoAC">
              Received PhD training in intersection of biomedical engineering and cancer under Dr. Gordana Vunjak-Novakovic at Columbia University
            </li>
            <li key="epigeneticsFounderAC">
              Co-founded the Center for Epigenetics Research at Memorial Sloan Kettering Cancer Center
            </li>
          </ul>

        </div>}
      </div>
    </div>
  );
}
