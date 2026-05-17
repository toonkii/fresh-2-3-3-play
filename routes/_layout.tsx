import { PageProps } from "fresh";
import { MainNavMenu } from "../components/MainNavMenu.tsx";
import { DarkFooter2 } from "@/components/DarkFooter2.tsx";

export default function MenuLayout({ Component }: PageProps) {
  return (
    <div>
      <MainNavMenu />
      <Component />
      <DarkFooter2 />
    </div>
  );
}
