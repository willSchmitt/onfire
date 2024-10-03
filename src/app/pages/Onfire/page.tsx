import { AboutOnFire } from "@/app/components/About";
import { HeaderOnFire } from "@/app/components/Header";
import Image from "next/image";

import BgPage from "../../../public/bgPage.jpg";
import { OldConference } from "@/app/components/OldConference";
import { ProgrammingOnFire } from "@/app/components/Programming";

export function OnFirePage() {
  return (
    <div className="flex flex-col gap-11 h-screen">
      <div className="min-h-screen">
        <Image
          src={BgPage}
          alt="imagem de fogo"
          style={{
            position: "absolute",
          }}
        />
        <HeaderOnFire />
        <AboutOnFire />
        <OldConference />
        <ProgrammingOnFire />
      </div>
    </div>
  );
}
