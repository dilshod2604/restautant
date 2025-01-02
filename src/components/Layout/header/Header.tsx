"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import { links } from "@/src/constants/linkxs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

const Header: FC = () => {
  const [showMenu, setShowMenu] = useState(false); 
  const router = useRouter();

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <h1 onClick={() => router.push("/")}>Restaurant</h1>
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
                placeholder="search..."
              />
            </div>
            <select className={scss.select}>
              <option value="">EN</option>
              <option value="">RU</option>
              <option value="">KG</option>
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
