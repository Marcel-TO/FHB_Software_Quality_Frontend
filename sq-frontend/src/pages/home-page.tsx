import { ArrowRightIcon } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <div className="bg-white h-screen w-screen grid place-content-center">
        <div className="relative">
          <div className="mx-auto max-w-2xl">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex flex-row items-center gap-x-1">
                Welcome to the only moving-company you will ever need.
                <a
                  href="/"
                  className="font-semibold text-[#360033] ml-2 gap-x-1"
                >
                  <div className="flex flex-row items-center">
                    <span className="" aria-hidden="true"></span>Read more
                    <ArrowRightIcon />
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col items-center gap-y-2">
                <strong>S T</strong>
                <span className="text-pretty text-2xl font-medium text-gray-500 sm:text-3xl">
                  Smooth Transitions
                </span>
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Save stress, time, and money with our moving services. We are
                here to help you move your belongings safely and securely.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/form"
                  className="rounded-md bg-linear-300 from-[#360033] to-[#0b8793] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700"
                >
                  Get moving
                </a>
                <a href="/" className="text-sm/6 font-semibold text-gray-900">
                  <div className="flex flex-row items-center">
                    <span className="" aria-hidden="true">
                      Learn more
                    </span>
                    <ArrowRightIcon />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
