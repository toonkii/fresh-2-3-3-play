import { define } from "../utils.ts";

export default define.page(function ProjectsPage(_) {
  return (
    <>
      <h1 class="text-2xl/7 font-bold sm:truncate sm:text-3xl sm:tracking-tight">
        Projects
      </h1>

      <div className="btn btn-primary m-4 w-30">Primary</div>
      <div className="btn btn-secondary m-4 w-30">Secondary</div>
      <div className="btn btn-neutral m-4 w-30">Neutral</div>
      <div className="btn btn-disabled m-4 w-30">Disabled</div>
      <div className="btn btn-success m-4 w-30">Success</div>
      <div className="btn btn-error m-4 w-30">Error</div>
    </>
  );
});
