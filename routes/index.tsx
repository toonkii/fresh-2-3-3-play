// import { Head } from "fresh/runtime";
import { UnderConstruction } from "@/components/UnderConstruction.tsx";
import { define } from "../utils.ts";
import { Landing } from "@/components/Landing.tsx";
// import dotenv from "dotenv";

export default define.page(async function LandingPage(_ctx) {
  // dotenv.config({ override: true });
  const mode = Deno.env.get("MODE");

  return (
    <>
      {mode === "under_construction" ? <UnderConstruction /> : <Landing />}
    </>
  );
});
