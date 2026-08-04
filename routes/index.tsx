// import { Head } from "fresh/runtime";
import { UnderConstruction } from "@/components/UnderConstruction.tsx";
import { define } from "../utils.ts";
import { Landing } from "@/components/Landing.tsx";

export default define.page(async function LandingPage(_ctx) {
  return (
    <>
      <Landing />
      {/* < UnderConstruction /> */}
    </>
  );
});
