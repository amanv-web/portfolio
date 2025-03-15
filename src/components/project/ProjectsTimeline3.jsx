import React from "react";

function projectTimeline3() {
    return (
        <div>
      <section className="">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
                                <h3 className="text-2xl font-semibold">Currency Convert</h3>

                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2nZFKBtMqEPK6jGteuXQYONRAyCtW2FCH1A&s"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                                    <h3 className="text-xl font-semibold tracking-wide">
                                        Key Features
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        <li> Live Exchange Rates – Get real-time currency conversion rates.</li>
                                        <li> Multi-Currency Support – Convert between major global currencies.</li>
                                        <li> User-Friendly UI – Simple and easy-to-use interface for quick calculations.</li>
                                        <li> Responsive Design – Works seamlessly on desktops, tablets, and mobile devices.</li>
                                        <li> Instant Calculations – Get conversion results instantly as you type.</li>
                                    </ul>
                                    
                                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600 mt-6">
                                    <h3 className="text-xl font-semibold tracking-wide ">
                                            Tech Stack:
                                        </h3>
                                        <ul className="list-disc pl-5">
                                            <li>Frontend: React, JavaScript, HTML, CSS</li>
                                            <li>API Integration: Exchange rate API for real-time currency data</li>
                                            <li>Styling: Tailwind CSS for a sleek and modern UI</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default projectTimeline3;
