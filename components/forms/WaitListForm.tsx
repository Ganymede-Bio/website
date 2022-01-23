import { useForm, SubmitHandler } from "react-hook-form";

interface IWaitListForm {
  email: String;
}

export default function WaitListForm() {
  const { register, handleSubmit } = useForm<IWaitListForm>();

  const onSubmit: SubmitHandler<IWaitListForm> = async function (item) {
    const res = await fetch("../api/addToWaitlist", {
      method: "POST",
      body: JSON.stringify(item),
    });

    // const data = await res.json();
    // console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:max-w-xl sm:mx-auto lg:mx-0 "
    >
      <div className="sm:flex">
        <div className="min-w-0 flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
            {...register("email")}
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            className="block w-full py-3 px-8 rounded-md shadow bg-indigo-500 text-white font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
          >
            Request Info
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-gray-300 sm:mt-4">
        Join the waitlist. Learn more about how Ganymede can work for you!
        {/* By providing your email, you agree to
      our{" "}
      <a href="#" className="font-medium text-white">
        terms of service
      </a>
      . */}
      </p>
    </form>
  );
}
