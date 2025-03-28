import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface OptionStreamType {
  title: string;
  subtitle: string;
  icon: string | StaticImport;
  path: string;
}