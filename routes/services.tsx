import { define } from "../utils.ts";

export default define.page(function ServicesPage(_) {
  return (
    <>
      <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Our Services
      </h1>

      <p class="my-4 text-base text-slate-900 underline underline-offset-2 leading-relaxed">
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
            Testing
          </li>
          <li>
            Monitoring
          </li>
        </ol>
      </p>

      <p class="my-4 text-base text-slate-900 underline underline-offset-2 leading-relaxed">
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
        </ol>
      </p>
    </>
  );
});
