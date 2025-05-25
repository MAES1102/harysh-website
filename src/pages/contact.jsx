import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <main className="relative z-10 px-6 py-10 max-w-5xl mx-auto text-white">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{t("contact.title")}</h1>
        <p className="text-gray-300 text-lg">{t("contact.subtitle")}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Электронная почта</h2>
          <p className="text-sm text-gray-300">zhanyua.shakirova@gmail.com</p>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Instagram</h2>
          <a
            href="https://www.instagram.com/haryshkazakhstan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            @haryshkazakhstan
          </a>
        </div>

        <div className="bg-white/5 border border-white/10 p-6 rounded-xl text-center shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">WhatsApp</h2>
          <p className="text-sm text-gray-300">Напиши нам в WhatsApp для быстрого ответа</p>
          <a
            href="https://wa.me/77715852714"
            className="text-green-400 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть чат
          </a>
        </div>
      </section>

      <section className="text-center bg-white/5 p-10 rounded-xl shadow border border-white/10">
        <h2 className="text-2xl font-bold mb-4">{t("contact.cta_title")}</h2>
        <p className="text-gray-300 mb-6">{t("contact.cta_text")}</p>
        <a
          href="/join"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
        >
          {t("contact.cta_button")}
        </a>
      </section>
    </main>
  );
};

export default Contact;
