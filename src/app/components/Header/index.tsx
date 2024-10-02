import Image from "next/image";

import OnFireImg from "../../../public/onfire-oficial.png";

export function HeaderOnFire() {
  return (
    <div className="relative">
      <Image
        src={OnFireImg}
        alt="Imagem da conferência On Fire."
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
