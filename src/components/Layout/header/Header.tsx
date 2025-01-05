"use client";
import scss from "./Header.module.scss";
import { useLanguageStore } from "@/src/stores/useLanguageStore";
import { useBurgerStore } from "@/src/stores/useBurgerStore";
import BurgerMenu from "../../UI/burger_menu/BurgerMenu";
import { usePathname, useRouter } from "next/navigation";
import { Link as ReactScroll } from "react-scroll";
import Link from "next/link";
import Search from "../../UI/search/Search";

const Header = () => {
  const { setIsOpen, isOpen } = useBurgerStore();
  const router = useRouter();
  const { t, setLanguage, language } = useLanguageStore();
  const hrefs = [
    { name: t("Интерьер", "Интерьер", "Interior"), href: "interior" },
    { name: t("Биз жонундо", "О нас", "About Us"), href: "about" },
    { name: t("Меню", "Меню", "Menu"), href: "/menu" },
    { name: t("Контакты", "Контакты", "Contacts"), href: "contacts" },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value as "ky" | "ru" | "en";
    setLanguage(selectedLanguage);
  };
  const path = usePathname();
  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1 onClick={() => router.push("/")}>
            {" "}
            {t("Ресторан", "Ресторан", "Restaurant")}
          </h1>
          <div className={scss.menu}>
            <nav className={scss.navigation}>
              {hrefs.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={scss.nav_link}
                  >
                    {link.name}
                  </Link>
                ) : path === "/menu" ? (
                  <Link key={link.href} href="/" className={scss.nav_link}>
                    {link.name}
                  </Link>
                ) : (
                  <ReactScroll
                    key={link.href}
                    to={link.href}
                    className={scss.nav_link}
                    activeClass={path === "/" ? scss.active : ""}
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    {link.name}
                  </ReactScroll>
                )
              )}
            </nav>
            <Search />
            <select
              onChange={handleLanguageChange}
              value={language}
              className={scss.select}
            >
              <option value="en">EN</option>
              <option value="ru">RU</option>
              <option value="ky">KG</option>
            </select>
          </div>
          <div
            className={`${scss.burger} ${isOpen ? scss.active : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`${scss.short_line} ${isOpen ? scss.active : ""}`}
            />
            <span
              className={`${scss.short_line} ${isOpen ? scss.active : ""}`}
            />
            <span
              className={`${scss.long_line} ${isOpen ? scss.active : ""}`}
            />
            <span
              className={`${scss.long_line} ${isOpen ? scss.active : ""}`}
            />
          </div>
        </div>
      </div>
      <BurgerMenu />
    </section>
  );
};

export default Header;
