"use client";
import { useState } from "react";
import scss from "./BestSellers.module.scss";
import Image from "next/image";
import bestSalesImg1 from "../../../../assets/bestimgf2.png";
import bestSalesImg2 from "../../../../assets/aboutImg1.png";
import bestSalesImg3 from "../../../../assets/bestimg3.png";
import bestSalesImg5 from "../../../../assets/bestimg5.png";
import bestSalesArrowRight from "../../../../assets/Frame 38.png";
import welcomeLogoLeft from "../../../../assets/main_menu/left.png";
import { useLanguageStore } from "@/src/stores/useLanguageStore";

const BestSellers = () => {
  const { t } = useLanguageStore();

  const images = [
    {
      src: bestSalesImg1,
      alt: "Chef preparing gourmet dish",

    },
    {
      src: bestSalesImg2,
      alt: "Chef garnishing plate",
    },
    {
      src: bestSalesImg3,
      alt: "Chef preparing gourmet dish",
    },
    {
      src: bestSalesImg1,
      alt: "Chef garnishing plate",
    },

    {
      src: bestSalesImg5,
      alt: "Chef garnishing plate",
    },
    {
      src: bestSalesImg1,
      alt: "Chef garnishing plate",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={scss.BestSellers}>
      <div className={scss.container}>
        <div className={scss.content}>
       <div className={scss.head}>
       <div className={scss.best}>
            <Image width={40} height={15} src={welcomeLogoLeft} alt="" />
            <span className={scss.label}>
              {t("Best Sellers", "Бестселлеры", "Best Sellers")}
            </span>
          </div>
          <h1 className={scss.title}>
            {t(
              "Сиз өзгөчө өзгөчөлүктү гана сактайсыз",
              "Вы оставляете только исключение",
              "You Only Reserve Exception"
            )}
          </h1>
          <p className={scss.description}>
            {t(
              "Ар бир жер үчүн өзүнчө меню түзүлөт. Cafesio'до эмне жаңылык бар экенин билип алыңыз жана Covent Garden учурунан ырахат алыңыз.",
              "Каждая локация имеет своё уникальное меню. Узнайте, что нового в вашем Cafesio, и найдите моменты Covent Garden.",
              "Each location has a menu that's curated just for them. See what's new at your Cafesio, and you'll find Cafesio Covent Garden moments."
            )}
          </p>
       </div>
        <div className={scss.imageGallery}>
          <div className={scss.sliderContainer}>
            <div
              className={scss.sliderTrack}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className={scss.imageWrapper}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={320}
                    height={320}
                    className={scss.image}
                  />
                </div>
              ))}
            </div>
            <button
              className={scss.nextButton}
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <Image
                src={bestSalesArrowRight}
                alt="Next slide"
                width={20}
                height={35}
              />
            </button>
          </div>
        </div>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;
