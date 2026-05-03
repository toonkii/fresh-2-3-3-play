import { define } from "../utils.ts";

export default define.page(function LandPage(_) {
  return (
    <>
      <main>
        {/* <!-- navbar --> */}
        {/* <nav
          class="bg-white flex py-2 px-4 md:px-8 border-b border-slate-200 min-h-[68px] sticky top-0 z-20"
          aria-label="Main navigation"
        >
          <div class="max-w-7xl mx-auto flex flex-wrap items-center gap-6 w-full">
            <a
              href="#"
              class="min-w-9 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
            >
              <span class="sr-only">Your Company</span>
              <img
                src="https://readymadeui.com/logo-alt.svg"
                alt="readymadeui logo"
                class="h-9 w-auto"
              />
            </a>

            <div
              id="collapseMenu"
              tabindex="-1"
              class="hidden lg:block max-lg:bg-white max-lg:border-l max-lg:border-slate-300 max-lg:w-1/2 max-lg:fixed max-lg:top-0 max-lg:right-0 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto max-sm:w-full z-50 outline-none"
            >
              <div class="py-2 px-4 flex justify-between items-center border-b border-slate-300 sticky top-0 bg-white lg:hidden max-lg:min-h-[68px]">
                <a
                  href="#"
                  class="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <span class="sr-only">Your Company</span>
                  <img
                    src="https://readymadeui.com/logo-alt.svg"
                    alt="readymadeui logo dialog"
                    class="h-9 w-auto"
                  />
                </a>
                <button
                  type="button"
                  aria-controls="collapseMenu"
                  id="toggleClose"
                  class="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  <span class="sr-only">Close main menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="size-4 fill-slate-900"
                    aria-hidden="true"
                    viewBox="0 0 329.269 329"
                  >
                    <path
                      d="M194.8 164.77 323.013 36.555c8.343-8.34 8.343-21.825 0-30.164-8.34-8.34-21.825-8.34-30.164 0L164.633 134.605 36.422 6.391c-8.344-8.34-21.824-8.34-30.164 0-8.344 8.34-8.344 21.824 0 30.164l128.21 128.215L6.259 292.984c-8.344 8.34-8.344 21.825 0 30.164a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25l128.21-128.214 128.216 128.214a21.27 21.27 0 0 0 15.082 6.25c5.46 0 10.922-2.09 15.082-6.25 8.343-8.34 8.343-21.824 0-30.164zm0 0"
                      data-original="#000000"
                    />
                  </svg>
                </button>
              </div>

              <ul class="flex flex-col gap-8 font-semibold text-sm text-slate-900 lg:flex-row max-lg:p-6 lg:ml-12">
                <li>
                  <a
                    href="#features"
                    class="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    aria-current="page"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    class="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    class="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    class="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    class="hover:text-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            <div class="flex items-center gap-4 ml-auto">
              <a
                href="#"
                class="py-2 px-3.5 text-sm rounded-md font-semibold cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Get started
              </a>

              <button
                type="button"
                aria-controls="collapseMenu"
                aria-expanded="false"
                aria-haspopup="true"
                id="toggleOpen"
                class="cursor-pointer lg:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="size-7 fill-slate-900"
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  >
                  </path>
                </svg>
              </button>
            </div>
          </div>
        </nav> */}

        {/* <!-- hero section --> */}
        <section class="px-4 mt-12 md:mt-16 md:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    Schedule meetings effortlessly
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    Eliminate back-and-forth emails with our intelligent
                    scheduling platform. Share your availability, let clients
                    book instantly, and connect with automatic calendar
                    integration. Streamline your workflow and focus on what
                    matters most - your meetings, not managing them.
                  </p>

                  <div class="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                    <a
                      href="#"
                      class="py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Get Started Free
                    </a>
                    <a
                      href="#"
                      class="py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      Integrations
                    </a>
                  </div>
                </div>

                <div class="flex items-center flex-wrap max-lg:justify-center gap-4 mt-8">
                  <div class="flex -space-x-2">
                    <img
                      class="w-10 h-10 rounded-full border-2 border-white"
                      src="https://readymadeui.com/team-1.webp"
                      alt="team img-1"
                    />
                    <img
                      class="w-10 h-10 rounded-full border-2 border-white"
                      src="https://readymadeui.com/team-2.webp"
                      alt="team img-2"
                    />
                    <img
                      class="w-10 h-10 rounded-full border-2 border-white"
                      src="https://readymadeui.com/team-3.webp"
                      alt="team img-3"
                    />
                  </div>
                  <div class="text-slate-600 text-base">
                    <span class="font-semibold">Over 10,000</span>{" "}
                    Professionals trust us
                  </div>
                </div>
              </div>

              <div class="w-full aspect-[42/33]">
                <img
                  src="https://readymadeui.com/images/meeting-img.webp"
                  alt="meeting image"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <div>
          {/* <!-- Features Section --> */}
          <section id="features" class="mt-16 px-4 md:px-8 md:mt-28">
            <div class="max-w-7xl mx-auto">
              <div class="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
                <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                  Everything you need to schedule with confidence
                </h2>
                <p class="text-base text-slate-600 leading-relaxed">
                  Our comprehensive platform offers all the tools you need to
                  streamline your scheduling process and boost productivity.
                </p>
              </div>

              <div class="grid gap-8 mt-16 sm:grid-cols-2 lg:grid-cols-3">
                <div class="bg-gray-50 text-center border border-slate-200 rounded-lg px-6 py-14">
                  <div
                    class="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-full"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-blue-600 fill-current"
                      viewBox="0 0 682.667 682.667"
                    >
                      <defs>
                        <clipPath id="a" clipPathUnits="userSpaceOnUse">
                          <path d="M0 512h512V0H0Z" data-original="#000000" />
                        </clipPath>
                      </defs>
                      <g
                        clip-path="url(#a)"
                        transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="40"
                          d="M236.333 118h39.333m78.895 0h39.333m-275.561 0h39.333m78.667 118h39.333m78.895 0h39.333m-275.561 0h39.333M20 334.667h472.227M98.894 20h314.439c43.572 0 78.894 35.322 78.894 78.895v274.877c0 43.572-35.322 78.895-78.894 78.895H98.894C55.322 452.667 20 417.344 20 373.772V98.895C20 55.322 55.322 20 98.894 20zm275.333 373.667V492M138 393.667V492"
                          data-original="#000000"
                        />
                      </g>
                    </svg>
                  </div>

                  <div>
                    <h3 class="text-slate-900 text-lg font-semibold mb-3">
                      Calendar Integration
                    </h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                      Seamlessly sync with Google, Outlook, Apple, and other
                      calendar platforms to prevent double-booking.
                    </p>
                    <a
                      href="#"
                      class="text-blue-700 font-medium inline-flex items-center text-sm mt-6 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 ml-2 overflow-visible fill-blue-700"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                          data-original="#000000"
                        >
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="bg-gray-50 text-center border border-slate-200 rounded-lg px-6 py-14">
                  <div
                    class="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-full"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-blue-600"
                      viewBox="0 0 64 64"
                    >
                      <path
                        d="M32 63.5A31.5 31.5 0 1 1 63.5 32a2.1 2.1 0 0 1-4.2 0A27.3 27.3 0 1 0 32 59.3a2.1 2.1 0 0 1 0 4.2z"
                        data-original="#000000"
                      />
                      <path
                        d="M56.15 19.4H7.85a2.1 2.1 0 0 1 0-4.2h48.3a2.1 2.1 0 0 1 0 4.2zM32 34.1H2.6a2.1 2.1 0 0 1 0-4.2H32a2.1 2.1 0 0 1 0 4.2zm-6.3 14.7H7.85a2.1 2.1 0 0 1 0-4.2H25.7a2.1 2.1 0 0 1 0 4.2z"
                        data-original="#000000"
                      />
                      <path
                        d="M32 63.5c-8.832 0-15.75-13.837-15.75-31.5S23.168.5 32 .5c7.59 0 13.935 10.275 15.426 24.99a2.1 2.1 0 0 1-4.18.42C42.022 13.82 37.186 4.7 32 4.7c-5.46 0-11.55 11.212-11.55 27.3S26.54 59.3 32 59.3a2.1 2.1 0 0 1 0 4.2z"
                        data-original="#000000"
                      />
                      <path
                        d="M46.7 63.5a16.8 16.8 0 1 1 16.8-16.8 16.82 16.82 0 0 1-16.8 16.8zm0-29.4a12.6 12.6 0 1 0 12.6 12.6 12.614 12.614 0 0 0-12.6-12.6z"
                        data-original="#000000"
                      />
                      <path
                        d="M43.55 51.95a2.1 2.1 0 0 1-1.485-3.585l2.535-2.534V38.3a2.1 2.1 0 0 1 4.2 0v8.4a2.1 2.1 0 0 1-.615 1.485l-3.15 3.15a2.092 2.092 0 0 1-1.485.615z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 class="text-slate-900 text-lg font-semibold mb-3">
                      Time Zone Intelligence
                    </h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                      Automatically detect and adjust to client time zones to
                      avoid scheduling confusion.
                    </p>
                    <a
                      href="#"
                      class="text-blue-700 font-medium inline-flex items-center text-sm mt-6 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 ml-2 overflow-visible fill-blue-700"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                          data-original="#000000"
                        >
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="bg-gray-50 text-center border border-slate-200 rounded-lg px-6 py-14">
                  <div
                    class="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-full"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-blue-600"
                      fill-rule="evenodd"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21.99 7.68v8.64a1.352 1.352 0 0 1-1.35 1.35H3.36a1.352 1.352 0 0 1-1.35-1.35V4.44a1.352 1.352 0 0 1 1.35-1.35h8.1a.81.81 0 0 0 0-1.62h-8.1c-.787 0-1.543.313-2.1.87a2.975 2.975 0 0 0-.87 2.1v11.88c0 .787.313 1.543.87 2.1a2.975 2.975 0 0 0 2.1.87h17.28c.787 0 1.543-.313 2.1-.87a2.975 2.975 0 0 0 .87-2.1V7.68a.81.81 0 0 0-1.62 0z"
                        data-original="#000000"
                      />
                      <path
                        d="M20.91 4.44V2.28c0-.501-.199-.982-.554-1.336A1.886 1.886 0 0 0 19.02.39H14.7c-.501 0-.982.199-1.336.554a1.886 1.886 0 0 0-.554 1.336v2.16c0 .501.199.982.554 1.336.354.355.835.554 1.336.554h4.32c.501 0 .982-.199 1.336-.554.355-.354.554-.835.554-1.336zm-1.62 0a.27.27 0 0 1-.27.27H14.7a.27.27 0 0 1-.27-.27V2.28a.27.27 0 0 1 .27-.27h4.32a.27.27 0 0 1 .27.27z"
                        data-original="#000000"
                      />
                      <path
                        d="M23.61 4.722V1.998A1.352 1.352 0 0 0 21.759.744l-1.96.784a.81.81 0 0 0-.509.752v2.16a.81.81 0 0 0 .509.752l1.96.784a1.352 1.352 0 0 0 1.851-1.254zm-1.62-2.325v1.926l-1.08-.432V2.83zm-6.342 15.827a.81.81 0 0 0-.768-.554H9.12a.81.81 0 0 0-.768.554l-1.441 4.32a.812.812 0 0 0 .769 1.066h8.64a.81.81 0 0 0 .769-1.066zm-1.352 1.066.9 2.7H8.804l.9-2.7z"
                        data-original="#000000"
                      />
                      <path
                        d="M6.06 23.61h11.88a.81.81 0 0 0 0-1.62H6.06a.81.81 0 0 0 0 1.62zm9.45-9.475c0-.714-.404-1.41-1.188-1.945-.89-.607-2.322-1.025-3.942-1.025s-3.052.418-3.942 1.025c-.784.535-1.188 1.231-1.188 1.945v.659a1.239 1.239 0 0 0 1.242 1.242h7.776a1.24 1.24 0 0 0 1.242-1.242zm-1.62.281H6.87v-.28c0-.243.214-.426.48-.608.682-.464 1.79-.743 3.03-.743s2.348.279 3.03.743c.266.182.48.365.48.607z"
                        data-original="#000000"
                      />
                      <path
                        d="M10.38 5.997a2.971 2.971 0 1 0 2.97 2.97 2.972 2.972 0 0 0-2.97-2.97zm0 1.62a1.351 1.351 0 0 1 0 2.7 1.35 1.35 0 0 1 0-2.7z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 class="text-slate-900 text-lg font-semibold mb-3">
                      Video Meeting Links
                    </h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                      Auto-generate Zoom, Teams, or Google Meet links for each
                      scheduled meeting.
                    </p>
                    <a
                      href="#"
                      class="text-blue-700 font-medium inline-flex items-center text-sm mt-6 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 ml-2 overflow-visible fill-blue-700"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                          data-original="#000000"
                        >
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="bg-gray-50 text-center border border-slate-200 rounded-lg px-6 py-14">
                  <div
                    class="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-full"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-blue-600"
                      viewBox="0 0 371.263 371.263"
                    >
                      <path
                        d="M305.402 234.794v-70.54c0-52.396-33.533-98.085-79.702-115.151.539-2.695.838-5.449.838-8.204C226.539 18.324 208.215 0 185.64 0s-40.899 18.324-40.899 40.899c0 2.695.299 5.389.778 7.964-15.868 5.629-30.539 14.551-43.054 26.647-23.593 22.755-36.587 53.354-36.587 86.169v73.115c0 2.575-2.096 4.731-4.731 4.731-22.096 0-40.959 16.647-42.995 37.845-1.138 11.797 2.755 23.533 10.719 32.276 7.904 8.683 19.222 13.713 31.018 13.713h72.217c2.994 26.887 25.869 47.905 53.534 47.905s50.54-21.018 53.534-47.905h72.217c11.797 0 23.114-5.03 31.018-13.713 7.904-8.743 11.797-20.479 10.719-32.276-2.036-21.198-20.958-37.845-42.995-37.845a4.704 4.704 0 0 1-4.731-4.731zM185.64 23.952c9.341 0 16.946 7.605 16.946 16.946 0 .778-.12 1.497-.24 2.275-4.072-.599-8.204-1.018-12.336-1.138-7.126-.24-14.132.24-21.078 1.198-.12-.778-.24-1.497-.24-2.275.002-9.401 7.607-17.006 16.948-17.006zm0 323.358c-14.431 0-26.527-10.3-29.342-23.952h58.683c-2.813 13.653-14.909 23.952-29.341 23.952zm143.655-67.665c.479 5.15-1.138 10.12-4.551 13.892-3.533 3.773-8.204 5.868-13.353 5.868H59.89c-5.15 0-9.82-2.096-13.294-5.868-3.473-3.772-5.09-8.743-4.611-13.892.838-9.042 9.282-16.168 19.162-16.168 15.809 0 28.683-12.874 28.683-28.683v-73.115c0-26.228 10.419-50.719 29.282-68.923 18.024-17.425 41.498-26.887 66.528-26.887 1.198 0 2.335 0 3.533.06 50.839 1.796 92.277 45.929 92.277 98.325v70.54c0 15.809 12.874 28.683 28.683 28.683 9.88 0 18.264 7.126 19.162 16.168z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 class="text-slate-900 text-lg font-semibold mb-3">
                      Smart Reminders
                    </h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                      Automated email and SMS reminders to reduce no-shows by up
                      to 80%.
                    </p>
                    <a
                      href="#"
                      class="text-blue-700 font-medium inline-flex items-center text-sm mt-6 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 ml-2 overflow-visible fill-blue-700"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                          data-original="#000000"
                        >
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="bg-gray-50 text-center border border-slate-200 rounded-lg px-6 py-14">
                  <div
                    class="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-full"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-blue-600"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M437 268.152h-50.118c-6.821 0-13.425.932-19.71 2.646-12.398-24.372-37.71-41.118-66.877-41.118h-88.59c-29.167 0-54.479 16.746-66.877 41.118a74.798 74.798 0 0 0-19.71-2.646H75c-41.355 0-75 33.645-75 75v80.118c0 24.813 20.187 45 45 45h422c24.813 0 45-20.187 45-45v-80.118c0-41.355-33.645-75-75-75zm-300.295 36.53v133.589H45c-8.271 0-15-6.729-15-15v-80.118c0-24.813 20.187-45 45-45h50.118c4.072 0 8.015.553 11.769 1.572a75.372 75.372 0 0 0-.182 4.957zm208.59 133.589h-178.59v-133.59c0-24.813 20.187-45 45-45h88.59c24.813 0 45 20.187 45 45v133.59zm136.705-15c0 8.271-6.729 15-15 15h-91.705v-133.59a75.32 75.32 0 0 0-.182-4.957 44.899 44.899 0 0 1 11.769-1.572H437c24.813 0 45 20.187 45 45v80.119z"
                        data-original="#000000"
                      />
                      <path
                        d="M100.06 126.504c-36.749 0-66.646 29.897-66.646 66.646-.001 36.749 29.897 66.646 66.646 66.646 36.748 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm-.001 103.292c-20.207 0-36.646-16.439-36.646-36.646s16.439-36.646 36.646-36.646 36.646 16.439 36.646 36.646-16.439 36.646-36.646 36.646zM256 43.729c-49.096 0-89.038 39.942-89.038 89.038s39.942 89.038 89.038 89.038 89.038-39.942 89.038-89.038c0-49.095-39.942-89.038-89.038-89.038zm0 148.076c-32.554 0-59.038-26.484-59.038-59.038 0-32.553 26.484-59.038 59.038-59.038s59.038 26.484 59.038 59.038c0 32.554-26.484 59.038-59.038 59.038zm155.94-65.301c-36.748 0-66.646 29.897-66.646 66.646.001 36.749 29.898 66.646 66.646 66.646 36.749 0 66.646-29.897 66.646-66.646s-29.897-66.646-66.646-66.646zm0 103.292c-20.206 0-36.646-16.439-36.646-36.646.001-20.207 16.44-36.646 36.646-36.646 20.207 0 36.646 16.439 36.646 36.646s-16.439 36.646-36.646 36.646z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 class="text-slate-900 text-lg font-semibold mb-3">
                      Group Scheduling
                    </h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                      Find the perfect time for multiple participants with our
                      intelligent scheduling algorithm.
                    </p>
                    <a
                      href="#"
                      class="text-blue-700 font-medium inline-flex items-center text-sm mt-6 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 ml-2 overflow-visible fill-blue-700"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                          data-original="#000000"
                        >
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>

                <div class="bg-gray-50 text-center border border-slate-200 rounded-lg px-6 py-14">
                  <div
                    class="w-14 h-14 bg-blue-100 flex items-center justify-center mb-6 mx-auto rounded-full"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 fill-blue-600"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M30 256C30 131.383 131.383 30 256 30c46.867 0 91.563 14.211 129.196 40.587h-29.074c-8.284 0-15 6.716-15 15s6.716 15 15 15h70.292c8.284 0 15-6.716 15-15V15.295c0-8.284-6.716-15-15-15s-15 6.716-15 15v37.339C366.987 18.499 312.91 0 256 0 187.62 0 123.333 26.629 74.98 74.98 26.629 123.333 0 187.62 0 256c0 44.921 11.871 89.182 34.33 127.998 2.78 4.806 7.818 7.49 12.997 7.49 2.55 0 5.134-.651 7.499-2.019 7.17-4.149 9.619-13.325 5.471-20.496C40.477 334.718 30 295.652 30 256zm447.67-127.998c-4.15-7.171-13.328-9.619-20.496-5.47-7.17 4.149-9.619 13.325-5.471 20.496C471.523 177.281 482 216.346 482 256c0 124.617-101.383 226-226 226-46.863 0-91.551-14.215-129.18-40.587h29.058c8.284 0 15-6.716 15-15s-6.716-15-15-15H85.587c-8.284 0-15 6.716-15 15v70.292c0 8.284 6.716 15 15 15s15-6.716 15-15v-37.376C145.013 493.475 199.083 512 256 512c68.38 0 132.667-26.629 181.02-74.98C485.371 388.667 512 324.38 512 256c0-44.923-11.871-89.184-34.33-127.998z"
                        data-original="#000000"
                      />
                      <path
                        d="M384.413 217.203a14.994 14.994 0 0 0-1.499-11.382l-20-34.641c-4.142-7.174-13.315-9.632-20.49-5.49l-13.602 7.853a108.886 108.886 0 0 0-37.821-21.856V136c0-8.284-6.716-15-15-15h-40c-8.284 0-15 6.716-15 15v15.686a108.89 108.89 0 0 0-37.822 21.856l-13.601-7.853c-7.174-4.144-16.349-1.685-20.49 5.49l-20 34.641c-4.142 7.174-1.684 16.348 5.49 20.49l13.598 7.851c-1.446 7.163-2.176 14.47-2.176 21.838s.729 14.676 2.176 21.838l-13.598 7.851c-7.174 4.142-9.632 13.316-5.49 20.49l20 34.641c4.142 7.175 13.315 9.633 20.49 5.49l13.601-7.853a108.865 108.865 0 0 0 37.822 21.856V376c0 8.284 6.716 15 15 15h40c8.284 0 15-6.716 15-15v-15.686a108.886 108.886 0 0 0 37.821-21.856l13.602 7.853c7.174 4.142 16.348 1.683 20.49-5.49l20-34.641a15.003 15.003 0 0 0 1.499-11.382 14.994 14.994 0 0 0-6.989-9.108l-13.599-7.852C365.271 270.676 366 263.369 366 256s-.729-14.676-2.175-21.838l13.599-7.852a14.995 14.995 0 0 0 6.989-9.107zM256 296c-22.091 0-40-17.909-40-40s17.909-40 40-40 40 17.909 40 40-17.909 40-40 40z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>

                  <div>
                    <h3 class="text-slate-900 text-lg font-semibold mb-3">
                      Custom Integrations
                    </h3>
                    <p class="text-slate-600 text-base leading-relaxed">
                      Connect with your favorite tools via Zapier, our API, or
                      native integrations.
                    </p>
                    <a
                      href="#"
                      class="text-blue-700 font-medium inline-flex items-center text-sm mt-6 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                    >
                      Learn more{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-3.5 ml-2 overflow-visible fill-blue-700"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          d="m23.564 11.235-7.56-7.56a1.08 1.08 0 0 0-1.528 1.528l5.717 5.716H1.2a1.08 1.08 0 0 0 0 2.16h18.993l-5.717 5.716a1.08 1.08 0 1 0 1.528 1.528l7.56-7.56a1.08 1.08 0 0 0 0-1.528z"
                          data-original="#000000"
                        >
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- How It Works Section --> */}
          <section id="how-it-works" class="mt-16 px-4 md:px-8 md:mt-28">
            <div class="max-w-7xl mx-auto">
              <div class="text-center max-w-3xl mx-auto">
                <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                  How it works
                </h2>

                <p class="text-slate-600 text-base leading-relaxed">
                  Set your schedule, share your link, and let meetings happen
                  automatically without back-and-forth.
                </p>
              </div>

              {/* <!-- Steps --> */}
              <div class="relative mt-16">
                {/* <!-- Connector line --> */}
                <div class="hidden lg:block absolute top-16 left-0 right-0 h-px bg-slate-200">
                </div>

                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                  {/* <!-- Step 1 --> */}
                  <div class="relative bg-white border border-slate-200 rounded-lg px-6 py-8 text-center transition-all duration-300 hover:shadow-sm">
                    <div class="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-semibold">
                      1
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-3">
                      Create Your Schedule
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                      Define your availability, meeting types, and durations.
                      Sync calendars to avoid double bookings.
                    </p>
                  </div>

                  {/* <!-- Step 2 --> */}
                  <div class="relative bg-white border border-slate-200 rounded-lg px-6 py-8 text-center transition-all duration-300 hover:shadow-sm">
                    <div class="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-semibold">
                      2
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-3">
                      Share Your Link
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                      Send your booking link via email, embed it on your
                      website, or add it to your social profiles.
                    </p>
                  </div>

                  {/* <!-- Step 3 --> */}
                  <div class="relative bg-white border border-slate-200 rounded-lg px-6 py-8 text-center transition-all duration-300 hover:shadow-sm">
                    <div class="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-semibold">
                      3
                    </div>
                    <h3 class="text-lg font-semibold text-slate-900 mb-3">
                      Meet with Confidence
                    </h3>
                    <p class="text-slate-600 leading-relaxed">
                      Clients book available slots, receive confirmations, and
                      both sides get reminders before meetings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Integrations Section --> */}
          <section id="integrations" class="mt-16 px-4 md:px-8 md:mt-28">
            <div class="max-w-7xl mx-auto">
              <div class="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                  Integrate with Your Favorite Tools
                </h2>
                <p class="text-slate-600 text-base leading-relaxed">
                  Connect with the apps you already use daily. We bridge the gap
                  between your scheduling and your workflow for a seamless
                  experience.
                </p>

                <div class="mt-6 flex flex-wrap justify-center gap-4">
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100">
                    <span class="w-2 h-2 rounded-full bg-blue-600 mr-2"></span>
                    {" "}
                    30+ Integrations
                  </span>
                  <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-100">
                    <span class="w-2 h-2 rounded-full bg-green-600 mr-2"></span>
                    {" "}
                    One-click Setup
                  </span>
                </div>
              </div>

              {/* <!-- Integrations Grid --> */}
              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-6">
                {/* <!-- Integration Card Template (Repeated for each tool) --> */}
                <div class="group bg-white border border-slate-200 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-blue-700">
                  <div
                    class="w-12 h-12 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    {/* <!-- Google Calendar SVG --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-full h-full"
                    >
                      <path
                        fill="#0085f7"
                        d="M176.5 330.3c-10.1-6.8-17-16.7-20.9-29.9l23.4-9.6c2.1 8.1 5.8 14.3 11.1 18.8 5.3 4.4 11.7 6.6 19.1 6.6 7.6 0 14.2-2.3 19.7-7 5.5-4.6 8.3-10.6 8.3-17.8 0-7.3-2.9-13.3-8.7-18s-13.1-7-21.8-7h-13.5v-23.1h12.1c7.5 0 13.8-2 18.9-6.1s7.7-9.6 7.7-16.6c0-6.3-2.3-11.3-6.9-15-4.6-3.7-10.4-5.6-17.4-5.6-6.9 0-12.3 1.8-16.4 5.5s-7 8.2-8.8 13.5l-23.1-9.6c3.1-8.7 8.7-16.4 16.9-23 8.3-6.6 18.8-10 31.6-10 9.5 0 18 1.8 25.5 5.5 7.5 3.7 13.5 8.8 17.8 15.2 4.3 6.5 6.4 13.8 6.4 21.9 0 8.3-2 15.2-6 21-4 5.7-8.9 10.1-14.7 13.2v1.4c7.6 3.2 13.9 8.1 18.8 14.7 4.9 6.6 7.3 14.4 7.3 23.6s-2.3 17.3-7 24.5c-4.6 7.2-11.1 12.8-19.2 16.9-8.2 4.1-17.4 6.2-27.6 6.2-11.8 0-22.7-3.4-32.8-10.2zM320.1 214.3l-25.7 18.6-12.8-19.5 46-33.2h17.7v156.7h-25.2z"
                      />
                      <path
                        fill="#00a94b"
                        d="M390.7 390.7H121.3l-38.6 56.9 38.6 64.4h269.4l31.9-68.5z"
                      />
                      <path
                        fill="#0085f7"
                        d="M390.7 0H40.4C18.1 0 0 18.1 0 40.4v350.3l60.6 43.1 60.6-43.1V121.3h269.5l41.5-60.7z"
                      />
                      <path
                        fill="#00802e"
                        d="M0 390.7v80.9C0 493.9 18.1 512 40.4 512h80.8V390.7z"
                      />
                      <path
                        fill="#ffbc00"
                        d="M512 121.3l-60.6-39-60.6 39v269.5l54.5 28.4L512 390.7z"
                      />
                      <path
                        fill="#0067d5"
                        d="M512 121.3V40.4C512 18.1 493.9 0 471.6 0h-80.8v121.3z"
                      />
                      <path fill="#ff4131" d="M390.7 512L512 391H391z" />
                    </svg>
                  </div>
                  <h6 class="text-sm font-bold text-slate-900">
                    Google Calendar
                  </h6>
                  <p class="text-xs text-slate-500 mt-2 group-hover:text-blue-600 transition-colors">
                    Scheduling
                  </p>
                </div>

                {/* <!-- Zoom --> */}
                <div class="group bg-white border border-slate-200 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-blue-700">
                  <div
                    class="w-12 h-12 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-full h-full"
                    >
                      <rect width="512" height="512" fill="#2D8CFF" rx="15%" />
                      <path
                        fill="#fff"
                        d="M428 357c8 2 15-2 19-8 2-3 2-8 2-19V179c0-11 0-15-2-19-3-8-11-11-19-8-21 14-67 55-68 72-.8 3-.8 8-.8 15v38c0 8 0 11 .8 15 1 8 4 15 8 19 12 9 52 45 61 45zM64 187c0-15 0-23 3-27 2-4 8-8 11-11 4-3 11-3 27-3h129c38 0 57 0 72 8 11 8 23 15 30 30 8 15 8 34 8 72v68c0 15 0 23-3 27-2 4-8 8-11 11-4 3-11 3-27 3H174c-38 0-57 0-72-8-11-8-23-15-30-30-8-15-8-34-8-72z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-sm font-bold text-slate-900">Zoom</h6>
                  <p class="text-xs text-slate-500 mt-2 group-hover:text-blue-600 transition-colors">
                    Video Calls
                  </p>
                </div>

                {/* <!-- Slack --> */}
                <div class="group bg-white border border-slate-200 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-blue-700">
                  <div
                    class="w-12 h-12 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-full h-full"
                    >
                      <path
                        fill="#54e360"
                        d="M320.8 0c-29.3 0-53.1 23.8-53.1 53.1v130.3c0 29.3 23.8 53.1 53.1 53.1 29.3 0 53.1-23.8 53.1-53.1V53.1C373.9 23.8 350.1 0 320.8 0z"
                      />
                      <path
                        fill="#00b44b"
                        d="M458.9 130.3c-29.3 0-53.1 23.8-53.1 53.1v38.1c0 8.3 6.7 15 15 15h38.1c29.3 0 53.1-23.8 53.1-53.1s-23.8-53.1-53.1-53.1z"
                      />
                      <path
                        fill="#008adf"
                        d="M183.3 138.1H53.1C23.8 138.1 0 161.9 0 191.2c0 29.3 23.8 53.1 53.1 53.1h130.3c29.3 0 53.1-23.8 53.1-53.1-.1-29.3-23.9-53.1-53.2-53.1z"
                      />
                      <path
                        fill="#0065a3"
                        d="M183.3 0c-29.3 0-53.1 23.8-53.1 53.1s23.8 53.1 53.1 53.1h38.1c8.3 0 15-6.7 15-15V53.1C236.4 23.8 212.6 0 183.3 0z"
                      />
                      <path
                        fill="#ff0059"
                        d="M191.2 275.6c-29.3 0-53.1 23.8-53.1 53.1v130.3c0 29.3 23.8 53.1 53.1 53.1 29.3 0 53.1-23.8 53.1-53.1V328.7c-.1-29.3-23.9-53.1-53.1-53.1z"
                      />
                      <path
                        fill="#d20041"
                        d="M91.1 275.6H53.1C23.8 275.6 0 299.4 0 328.7c0 29.3 23.8 53.1 53.1 53.1 29.3 0 53.1-23.8 53.1-53.1v-38.1c0-8.2-6.7-15-15.1-15z"
                      />
                      <path
                        fill="#ffd400"
                        d="M458.9 267.8H328.7c-29.3 0-53.1 23.8-53.1 53.1s23.8 53.1 53.1 53.1h130.3c29.3 0 53.1-23.8 53.1-53.1s-23.9-53.1-53.2-53.1z"
                      />
                      <path
                        fill="#ff9f04"
                        d="M328.7 405.9h-38.1c-8.3 0-15 6.7-15 15v38.1c0 29.3 23.8 53.1 53.1 53.1 29.3 0 53.1-23.8 53.1-53.1s-23.8-53.1-53.1-53.1z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-sm font-bold text-slate-900">Slack</h6>
                  <p class="text-xs text-slate-500 mt-2 group-hover:text-blue-600 transition-colors">
                    Notifications
                  </p>
                </div>

                {/* <!-- Stripe --> */}
                <div class="group bg-white border border-slate-200 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-blue-700">
                  <div
                    class="w-12 h-12 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 28.87 28.87"
                      class="w-full h-full"
                    >
                      <rect
                        width="28.87"
                        height="28.87"
                        fill="#6772e5"
                        rx="6.48"
                        ry="6.48"
                      />
                      <path
                        fill="#fff"
                        d="M13.3 11.2c0-.69.57-1 1.49-1a9.84 9.84 0 0 1 4.37 1.13V7.24a11.6 11.6 0 0 0-4.36-.8c-3.56 0-5.94 1.86-5.94 5 0 4.86 6.68 4.07 6.68 6.17 0 .81-.71 1.07-1.68 1.07A11.06 11.06 0 0 1 9 17.25v4.19a12.19 12.19 0 0 0 4.8 1c3.65 0 6.17-1.8 6.17-5 .03-5.21-6.67-4.27-6.67-6.24z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-sm font-bold text-slate-900">Stripe</h6>
                  <p class="text-xs text-slate-500 mt-2 group-hover:text-blue-600 transition-colors">
                    Payments
                  </p>
                </div>

                {/* <!-- Gmail --> */}
                <div class="group bg-white border border-slate-200 p-6 rounded-lg text-center transition-all duration-300 hover:shadow-sm hover:-translate-y-1 hover:border-blue-700">
                  <div
                    class="w-12 h-12 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    aria-hidden="true"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="w-full h-full"
                    >
                      <path
                        fill="#f44336"
                        d="M458.7 64a10.7 10.7 0 0 0-6.4 2.1L256 210.8 59.7 66.1a10.7 10.7 0 0 0-6.4-2.1C23.9 64 0 87.9 0 117.3v277.4C0 424.1 23.9 448 53.3 448h21.3V191.2l164.5 116.2a10.7 10.7 0 0 0 12.3 0l164.5-116.2V437.3h21.3c29.5 0 53.3-23.9 53.3-53.4V117.3C512 87.9 488.1 64 458.7 64z"
                      />
                    </svg>
                  </div>
                  <h6 class="text-sm font-bold text-slate-900">Gmail</h6>
                  <p class="text-xs text-slate-500 mt-2 group-hover:text-blue-600 transition-colors">
                    Communication
                  </p>
                </div>
              </div>

              {/* <!-- Call to Action --> */}
              <div class="mt-12 text-center">
                <a
                  href="#"
                  class="inline-block py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  Explore All Integrations
                </a>
              </div>
            </div>
          </section>

          {/* <!-- pricing section --> */}
          <section id="pricing" class="mt-16 px-4 md:px-8 md:mt-28">
            <div class="max-w-6xl max-lg:max-w-3xl mx-auto">
              <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                  Choose the right plan for you
                </h2>
                <p class="text-base leading-relaxed text-slate-600">
                  Flexible plans designed for individuals, teams, and growing
                  businesses.
                </p>
              </div>

              <div class="grid gap-6 max-w-md mx-auto lg:grid-cols-3 md:grid-cols-2 md:max-w-full">
                {/* <!-- pricing card --> */}
                <div class="bg-white shadow-xs rounded-xl p-6 border border-slate-300">
                  <div class="relative h-full">
                    <h3 class="text-slate-900 text-lg font-medium mb-4">
                      Basic
                    </h3>
                    <div class="text-slate-900 text-4xl font-semibold">
                      <span class="price-value">$4.50</span>
                      <sub class="price-duration text-slate-600 font-medium text-sm ml-1">
                        / month
                      </sub>
                    </div>

                    <hr class="my-6 border-slate-300" />

                    <div>
                      <ul class="space-y-4 text-sm text-slate-800 font-medium">
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Up to 5 meetings per month
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Basic calendar integration
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Email notifications
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Customer Support
                        </li>
                      </ul>
                      <div class="min-h-[38px] mt-8">
                        <a
                          href="#"
                          class="absolute bottom-0 left-0 right-0 w-full text-center py-2.5 px-4 text-sm rounded-md font-semibold text-blue-700 border border-blue-300 bg-white hover:border-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- pricing card --> */}
                <div class="bg-white shadow-xs rounded-xl p-6 border border-slate-300">
                  <div class="relative h-full">
                    <h3 class="text-slate-900 text-lg font-medium mb-4">
                      Startup
                    </h3>
                    <div class="text-slate-900 text-4xl font-semibold">
                      <span class="price-value">14.50</span>
                      <sub class="price-duration text-slate-600 font-medium text-sm ml-1">
                        / month
                      </sub>
                    </div>

                    <hr class="my-6 border-slate-300" />

                    <div>
                      <ul class="space-y-4 text-sm text-slate-800 font-medium">
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Unlimited meetings
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Multiple calendars
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          SMS reminders
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Group scheduling
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Dedicated Server
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Custom branding
                        </li>
                      </ul>
                      <div class="min-h-[38px] mt-8">
                        <a
                          href="#"
                          class="absolute bottom-0 left-0 right-0 w-full text-center py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- pricing card --> */}
                <div class="bg-white shadow-xs rounded-xl p-6 border border-slate-300">
                  <div class="relative h-full">
                    <h3 class="text-slate-900 text-lg font-medium mb-4">
                      Enterprise
                    </h3>
                    <div class="text-slate-900 text-4xl font-semibold">
                      <span class="price-value">24.50</span>
                      <sub class="price-duration text-slate-600 font-medium text-sm ml-1">
                        / month
                      </sub>
                    </div>

                    <hr class="my-6 border-slate-300" />

                    <div>
                      <ul class="space-y-4 text-sm text-slate-800 font-medium">
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Everything in Professional
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Team management
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Advanced integrations
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Analytics dashboard
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          Priority support
                        </li>
                        <li class="flex items-center gap-2.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-[18px] bg-slate-100 fill-green-600 rounded-full p-1 overflow-visible"
                            viewBox="0 0 511.985 511.985"
                            aria-hidden="true"
                          >
                            <path
                              d="M500.088 83.681c-15.841-15.862-41.564-15.852-57.426 0L184.205 342.148 69.332 227.276c-15.862-15.862-41.574-15.862-57.436 0s-15.862 41.574 0 57.436l143.585 143.585c7.926 7.926 18.319 11.899 28.713 11.899s20.797-3.963 28.723-11.899l287.171-287.181c15.862-15.851 15.862-41.574 0-57.435"
                              data-original="#000000"
                            />
                          </svg>
                          500GB Cloud Storage
                        </li>
                      </ul>
                      <div class="min-h-[38px] mt-8">
                        <a
                          href="#"
                          class="absolute bottom-0 left-0 right-0 w-full text-center py-2.5 px-4 text-sm rounded-md font-semibold text-blue-700 border border-blue-300 bg-white hover:border-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Testimonial section --> */}
          <section id="testimonials" class="mt-16 md:mt-28">
            <div class="bg-black px-4 py-12 md:px-8 md:px-10 md:py-16">
              <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <h2 class="text-3xl font-bold text-slate-50 mb-6 md:text-4xl">
                  What our happy client say
                </h2>
                <p class="text-base leading-relaxed text-slate-400">
                  Don't just take our word for it - hear from professionals
                  who've transformed their scheduling workflow.
                </p>
              </div>

              <div class="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
                <figure class="flex min-[1200px]:items-center max-[1200px]:flex-col gap-6 rounded-xl p-4 border border-neutral-700 md:p-6">
                  <div class="shrink-0">
                    <img
                      src="https://readymadeui.com/team-3.webp"
                      class="w-28 h-28 border border-slate-600 rounded-full"
                      alt="Mark Adair"
                    />
                  </div>

                  <div>
                    <div class="flex items-center flex-wrap justify-between gap-x-3 gap-y-2">
                      <figcaption>
                        <p class="text-slate-50 text-base font-semibold">
                          Mark Adair
                        </p>
                      </figcaption>
                      <div class="flex items-center flex-wrap justify-center gap-3">
                        <div class="flex justify-center gap-2" role="img">
                          <span class="sr-only">4 out of 5 stars</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-neutral-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                        </div>
                        <p class="text-base font-medium text-slate-600">4.0</p>
                      </div>
                    </div>

                    <blockquote class="mt-2">
                      <p class="text-base text-slate-400 font-normal leading-relaxed">
                        This service has saved me countless hours of
                        back-and-forth emails. My clients love how easy it is to
                        book a meeting with me.
                      </p>
                    </blockquote>
                  </div>
                </figure>

                <figure class="flex min-[1200px]:items-center max-[1200px]:flex-col gap-6 rounded-xl p-4 border border-neutral-700 md:p-6">
                  <div class="shrink-0">
                    <img
                      src="https://readymadeui.com/team-4.webp"
                      class="w-28 h-28 border border-slate-600 rounded-full"
                      alt="Simon Konecki"
                    />
                  </div>

                  <div>
                    <div class="flex items-center flex-wrap justify-between gap-x-3 gap-y-2">
                      <figcaption>
                        <p class="text-slate-50 text-base font-semibold">
                          Simon Konecki
                        </p>
                      </figcaption>
                      <div class="flex items-center flex-wrap justify-center gap-3">
                        <div class="flex justify-center gap-2" role="img">
                          <span class="sr-only">5 out of 5 stars</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                        </div>
                        <p class="text-base font-medium text-slate-600">5.0</p>
                      </div>
                    </div>

                    <blockquote class="mt-2">
                      <p class="text-base text-slate-400 font-normal leading-relaxed">
                        Since implementing this service, my booking rate has
                        increased by 35%. The time zone feature is a
                        game-changer for my international clients.
                      </p>
                    </blockquote>
                  </div>
                </figure>

                <figure class="flex min-[1200px]:items-center max-[1200px]:flex-col gap-6 rounded-xl p-4 border border-neutral-700 md:p-6">
                  <div class="shrink-0">
                    <img
                      src="https://readymadeui.com/team-5.webp"
                      class="w-28 h-28 border border-slate-600 rounded-full"
                      alt="Emily Chen"
                    />
                  </div>

                  <div>
                    <div class="flex items-center flex-wrap justify-between gap-x-3 gap-y-2">
                      <figcaption>
                        <p class="text-slate-50 text-base font-semibold">
                          Emily Chen
                        </p>
                      </figcaption>
                      <div class="flex items-center flex-wrap justify-center gap-3">
                        <div class="flex justify-center gap-2" role="img">
                          <span class="sr-only">3 out of 5 stars</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-neutral-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-neutral-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                        </div>
                        <p class="text-base font-medium text-slate-600">3.0</p>
                      </div>
                    </div>

                    <blockquote class="mt-2">
                      <p class="text-base text-slate-400 font-normal leading-relaxed">
                        Our team manages over 200 client meetings per month, and
                        this service has streamlined our entire process. The
                        group scheduling features have been valuable for our
                        organization.
                      </p>
                    </blockquote>
                  </div>
                </figure>

                <figure class="flex min-[1200px]:items-center max-[1200px]:flex-col gap-6 rounded-xl p-4 border border-neutral-700 md:p-6">
                  <div class="shrink-0">
                    <img
                      src="https://readymadeui.com/team-6.webp"
                      class="w-28 h-28 border border-slate-600 rounded-full"
                      alt="Marcus Rodriguez"
                    />
                  </div>

                  <div>
                    <div class="flex items-center flex-wrap justify-between gap-x-3 gap-y-2">
                      <figcaption>
                        <p class="text-slate-50 text-base font-semibold">
                          Marcus Rodriguez
                        </p>
                      </figcaption>
                      <div class="flex items-center flex-wrap justify-center gap-3">
                        <div class="flex justify-center gap-2" role="img">
                          <span class="sr-only">4 out of 5 stars</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-neutral-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                        </div>
                        <p class="text-base font-medium text-slate-600">4.0</p>
                      </div>
                    </div>

                    <blockquote class="mt-2">
                      <p class="text-base text-slate-400 font-normal leading-relaxed">
                        It's calendar integration is flawless. As a consultant
                        juggling multiple projects, I can block off focus time
                        while still remaining available for priority clients.
                      </p>
                    </blockquote>
                  </div>
                </figure>

                <figure class="flex min-[1200px]:items-center max-[1200px]:flex-col gap-6 rounded-xl p-4 border border-neutral-700 md:p-6">
                  <div class="shrink-0">
                    <img
                      src="https://readymadeui.com/team-1.webp"
                      class="w-28 h-28 border border-slate-600 rounded-full"
                      alt="Sarah Thompson"
                    />
                  </div>

                  <div>
                    <div class="flex items-center flex-wrap justify-between gap-x-3 gap-y-2">
                      <figcaption>
                        <p class="text-slate-50 text-base font-semibold">
                          Sarah Thompson
                        </p>
                      </figcaption>
                      <div class="flex items-center flex-wrap justify-center gap-3">
                        <div class="flex justify-center gap-2" role="img">
                          <span class="sr-only">5 out of 5 stars</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                        </div>
                        <p class="text-base font-medium text-slate-600">5.0</p>
                      </div>
                    </div>

                    <blockquote class="mt-2">
                      <p class="text-base text-slate-400 font-normal leading-relaxed">
                        It's buffer time feature has been a lifesaver for my
                        back-to-back meetings. I've reclaimed at least 5 hours
                        weekly that I used to spend on scheduling.
                      </p>
                    </blockquote>
                  </div>
                </figure>

                <figure class="flex min-[1200px]:items-center max-[1200px]:flex-col gap-6 rounded-xl p-4 border border-neutral-700 md:p-6">
                  <div class="shrink-0">
                    <img
                      src="https://readymadeui.com/team-2.webp"
                      class="w-28 h-28 border border-slate-600 rounded-full"
                      alt="John Doe"
                    />
                  </div>

                  <div>
                    <div class="flex items-center flex-wrap justify-between gap-x-3 gap-y-2">
                      <figcaption>
                        <p class="text-slate-50 text-base font-semibold">
                          John Doe
                        </p>
                      </figcaption>
                      <div class="flex items-center flex-wrap justify-center gap-3">
                        <div class="flex justify-center gap-2" role="img">
                          <span class="sr-only">4 out of 5 stars</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-[#ffc107]"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="size-3.5 fill-neutral-600"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z"
                              data-original="#ffc107"
                            />
                          </svg>
                        </div>
                        <p class="text-base font-medium text-slate-600">4.0</p>
                      </div>
                    </div>

                    <blockquote class="mt-2">
                      <p class="text-base text-slate-400 font-normal leading-relaxed">
                        As a therapist, client confidentiality is essential.
                        It's privacy features and seamless HIPAA compliance make
                        it perfect for my practice.
                      </p>
                    </blockquote>
                  </div>
                </figure>
              </div>
            </div>
          </section>

          {/* <!-- FAQ section --> */}
          <section class="mt-16 px-4 md:px-8 md:mt-28">
            <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <h2 class="text-slate-900 text-3xl font-bold md:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>

            <div class="max-w-4xl mx-auto">
              <div class="divide-y divide-slate-300">
                <div class="py-6">
                  <h3 id="faq-heading-1">
                    <button
                      type="button"
                      aria-expanded="true"
                      aria-controls="faq-panel-1"
                      class="toggle-button cursor-pointer text-left w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span class="mr-4">
                        Are there any fees for rescheduling or canceling a
                        meeting?
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                        <path
                          class="plus hidden"
                          d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id="faq-panel-1"
                    role="region"
                    aria-labelledby="faq-heading-1"
                    aria-hidden="false"
                    class="content overflow-hidden transition-all duration-300"
                  >
                    <div class="mt-4">
                      <p class="text-base text-slate-600 leading-relaxed">
                        Rescheduling is free if done at least 24 hours before
                        the scheduled meeting time. Late cancellations or
                        no-shows may incur a fee depending on your subscription
                        plan. Premium members enjoy unlimited rescheduling
                        privileges without penalties.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="py-6">
                  <h3 id="faq-heading-2">
                    <button
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-panel-2"
                      class="toggle-button cursor-pointer text-left w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span class="mr-4">
                        What are the available time slots for scheduling
                        meetings?
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                        <path
                          class="plus"
                          d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id="faq-panel-2"
                    role="region"
                    aria-labelledby="faq-heading-2"
                    aria-hidden="true"
                    style="max-height: 0px;"
                    class="content invisible overflow-hidden transition-all duration-300"
                  >
                    <div class="mt-4">
                      <p class="text-base text-slate-600 leading-relaxed">
                        Our scheduling system offers flexible time slots from 8
                        AM to 8 PM in your local time zone, seven days a week.
                        Meeting durations can be set for 15, 30, 45, or 60
                        minutes by default, with custom durations available for
                        premium subscribers. Your availability preferences can
                        be configured in your account settings.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="py-6">
                  <h3 id="faq-heading-3">
                    <button
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-panel-3"
                      class="toggle-button cursor-pointer text-left w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span class="mr-4">
                        Can I invite multiple participants to a scheduled
                        meeting?
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                        <path
                          class="plus"
                          d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id="faq-panel-3"
                    role="region"
                    aria-labelledby="faq-heading-3"
                    aria-hidden="true"
                    style="max-height: 0px;"
                    class="content invisible overflow-hidden transition-all duration-300"
                  >
                    <div class="mt-4">
                      <p class="text-base text-slate-600 leading-relaxed">
                        Yes, you can invite up to 10 participants with our
                        standard plan and up to 50 participants with our
                        business plan. All invitees will receive calendar
                        invitations with meeting details and reminders. Each
                        participant can confirm their attendance or suggest
                        alternative times if needed.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="py-6">
                  <h3 id="faq-heading-4">
                    <button
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-panel-4"
                      class="toggle-button cursor-pointer text-left w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span class="mr-4">
                        How do I integrate the scheduling system with my
                        calendar?
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                        <path
                          class="plus"
                          d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id="faq-panel-4"
                    role="region"
                    aria-labelledby="faq-heading-4"
                    aria-hidden="true"
                    style="max-height: 0px;"
                    class="content invisible overflow-hidden transition-all duration-300"
                  >
                    <div class="mt-4">
                      <p class="text-base text-slate-600 leading-relaxed">
                        Our scheduling service integrates seamlessly with Google
                        Calendar, Microsoft Outlook, Apple Calendar, and other
                        major calendar providers. Simply go to your account
                        settings, select "Calendar Integration," and follow the
                        authorization steps. Once connected, your existing
                        appointments will be synchronized to prevent
                        double-bookings.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="py-6">
                  <h3 id="faq-heading-5">
                    <button
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-panel-5"
                      class="toggle-button cursor-pointer text-left w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span class="mr-4">
                        Are there automatic reminders for scheduled meetings?
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                        <path
                          class="plus"
                          d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id="faq-panel-5"
                    role="region"
                    aria-labelledby="faq-heading-5"
                    aria-hidden="true"
                    style="max-height: 0px;"
                    class="content invisible overflow-hidden transition-all duration-300"
                  >
                    <div class="mt-4">
                      <p class="text-base text-slate-600 leading-relaxed">
                        Yes, all participants receive automatic email reminders
                        24 hours and 1 hour before the scheduled meeting. You
                        can customize reminder timing and add SMS notifications
                        in your notification preferences. Premium users can set
                        up additional custom reminders and personalize
                        notification messages.
                      </p>
                    </div>
                  </div>
                </div>

                <div class="py-6">
                  <h3 id="faq-heading-6">
                    <button
                      type="button"
                      aria-expanded="false"
                      aria-controls="faq-panel-6"
                      class="toggle-button cursor-pointer text-left w-full text-base outline-none font-semibold text-slate-900 flex items-center focus-visible:ring-2 focus-visible:ring-blue-500"
                    >
                      <span class="mr-4">
                        How can I set up recurring meetings?
                      </span>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        class="size-3.5 fill-current ml-auto shrink-0 transition-transform duration-300"
                        aria-hidden="true"
                      >
                        <path d="M40.421 215.579H471.579C493.868 215.579 512 233.711 512 256s-18.132 40.421-40.421 40.421H40.421C18.132 296.421 0 278.289 0 256s18.132-40.421 40.421-40.421z" />
                        <path
                          class="plus"
                          d="M215.579 40.421C215.579 18.132 233.711 0 256 0s40.421 18.132 40.421 40.421v431.158C296.421 493.868 278.289 512 256 512s-40.421-18.132-40.421-40.421V40.421z"
                        />
                      </svg>
                    </button>
                  </h3>

                  <div
                    id="faq-panel-6"
                    role="region"
                    aria-labelledby="faq-heading-6"
                    aria-hidden="true"
                    style="max-height: 0px;"
                    class="content invisible overflow-hidden transition-all duration-300"
                  >
                    <div class="mt-4">
                      <p class="text-base text-slate-600 leading-relaxed">
                        To set up recurring meetings, select the "Recurring"
                        option when creating a new meeting. You can choose
                        daily, weekly, bi-weekly, monthly, or custom recurrence
                        patterns. Each occurrence can be modified individually
                        if needed, and you can set an end date or number of
                        occurrences for the series.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* <!-- CTA Section --> */}
          <section class="py-16 bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 md:mt-28 mt-16 px-4 md:px-8">
            <div class="max-w-3xl mx-auto text-center mb-12">
              <h2 class="text-white text-3xl font-bold mb-6 md:text-4xl">
                Ready to transform your scheduling experience?
              </h2>
              <p class="leading-relaxed text-white">
                Join thousands of professionals who've eliminated scheduling
                headaches with It.
              </p>
            </div>

            <div class="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                class="inline-block py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Start Your Free Trial
              </a>
              <a
                href="#"
                class="py-2.5 px-4 text-white text-sm font-semibold rounded-md bg-transparent border border-white transition-colors hover:bg-white hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                See Demo
              </a>
            </div>
          </section>
        </div>

        {/* <!-- footer section --> */}
        <footer class="bg-white dark:bg-neutral-900 pt-16 pb-8 px-4 md:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 sm:gap-x-8">
              <div>
                <h3 class="text-slate-900 dark:text-slate-50 font-semibold text-sm mb-6">
                  Scheduling
                </h3>
                <ul class="space-y-4 text-slate-600 dark:text-slate-400 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      One-on-One Meetings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Group Scheduling
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Recurring Meetings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Round Robin
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Collective Scheduling
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-slate-900 dark:text-slate-50 font-semibold text-sm mb-6">
                  Integrations
                </h3>
                <ul class="space-y-4 text-slate-600 dark:text-slate-400 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Google Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Microsoft Outlook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Apple Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Zoom
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-slate-900 dark:text-slate-50 font-semibold text-sm mb-6">
                  Company
                </h3>
                <ul class="space-y-4 text-slate-600 dark:text-slate-400 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Press
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 class="text-slate-900 dark:text-slate-50 font-semibold text-sm mb-6">
                  Resources
                </h3>
                <ul class="space-y-4 text-slate-600 dark:text-slate-400 text-sm font-normal">
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      API Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Scheduling Tips
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded transition-all"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr class="border-slate-300 dark:border-neutral-700 my-8" />

            <div class="text-left">
              <p class="text-slate-600 dark:text-slate-400 text-sm">
                © ReadymadeUI. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
});
