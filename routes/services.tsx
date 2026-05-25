import { define } from "../utils.ts";

export default define.page(function ServicesPage(_) {
  return (
    <>
      <section class="mt-6 px-4 md:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="max-w-3xl lg:mx-auto mb-12 lg:text-center md:mb-16">
            <h2 class="text-3xl font-bold mb-6 text-slate-900 md:text-4xl">
              Our Services
            </h2>
            <p class="text-base text-slate-600 leading-relaxed">
              Below shows the services we offer. As a company we have many years of hands on experience as well
              as training. Whatever your issues we can find a solution.
            </p>
          </div>

          <div class="grid gap-y-8 gap-x-8 lg:gap-x-0 md:grid-cols-2 lg:grid-cols-3 lg:divide-x lg:divide-slate-300">
            <div class="lg:px-8">
              <p class="my-4 font-bold text-base text-slate-900 leading-relaxed">
                Network
                <ol class="list-disc list-outside pl-5">
                  <li>
                    Network design (fiber/copper/both)
                  </li>
                  <li>
                    Supply equipment
                  </li>
                  <li>
                    Network installation (cabling/equipment)
                  </li>
                  <li>
                    Supply and install wifi access points
                  </li>
                  <li>
                    Testing
                  </li>
                  <li>
                    Monitoring
                  </li>
                </ol>
              </p>
            </div>

            <div class="lg:px-8">
              <p class="my-4 font-bold text-base text-slate-900 leading-relaxed">
                Telephone Equipment
                <ol class="list-disc list-outside pl-5">
                  <li>
                    Supply telephone equipment
                  </li>
                  <li>
                    Install telephone equipment
                  </li>
                  <li>
                    Testing
                  </li>
                  <li>
                    Ongoing support
                  </li>
                </ol>
              </p>
            </div>

            <div class="lg:px-8">
              <p class="my-4 font-bold text-base text-slate-900 leading-relaxed">
                Security Cameras
                <ol class="list-disc list-outside pl-5">
                  <li>
                    Design system
                  </li>
                  <li>
                    Source equipment
                  </li>
                  <li>
                    Install
                  </li>
                  <li>
                    Ongoing maintenance and support
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});
