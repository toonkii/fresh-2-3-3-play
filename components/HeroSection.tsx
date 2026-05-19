export function HeroSection() {
  return (
    <>
      <section class="px-4 mt-12 md:mt-16 md:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
            <div>
              <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                <h1 class="text-4xl text-slate-900 font-bold leading-tight! mb-6 md:text-5xl">
                  The Importance Of Being Connected
                </h1>
                <p class="text-slate-600 text-lg leading-relaxed">
                  In the modern era, being "connected" usually implies the
                  internet, devices, and global networks.
                </p>

                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Democratization of Knowledge: The internet connects people to
                  information that was once gated behind expensive institutions.
                  Education, skills, and global news are accessible to anyone
                  with a signal.
                </p>

                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Economic Opportunity: Modern economies rely entirely on
                  connectivity. It allows for remote work, global trade, and the
                  ability for a small business in a rural town to sell to a
                  customer across the world.
                </p>

                <p class="flex items-center text-gray-600 mb-2">
                  <span class="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2.5"
                      class="w-3 h-3"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                  </span>
                  Global Solidarity: Digital connection allows us to witness
                  events in real-time, mobilizing aid for disasters or
                  amplifying voices that would otherwise be silenced.
                </p>
                <div class="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="/contact"
                    class="py-2.5 px-4 text-sm rounded-md font-semibold text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    Send Us An Email
                  </a>
                  {
                    /* <a
                          href="#"
                          class="py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                        >
                          Integrations
                        </a> */
                  }
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
                  <span class="font-semibold">Over 100</span>{" "}
                  Professionals trust us
                </div>
              </div>
            </div>

            <div class="w-full aspect-42/33">
              <img
                src="/img/pexels-snsn-36786617.jpg"
                // src="/img/compare-fibre-PAOv9-7VBMI-unsplash.jpg"
                // src="/img/undraw_control-panel_s0j2.svg"
                // src="https://readymadeui.com/images/meeting-img.webp"
                alt="connected by telecommunications"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
