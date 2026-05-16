import { PageProps } from "fresh";
import { MainNavMenu } from "../components/MainNavMenu.tsx";
import { DarkFooter } from "@/components/DarkFooter.tsx";

export default function MenuLayout({ Component }: PageProps) {
  return (
    <div>
      <MainNavMenu />
      <Component />

      <footer>
        <DarkFooter />
      </footer>
    </div>
  );
}
