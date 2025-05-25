import { useTranslation } from "react-i18next";

const Aerospace = () => {
  const { t } = useTranslation();

  return (
    <main className="px-6 py-10 max-w-7xl mx-auto text-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("aerospace.title")}</h1>
        <p className="text-lg text-gray-300">{t("aerospace.intro")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("aerospace.industry")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["kazcosmos", "ghalam", "rspc"].map((org) => (
            <div key={org} className="bg-white/5 p-5 rounded-lg border border-white/10 shadow text-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-white">{t(`aerospace.${org}.title`)}</h3>
              <p className="text-sm">{t(`aerospace.${org}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("aerospace.support")}</h2>
        <p className="text-gray-300">{t("aerospace.support_text")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("aerospace.prospects")}</h2>
        <p className="text-gray-300">{t("aerospace.prospects_text")}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">{t("aerospace.education")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["nu", "satbayev", "aues", "enu"].map((univ) => (
            <div key={univ} className="bg-white/5 border border-white/10 p-5 rounded-lg shadow-sm text-gray-200">
              <h3 className="text-lg font-bold mb-1 text-white">{t(`aerospace.edu.${univ}.name`)}</h3>
              <p className="text-sm">{t(`aerospace.edu.${univ}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Aerospace;
