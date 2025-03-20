import { ArrowRightIcon } from "lucide-react";

export default function FormSuccessPage() {
    return (
        <>
            <div className="bg-white h-screen w-screen grid place-content-center">
                <div className="relative">
                    <div className="mx-auto max-w-2xl">
                        <div className="text-center">
                            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl flex flex-col items-center gap-y-2">
                                <span className="text-pretty text-2xl font-medium text-gray-500 sm:text-3xl">
                                    Form submitted successfully
                                </span>
                            </h1>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a href="/" className="text-sm/6 font-semibold text-gray-900">
                                    <div className="flex flex-row items-center">
                                        <span className="" aria-hidden="true">
                                            Go back to Home Screen
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
