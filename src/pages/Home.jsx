import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto text-white">
      {/* Intro */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("home.title")}</h1>
        <p className="text-lg text-gray-300">{t("home.subtitle")}</p>
      </section>

      {/* Mission Section */}
      <section className="mb-16 grid md:grid-cols-2 gap-10">
        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">{t("home.aerospace_heading")}</h2>
          <p className="text-gray-200">{t("home.aerospace_intro")}</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow border border-white/10">
          <h2 className="text-2xl font-semibold mb-2">{t("home.astro_heading")}</h2>
          <p className="text-gray-200">{t("home.astro_intro")}</p>
        </div>
      </section>

      {/* Features / Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">{t("home.why_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["experience", "growth", "community", "global"].map((key) => (
            <div key={key} className="bg-white/10 text-white p-6 rounded-lg shadow hover:shadow-xl transition border border-white/10">
              <h3 className="text-xl font-semibold mb-2">{t(`join.${key}`)}</h3>
              <p className="text-sm text-gray-300">{t(`join.${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-100/10 p-10 rounded-xl shadow-lg border border-blue-300/20">
        <h2 className="text-2xl font-bold mb-4">{t("home.cta_title")}</h2>
        <p className="mb-6 text-gray-300">{t("home.cta_text")}</p>
        <Link
          to="/join"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          {t("home.cta_button")}
        </Link>
      </section>
    </main>
  );
};

export default Home;
