import React from "react";

interface IButton {
  text: string;
}

export default function LoginButton({ text }: IButton) {
  // const [state, setState] = useState(false);

  return (
    <button
      className="inline-flex items-center px-4 py-1 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      type="button"
    >
      {text}
    </button>
  );
}
