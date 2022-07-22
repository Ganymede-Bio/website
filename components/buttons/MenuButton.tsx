import React from 'react'
import Link from "next/link";

interface ILink {
  name: string;
  href: string;
}

export default function MenuButton(item: ILink) {
  return (
    <>
      <div key={item.name} className="block px-6 py-2 rounded-md text-base font-medium leading-relaxed text-gray-700 hover:text-gray-900 hover:bg-gray-50">
        <Link href={item.href}>{item.name}</Link>
      </div>
    </>
  )
}