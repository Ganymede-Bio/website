import React from 'react'

interface IDivider {
  title: string;
}

export default function DividerTitleLeft({ title }: IDivider) {
  return (
    <div className="relative" aria-hidden="true">
      {/* <hr /> */}
      <div className="relative flex justify-center">
        <span className="mb-2 text-5xl font-extrabold">
          {title}
        </span>
      </div>
    </div>
  );
}
