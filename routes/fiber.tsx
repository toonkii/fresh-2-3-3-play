import { define } from "../utils.ts";

export default define.page(function FiberPage(_) {
  return (
    <>
      <main>
        {/* <!-- explanation section --> */}
        <section class="px-4 mt-12 md:mt-16 md:px-8">
          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    Fiber Optic Installation
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    Fiber optic installation is the process of laying and
                    connecting thin strands of glass (fibers) that transmit data
                    as pulses of light. This process is highly precise because
                    even a speck of dust or a slight misalignment can disrupt
                    the signal.
                  </p>
                </div>
              </div>

              <div class="w-full aspect-[42/33]">
                <img
                  //   src="/img/RJ45-Pinout-T568B.jpg"
                  src="/img/compare-fibre-PAOv9-7VBMI-unsplash.jpg"
                  // src="/img/undraw_control-panel_s0j2.svg"
                  // src="https://readymadeui.com/images/meeting-img.webp"
                  alt="meeting image"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div class="w-full aspect-[42/33]">
                <img
                  //   src="/img/RJ45-Pinout-T568B.jpg"
                  //   src="/img/compare-fibre-PAOv9-7VBMI-unsplash.jpg"
                  // src="/img/undraw_control-panel_s0j2.svg"
                  src="https://readymadeui.com/images/meeting-img.webp"
                  alt="meeting image"
                  class="w-full h-full object-contain"
                />
              </div>
              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    1. Planning And Site Survey
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    For underground setups, a conduit (a protective plastic
                    pipe) is usually installed first. To get the fiber through
                    the conduit, technicians use a "pull string" or
                    high-pressure air to "blow" the fiber through the pipe,
                    which minimizes friction and prevents the delicate glass
                    from stretching or breaking.
                  </p>
                  <ul class="max-w-md space-y-1 text-body list-inside">
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-fg-success me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Aerial Installation: Attaching cables to existing utility
                      poles.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-body me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Underground Installation: Burying cables in trenches or
                      pulling them through protective conduits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    2. Preparing The Pathway
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    For underground setups, a conduit (a protective plastic
                    pipe) is usually installed first. To get the fiber through
                    the conduit, technicians use a "pull string" or
                    high-pressure air to "blow" the fiber through the pipe,
                    which minimizes friction and prevents the delicate glass
                    from stretching or breaking.
                  </p>
                </div>
              </div>

              <div class="w-full aspect-[42/33]">
                <img
                  src="/img/undraw_heavy-lifting_d753.png"
                  alt="heavy lifting"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div class="w-full aspect-[42/33]">
                <img
                  src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQ3tODUjOifSwPkTVvEFxFoL-0LrFFvgZTffd9XFWMs7GyNepYlMa1jsiGg6TAptjsPOC6VdgRedar5NQ2ho5C7c0mUo_9vXV-OaXD65RjEleeimP8"
                  alt="fiber cable"
                  class="w-full h-full object-contain"
                />
              </div>

              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    3. Splicing: Joining the Fibers
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    Since cables come in specific lengths, they must be joined
                    together. This is the most critical step and is done in two
                    ways:
                  </p>

                  <ul class="max-w-md space-y-1 text-body list-inside">
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-fg-success me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Fusion Splicing: A specialized machine uses an electric
                      arc to melt two fiber ends together, creating a continuous
                      glass path. This offers the lowest signal loss.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-body me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Mechanical Splicing: The fibers are held together by a
                      mechanical fixture and a special gel that helps light pass
                      between them. This is faster but less efficient than
                      fusion.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    4. Termination and Connection
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    The end of the fiber cable is "terminated" at a Patch Panel
                    or an Optical Network Terminal (ONT).
                  </p>

                  <ul class="max-w-md space-y-1 text-body list-inside">
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-fg-success me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Cleaving: The fiber is cut perfectly square using a
                      precision tool (a cleaver).
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-body me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Polishing: If using connectors instead of fusion, the tips
                      are polished to a mirror finish to ensure light flows out
                      smoothly.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="w-full aspect-[42/33]">
                <img
                  src="/img/pexels-brett-sayles-4425157.jpg"
                  alt="heavy lifting"
                  class="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div class="max-w-7xl mx-auto">
            <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
              <div class="w-full aspect-[42/33]">
                <img
                  src="\img\pexels-brett-sayles-4486718.jpg"
                  alt="fiber cable"
                  class="w-full h-full object-contain"
                />
              </div>

              <div>
                <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                  <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                    5. Testing and Validation
                  </h1>
                  <p class="text-slate-600 text-lg leading-relaxed">
                    Once the physical link is complete, technicians use an OTDR
                    (Optical Time Domain Reflectometer). This device sends a
                    pulse of light down the line and measures the "backscatter."
                    It identifies:
                  </p>

                  <ul class="max-w-md space-y-1 text-body list-inside">
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-fg-success me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      The total length of the fiber.
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-body me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      Any points of high signal loss (attenuation).
                    </li>
                    <li class="flex items-center">
                      <svg
                        class="w-4 h-4 text-body me-1.5 shrink-0"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                      The location of any breaks or bad splices.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
});
