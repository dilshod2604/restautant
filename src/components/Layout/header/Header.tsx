"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { links } from "@/src/constants/linkxs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";
import { useLanguageStore } from "@/src/stores/useLanguageStore";
import { li } from "framer-motion/client";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false);
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
              {links.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className={scss.searchContainer}>
              <IoSearchOutline className={scss.searchIcon} />
              <input
                className={scss.searchInput}
                type="text"
                placeholder={t("Издөө", "Поиск", "Search")}
              />
            </div>
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
          <div className={scss.burger} onClick={() => setShowMenu(!showMenu)}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
