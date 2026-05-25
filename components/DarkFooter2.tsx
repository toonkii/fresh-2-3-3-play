export function DarkFooter2() {
  return (
    <>
      <div class="pt-5">
        <footer class="bg-slate-100 dark:bg-neutral-900 py-6 px-4 md:px-8">
          <div class="flex justify-between items-center flex-col lg:flex-row flex-wrap gap-6 text-center">
            <p class="text-sm text-slate-600 dark:text-slate-300">
              © Sidereal 365 Inc. All rights reserved.
            </p>

            <div class="text-left">
              <p class="text-slate-600 dark:text-slate-400 text-sm">
                <a href="https://readymadeui.com/" target="_blank">© ReadymadeUI</a>
              </p>
            </div>

            <ul class="flex space-x-6 gap-y-4 max-lg:justify-center flex-wrap text-sm text-slate-600 dark:text-slate-300">
              <li>
                <a
                  href="#"
                  class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                >
                  Privacy Policy
                </a>
              </li>
              {
                /* <li>
              <a
                href="#"
                class="hover:text-slate-900 dark:hover:text-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
              >
                Contact
              </a>
            </li> */
              }
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
