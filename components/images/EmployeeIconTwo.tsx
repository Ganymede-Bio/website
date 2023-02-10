import { people } from "../../utils/constants/constants";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function EmployeeIconTwo() {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  const person = people[0];
  const person2 = people[2];

  return (
    <div className="p-12">
      <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Link href={person.linkedinUrl} legacyBehavior>
          {isHovering ?
            <Image
              className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
              src={person.imageUrl}
              alt={person.name}
              width="200"
              height="200"
            /> :
            <Image
              className="inset-0 z-0 mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56"
              src={person2.imageUrl}
              alt={person2.name}
              width="200"
              height="200"
            />}
        </Link>

      </div>

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
  );
}
