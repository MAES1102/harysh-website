import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import AerospaceSection from "./aerospace";
import AstronomySection from "./astronomy";


function HeroSection() {
  const { t } = useTranslation();

  return (
    <section
      className="relative h-[95vh] flex items-center justify-center text-center px-4 text-white"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-sm" />

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg">
          HARYSH
        </h1>
        <p className="mt-6 text-xl md:text-2xl font-medium text-gray-200 drop-shadow">
          {t("heroText")}
        </p>
        <Link
          to="/join"
          className="inline-block mt-8 bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold text-lg hover:bg-yellow-300 transition"
        >
          {t("join")}
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
