import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
  const { i18n, t } = useTranslation();

  return (
    <header className="p-4 bg-gray-900 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">HARYSH</h1>
      <nav className="space-x-6 text-sm font-medium">
        <Link to="/">{t("nav.home")}</Link>
        <Link to="/aerospace">{t("nav.aerospace")}</Link>
        <Link to="/astronomy">{t("nav.astronomy")}</Link>
        <Link to="/join">{t("nav.join")}</Link>
        <Link to="/contact">{t("nav.contact")}</Link>
      </nav>
      <select
        className="bg-gray-800 text-white"
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="kz">KZ</option>
      </select>
    </header>
  );
};

export default Header;
