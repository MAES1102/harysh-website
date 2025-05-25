import { useTranslation } from "react-i18next";

const Join = () => {
  const { t } = useTranslation();

  return (
    <main className="relative z-10 px-6 py-10 max-w-5xl mx-auto text-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("join.title")}</h1>
        <p className="text-gray-300 text-lg">{t("join.description")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("join.who_title")}</h2>
        <p className="text-gray-300">{t("join.who_text")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("join.activities_title")}</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>{t("join.activities.masterclasses")}</li>
          <li>{t("join.activities.education")}</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-center mb-10">{t("join.why_title")}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {["experience", "growth", "community", "global"].map((key) => (
            <div key={key} className="bg-white/5 p-6 rounded-lg border border-white/10 shadow text-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-white">{t(`join.${key}`)}</h3>
              <p className="text-sm">{t(`join.${key}_desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="text-center bg-white/5 p-10 rounded-xl shadow border border-white/10">
        <h2 className="text-2xl font-bold mb-4">{t("join.cta_title")}</h2>
        <p className="mb-6 text-gray-300">{t("join.cta_text")}</p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          {t("join.cta_button")}
        </a>
      </section>
    </main>
  );
};

export default Join;

