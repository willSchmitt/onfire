import { CheckCircle } from "lucide-react";
import Image from "next/image";
import ImageSlider from "./components/Carousel";

export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-fixed bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/bgPage.jpg')",
      }}
    >
      <div className="min-h-screen bg-gray-800 bg-opacity-80 text-gray-100 flex flex-col">
        <main className="flex-grow">
          <section id="home" className="min-h-screen flex">
            <Image
              src="/onfire-oficial.png"
              alt="Imagem da conferência On Fire."
              style={{
                width: "100%",
                height: "100%",
              }}
              width={1600}
              height={561}
              className="min-h-screen"
            />
          </section>

          <section
            id="home"
            className="min-h-screen flex items-center justify-center"
          >
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-5xl font-bold mb-6">O QUE É O ONFIRE?</h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                A Conferência OnFire é um evento cristão de avivamento
                espiritual, que busca promover momentos intensos de adoração,
                oração, e palestras voltadas à renovação da fé e ao
                desenvolvimento espiritual dos participantes. O foco principal é
                criar um ambiente onde as pessoas possam se conectar de forma
                mais profunda com sua espiritualidade, buscando um "avivamento"
                em suas vidas. O termo "OnFire" reflete a ideia de estar
                espiritualmente "em chamas", ou seja, cheio de fervor e paixão
                por Deus.
              </p>
            </div>
          </section>

          <section
            id="features"
            className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-80"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">
                🔥 VEJA AS ÚLTIMAS EDIÇÕES DA CONFERÊNCIA ONFIRE 🔥
              </h2>

              <ImageSlider />
            </div>
          </section>

          <section
            id="cta"
            className="min-h-screen flex items-center justify-center"
          >
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl font-bold mb-6">Programação</h1>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Join thousands of satisfied users and take your productivity to
                the next level.
              </p>
              <form className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto">
                {/* <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-gray-700 text-gray-100 border-gray-600 focus:border-gray-500"
                />
                <Button className="bg-gray-100 text-gray-800 hover:bg-gray-200 whitespace-nowrap">
                  Sign Up Free
                </Button> */}
              </form>
            </div>
          </section>

          <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-80"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
                Have questions or need support? Our team is here to help you
                succeed.
              </p>
              {/* <Button className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                Contact Us
              </Button> */}
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 bg-opacity-90 py-8">
          <div className="container mx-auto px-4 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
