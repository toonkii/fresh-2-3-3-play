export function HeroSection() {
  return (
    <>
      <section class="px-4 mt-12 md:mt-16 md:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="grid lg:grid-cols-2 justify-center items-center gap-x-12 gap-y-16">
            <div>
              <div class="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
                <h1 class="text-4xl text-slate-900 font-bold !leading-tight mb-6 md:text-5xl">
                  Network Installation Without Any Hassle
                </h1>
                <p class="text-slate-600 text-lg leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora quae, id facere facilis perferendis necessitatibus
                  laudantium asperiores neque soluta fuga, mollitia nam nemo
                  sunt porro expedita saepe ea. Illo labore asperiores
                  necessitatibus in excepturi, voluptas reiciendis laboriosam
                  similique officiis accusantium aut placeat, dolor eveniet
                  saepe rem incidunt quam ad minus. Est, inventore tempora
                  laborum ipsam consequuntur eveniet? <br />
                  <br />Quidem amet aut dolor deserunt omnis! Suscipit hic rem
                  voluptates dolore nisi eius eligendi sequi quidem minus eos
                  officia, sapiente dicta deserunt libero magni illo molestias
                  deleniti distinctio labore? Illum ex nesciunt sed magnam vel
                  fugit cumque labore eaque? Exercitationem officiis porro fuga
                  architecto neque vero dolore molestias nisi voluptatibus
                  quibusdam! Fuga quo maxime eveniet quod eum, vitae ut
                  assumenda omnis accusantium animi sunt, ad asperiores itaque
                  deserunt. Quidem optio dignissimos quisquam! Blanditiis,
                  impedit exercitationem.
                </p>

                <div class="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="#"
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

            <div class="w-full aspect-[42/33]">
              <img
                src="/img/RJ45-Pinout-T568B.jpg"
                // src="/img/compare-fibre-PAOv9-7VBMI-unsplash.jpg"
                // src="/img/undraw_control-panel_s0j2.svg"
                // src="https://readymadeui.com/images/meeting-img.webp"
                alt="meeting image"
                class="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
