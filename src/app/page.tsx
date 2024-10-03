import Image from "next/image";
import ImageSlider from "./components/Carousel";
import { ProgrammingOnFire } from "./components/Programming";
import { AboutOnFire } from "./components/About";
// import { QuestionsOnFire } from "./components/Questions";

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
            <AboutOnFire />
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
            <ProgrammingOnFire />
          </section>

          {/* <section
            id="contact"
            className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-80"
          >
            <QuestionsOnFire />
          </section> */}
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
