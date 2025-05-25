import { useTranslation } from "react-i18next";

const Astronomy = () => {
  const { t } = useTranslation();

  return (
    <main className="relative z-10 px-6 py-10 max-w-7xl mx-auto text-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("astronomy.title")}</h1>
        <p className="text-lg text-gray-300">{t("astronomy.intro")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">{t("astronomy.observatories")}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["kamenskoe", "tian_shan", "assy_turgen"].map((obs) => (
            <div key={obs} className="bg-white/5 p-5 rounded-lg border border-white/10 shadow text-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-white">{t(`astronomy.${obs}.name`)}</h3>
              <p className="text-sm">{t(`astronomy.${obs}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("astronomy.research")}</h2>
        <p className="text-gray-300">{t("astronomy.research_text")}</p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">{t("astronomy.international")}</h2>
        <p className="text-gray-300">{t("astronomy.international_text")}</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6">{t("astronomy.education")}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {["kaznu", "sku", "karu"].map((uni) => (
            <div key={uni} className="bg-white/5 border border-white/10 p-5 rounded-lg shadow-sm text-gray-200">
              <h3 className="text-lg font-bold mb-1 text-white">{t(`astronomy.edu.${uni}.name`)}</h3>
              <p className="text-sm">{t(`astronomy.edu.${uni}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Astronomy;
