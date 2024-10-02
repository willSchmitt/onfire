import Image from "next/image";

import ImgOnFireCardOne from "../../../public/onfire.png";
import ImgOnFireCardTwo from "../../../public/onfire2.jpeg";

export function AboutOnFire() {
  return (
    <div className="p-8 flex flex-col gap-9 items-center justify-center relative">
      <h1 className="text-4xl text-center font-mono font-bold">
        O QUE É O ONFIRE?
      </h1>

      <div className="flex flex-col gap-4">
        <div className="max-w-5xl flex gap-5 bg-neutral-900 rounded-xl shadow-custom-white">
          <p className="font-semibold text-end flex items-center justify-center font-serif">
            A Conferência OnFire é um evento cristão de avivamento espiritual,
            que busca promover momentos intensos de adoração, oração, e
            palestras voltadas à renovação da fé e ao desenvolvimento espiritual
            dos participantes. O foco principal é criar um ambiente onde as
            pessoas possam se conectar de forma mais profunda com sua
            espiritualidade, buscando um "avivamento" em suas vidas. O termo
            "OnFire" reflete a ideia de estar espiritualmente "em chamas", ou
            seja, cheio de fervor e paixão por Deus.
          </p>

          <Image
            src={ImgOnFireCardOne}
            alt="Imagem da conferência On Fire."
            style={{
              width: "175rem",
              height: "15rem",
              borderTopRightRadius: "0.75rem",
              borderBottomRightRadius: "0.75rem",
            }}
          />
        </div>

        <div className="max-w-5xl flex gap-5 bg-neutral-900 rounded-xl border-collapse shadow-custom-white">
          <Image
            src={ImgOnFireCardTwo}
            alt="Imagem da conferência On Fire."
            style={{
              width: "175rem",
              height: "15rem",
              borderTopLeftRadius: "0.75rem",
              borderBottomLeftRadius: "0.75rem",
            }}
          />

          <div className=" flex items-center justify-center p-4">
            <p className="font-semibold text-end font-mono">
              A{" "}
              <strong className="text-bold text-red-600">
                Conferência More Life OnFire 2024{" "}
              </strong>
              está chegando com o tema: “Chegará o tempo em que não haverá mais
              tempo”. e a vibe é trazer os movimentos do céu pra terra, agora!
              Esse é o momento de se conectar ao que Deus está fazendo e viver
              com intensidade total. Prepare-se para dias cheios de propósito,
              inspiração e muito fogo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
