export function Team() {
  return (
    <>
      <section class="px-4 md:px-8 mt-6">
        <div class="max-w-sm md:max-w-5xl sm:max-w-xl mx-auto">
          <div class="max-w-3xl mx-auto text-center md:mb-16 mb-12">

            <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Meet Our Team
            </h1>

            <p class="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              We’re a group of passionate professionals committed to solving problems. 
              Our diverse skills, experience and collaborative spirit drive innovation.
            </p>
          </div>

          <ul class="grid gap-6 md:grid-cols-3 sm:grid-cols-2">
            <li class="bg-blue-600 text-center rounded-lg px-6 py-8">
              <div class="w-40 h-40 border-4 border-white shadow-xl inline-block rounded-full overflow-hidden lg:w-48 lg:h-48">
                <img
                  // src="https://readymadeui.com/team-1.webp"
                  src="/img/thomas_clarke.jpg"
                  class="w-full h-full"
                  alt="Thomas Clarke"
                />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-base font-semibold text-white lg:text-lg">
                  Thomas Clarke
                </h3>
                <p class="text-sm text-slate-100 mt-1">Manager</p>
              </div>
            </li>

            <li class="bg-purple-600 text-center rounded-lg px-6 py-8">
              <div class="w-40 h-40 border-4 border-white shadow-xl inline-block rounded-full overflow-hidden lg:w-48 lg:h-48">
                <img
                  src="https://readymadeui.com/team-2.webp"
                  class="w-full h-full"
                  alt="Mark Ad"
                />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-base font-semibold text-white lg:text-lg">
                  Rene Ramdin
                </h3>
                <p class="text-sm text-slate-100 mt-1">Network Engineer</p>
              </div>
            </li>

            <li class="bg-pink-600 text-center rounded-lg px-6 py-8">
              <div class="w-40 h-40 border-4 border-white shadow-xl inline-block rounded-full overflow-hidden lg:w-48 lg:h-48">
                <img
                  src="https://readymadeui.com/team-3.webp"
                  class="w-full h-full"
                  alt="Simon Konecki"
                />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-base font-semibold text-white lg:text-lg">
                  Stevette Lopez
                </h3>
                <p class="text-sm text-slate-100 mt-1">Electrician</p>
              </div>
            </li>

            {/* <li class="bg-slate-600 text-center rounded-lg px-6 py-8">
              <div class="w-40 h-40 border-4 border-white shadow-xl inline-block rounded-full overflow-hidden lg:w-48 lg:h-48">
                <img
                  src="https://readymadeui.com/team-4.webp"
                  class="w-full h-full"
                  alt="Eleanorki"
                />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-base font-semibold text-white lg:text-lg">
                  Eleanorki
                </h3>
                <p class="text-sm text-slate-100 mt-1">Software Engineer</p>
              </div>
            </li>

            <li class="bg-cyan-600 text-center rounded-lg px-6 py-8">
              <div class="w-40 h-40 border-4 border-white shadow-xl inline-block rounded-full overflow-hidden lg:w-48 lg:h-48">
                <img
                  src="https://readymadeui.com/team-5.webp"
                  class="w-full h-full"
                  alt="Alen"
                />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-base font-semibold text-white lg:text-lg">
                  Alen
                </h3>
                <p class="text-sm text-slate-100 mt-1">Frontend Developer</p>
              </div>
            </li>

            <li class="bg-amber-600 text-center rounded-lg px-6 py-8">
              <div class="w-40 h-40 border-4 border-white shadow-xl inline-block rounded-full overflow-hidden lg:w-48 lg:h-48">
                <img
                  src="https://readymadeui.com/team-6.webp"
                  class="w-full h-full"
                  alt="Sophia"
                />
              </div>
              <div class="mt-4 text-center">
                <h3 class="text-base font-semibold text-white lg:text-lg">
                  Sophia
                </h3>
                <p class="text-sm text-slate-100 mt-1">Web Designer</p>
              </div>
            </li> */}
          </ul>
        </div>
      </section>
    </>
  );
}
