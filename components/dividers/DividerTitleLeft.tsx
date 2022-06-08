interface IDivider {
  title: string;
}

export default function DividerTitleLeft({ title }: IDivider) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        {/* <div className="w-full border-t border-gray-100" /> */}
      </div>
      <div className="relative flex justify-center">
        <span className="mt-12 mb-2 text-4xl font-extrabold text-regal-purple">
          {title}
        </span>
      </div>
    </div>
  );
}
