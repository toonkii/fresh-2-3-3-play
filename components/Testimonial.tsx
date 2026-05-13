export function Testimonial() {
  return (
    <>
      {/* <!-- Testimonial section --> */}
      <section id="testimonials" class="mt-16 md:mt-28">
        <div class="bg-black px-4 py-12 md:px-8 md:px-10 md:py-16">
          <div class="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 class="text-3xl font-bold text-slate-50 mb-6 md:text-4xl">
              What our happy clients say
            </h2>
            <p class="text-base leading-relaxed text-slate-400">
              Don't just take our word for it - hear from professionals who've
              transformed their scheduling workflow.
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
                    This service has saved me countless hours of back-and-forth
                    emails. My clients love how easy it is to book a meeting
                    with me.
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
                    increased by 35%. The time zone feature is a game-changer
                    for my international clients.
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
                    this service has streamlined our entire process. The group
                    scheduling features have been valuable for our organization.
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
                    juggling multiple projects, I can block off focus time while
                    still remaining available for priority clients.
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
                    As a therapist, client confidentiality is essential. It's
                    privacy features and seamless HIPAA compliance make it
                    perfect for my practice.
                  </p>
                </blockquote>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
