import { PageProps } from "fresh";
import { MainNavMenu } from "../components/MainNavMenu.tsx";

export default function MenuLayout({ Component }: PageProps) {
  return (
    <>
      <MainNavMenu />
      <Component />
    </>
  );
}