import { define } from "../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    return await ctx;
  },
});

export default define.page<typeof handler>(function ContactPage(_) {
  return (
    <>
      <form method="get" enctype="application/x-www-form-urlencoded">
        <section class="px-4 md:px-8 mt-6">
          <div class="max-w-4xl mx-auto">
            <div class="max-w-3xl mb-12 md:mb-16">
              <h2 class="text-3xl font-bold text-slate-900 mb-6 md:text-4xl">
                Test Form
              </h2>

              <label
                for="name"
                class="mb-2 text-slate-900 font-medium text-lg inline-block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Joe Bloggs"
                required
                class="px-3 py-2.5 text-lg text-slate-900 w-full rounded-md bg-white outline-1 -outline-offset-1 outline-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
              />
            </div>
            <button
              type="submit"
              class="py-2.5 px-4 text-lg rounded-md font-semibold cursor-pointer text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </section>
      </form>
    </>
  );
});
