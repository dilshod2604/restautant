"use client";
import React from "react";
import scss from "./About.module.scss";
import Image from "next/image";
import img1 from "../../../../assets/aboutImg1.png";
import img2 from "../../../../assets/aboutImage2.png";
import TextIcon from "../../../../assets/main_menu/left.png";
import { useLanguageStore } from "@/src/stores/useLanguageStore";

const About = () => {
  const { t } = useLanguageStore();

  return (
    <section id="about" className={scss.About}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div className={scss.titleContent}>
            <Image
              className={scss.titleContentImg}
              quality={100}
              src={TextIcon}
              alt="asd"
            />
            <h1 className={scss.TitleContentTitle}>
              {t("Биз жонундо", "О нас", "About Us")}
            </h1>{" "}
          </div>
          <div className={scss.InfoContent}>
            <h1 className={scss.InfoContentTitle}>
              {t(
                "Cafesio даамдарына саякат",
                "Путешествие сквозь вкусы Cafesio",
                "A Journey Through Cafesio Flavors"
              )}
            </h1>
            <h1 className={scss.InfoContentInfo}>
              {t(
                "Тамактардын жаңы даамдарын ачып, сырткы келбети менен кубаныңыз. Бул жерде сиз жылуу атмосфера, мыкты тейлөө жана ар бир конокко көңүл бурууну таба аласыз. Азыр столду брондоп, даамдуу ачылыштардын уникалдуу тажрыйбасынан ырахат алыңыз!",
                "Попробуйте блюда, которые откроют для вас новые вкусы и порадуют своим внешним видом. Здесь вас ждет уютная атмосфера, превосходный сервис и внимание к каждому гостю. Забронируйте столик прямо сейчас и насладитесь уникальным опытом открытия вкусов!",
                "Try dishes that will open up new tastes for you and delight your eyes with their appearance. Here you will find a cozy atmosphere, excellent service and attention to each guest. Book a table now and enjoy a unique experience of taste discovery!"
              )}
            </h1>
          </div>
          <div className={scss.ImgContent}>
            <Image
              quality={100}
              src={img1}
              className={scss.ImgContentImg}
              alt="img"
            />
            <Image
              quality={100}
              src={img2}
              className={scss.ImgContentImg}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
