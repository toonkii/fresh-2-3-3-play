export function CallToAction() {
  return (
    <>
      <section class="py-16 bg-gradient-to-t from-blue-400 via-blue-500 to-blue-600 md:mt-28 mt-16 px-4 md:px-8">
        <div class="max-w-3xl mx-auto text-center mb-12">
          <h2 class="text-white text-3xl font-bold mb-6 md:text-4xl">
            Need help?
          </h2>
          <p class="leading-relaxed text-white">
            Join many companies that have used our services to improve their infrastructure.
          </p>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          {/* <a
            href="#"
            class="inline-block py-2.5 px-4 text-slate-900 text-sm font-semibold rounded-md bg-white border border-slate-300 transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Start Your Free Trial
          </a> */}
          <a
            href="/contact"
            class="py-2.5 px-4 text-white text-sm font-semibold rounded-md bg-transparent border border-white transition-colors hover:bg-white hover:text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Email Us
          </a>
        </div>
      </section>
    </>
  );
}
