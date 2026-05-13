export function Faq() {
  return (
    <>
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
                    Are there any fees for rescheduling or canceling a meeting?
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
                    Rescheduling is free if done at least 24 hours before the
                    scheduled meeting time. Late cancellations or no-shows may
                    incur a fee depending on your subscription plan. Premium
                    members enjoy unlimited rescheduling privileges without
                    penalties.
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
                    What are the available time slots for scheduling meetings?
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
                    Our scheduling system offers flexible time slots from 8 AM
                    to 8 PM in your local time zone, seven days a week. Meeting
                    durations can be set for 15, 30, 45, or 60 minutes by
                    default, with custom durations available for premium
                    subscribers. Your availability preferences can be configured
                    in your account settings.
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
                    Can I invite multiple participants to a scheduled meeting?
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
                    Yes, you can invite up to 10 participants with our standard
                    plan and up to 50 participants with our business plan. All
                    invitees will receive calendar invitations with meeting
                    details and reminders. Each participant can confirm their
                    attendance or suggest alternative times if needed.
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
                    How do I integrate the scheduling system with my calendar?
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
                    Calendar, Microsoft Outlook, Apple Calendar, and other major
                    calendar providers. Simply go to your account settings,
                    select "Calendar Integration," and follow the authorization
                    steps. Once connected, your existing appointments will be
                    synchronized to prevent double-bookings.
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
                    Yes, all participants receive automatic email reminders 24
                    hours and 1 hour before the scheduled meeting. You can
                    customize reminder timing and add SMS notifications in your
                    notification preferences. Premium users can set up
                    additional custom reminders and personalize notification
                    messages.
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
                    To set up recurring meetings, select the "Recurring" option
                    when creating a new meeting. You can choose daily, weekly,
                    bi-weekly, monthly, or custom recurrence patterns. Each
                    occurrence can be modified individually if needed, and you
                    can set an end date or number of occurrences for the series.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
