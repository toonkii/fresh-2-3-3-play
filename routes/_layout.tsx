import { PageProps } from "fresh";
import { MainNavMenu } from "../components/MainNavMenu.tsx";
import { DarkFooter2 } from "@/components/DarkFooter2.tsx";
// import dotenv from "dotenv";

export default function MainLayout({ Component }: PageProps) {
  // Force reload and overwrite process.env
  // dotenv.config({ override: true });

  const mode = Deno.env.get("MODE");
  // console.log("mode:", mode);

  return (
    <div>
      { mode === 'under_construction' ? <div /> : <MainNavMenu /> }
      <Component />
      <DarkFooter2 />
    </div>
  );
}
