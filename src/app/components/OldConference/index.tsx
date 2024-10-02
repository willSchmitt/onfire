import ImageSlider from "./components/Carousel";

export function OldConference() {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-4xl text-center font-mono font-bold relative">
        🔥 VEJA AS ÚLTIMAS EDIÇÕES DA CONFERÊNCIA ONFIRE 🔥
      </h1>

      <ImageSlider />
    </div>
  );
}
