import Image from "next/image";
import icon_company from "@/assets/logo-company.svg"

export function Logo() {
  return (
    <button className="flex items-center gap-1">
      <Image alt="icon-company" src={icon_company} height={20} width={20}/>
      <p className="text-text-secondary text-lg font-normal">TV</p>
    </button>
  );
}