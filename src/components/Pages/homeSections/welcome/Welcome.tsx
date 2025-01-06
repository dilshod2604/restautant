"use client";
import scss from "./Welcome.module.scss";
import left from "../../../../assets/main_menu/left.png";
import right from "../../../../assets/main_menu/right.png";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { useLanguageStore } from "@/src/stores/useLanguageStore";
import { useBookingStore } from "@/src/stores/useBookingStore";
import BookingModal from "@/src/components/UI/booking_modal/BookingModal";

interface Text {
  name: string;
  descr: string;
}

interface Info {
  locationInfo: string;
  phone: string;
}

const Welcome = () => {
  const { t } = useLanguageStore();
  const { isOpen, setIsOpen } = useBookingStore();

  const text: Text = {
    name: t("Италья ашканасы", "Итальянская кухня", "Italian Cuisine"),
    descr: t(
      "Классикалык стейк жана күтүлбөгөн бурулуштар менен менен даамдуу. Ресторандын күндүзгү декору тамактануучулардан илхам алган.",
      "Классический стейк и вкусно с неожиданными поворотами. Солнечный декор ресторана был вдохновлён обедами.",
      "Classic steak & delicious with delightfully unexpected twists. The restaurant's sunny decor was inspired by diners."
    ),
  };

  const Info: Info = {
    locationInfo: t(
      "Rua da moeda 1g,1200-275,Португалия",
      "Rua da moeda 1g,1200-275,Португалия",
      "Rua da moeda 1g,1200-275,Portugal"
    ),
    phone: "+771219900",
  };

  return (
    <section className={scss.Welcome}>
      <div className={scss.content}>
        <div className={scss.delicious}>
          {" "}
          <Image src={left} alt="img" width={25} height={10} />
          <h3>{t("Даамдуу", "Вкусный", "Delicious")}</h3>
          <Image src={right} alt="img" width={25} height={10} />
        </div>

        <h1>{text.name}</h1>
        <p>{text.descr}</p>
        <div className={scss.btnBlock}>
          <div className={scss.line}></div>
          <button onClick={() => setIsOpen(true)}>
            {t("Буйрутма беруу", "Заказать столик", "Reserve Your Table")}
            <GrFormNextLink />
          </button>
          <div className={scss.line}></div>
        </div>
      </div>
      <div className={scss.bottom_text}>
        <div className={scss.location_block}>
          <h5>{t("Дарек", "Местоположение", "Location")}</h5>
          <div className={scss.location_line}></div>
          <span>
            <ImLocation2 />
          </span>
          <p className={scss.location_p}>{Info.locationInfo}</p>
        </div>
        <div className={scss.phone_block}>
          <h5>{t("Ысык линия", "Горячая линия", "Hotline")}</h5>
          <div className={scss.location_line}></div>
          <span>
            <IoIosCall />
          </span>
          <p>+771219900</p>
        </div>
      </div>
      <div className={scss.bottom_line}></div>
      <div className={scss.right_line}></div>
      {isOpen && <BookingModal />}
    </section>
  );
};

export default Welcome;
