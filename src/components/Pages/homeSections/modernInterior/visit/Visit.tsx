import React from "react";
import scss from "./Visit.module.scss";
import Image from "next/image";
import left from "../../../../../assets/vizit/left.png";
import { HiArrowRight } from "react-icons/hi";
import { PiPhoneCallLight } from "react-icons/pi";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import map from "../../../../../assets/vizit/map.png";

const Visit = () => {
  return (
    <section className={scss.Visit}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.block_1}>
            <div className={scss.vizit}>
              <Image src={left} alt="img" width={51.26} height={14.98} />
              <h3>Visit Restaurant</h3>
            </div>
            <div className={scss.vizit_text}>
              <h1>Join Us for Happy Hours</h1>
              <h4>Your neighborhood</h4>
              <p className={scss.vizit_text_date_1}>
                225$.Lake Ave.Suite 1150 Pasadena,CA 911101
              </p>
              <h4>Opening hours:</h4>
              <p className={scss.vizit_text_date_2}>
                Mon-Thu: 10:00 am - 01:00 am
              </p>
              <p className={scss.vizit_text_date_3}>
                Fri-Sun: 10:00 am - 02:00 am
              </p>
            </div>
            <div className={scss.vizit_line}>
              <span className={scss.vizit_line_top}></span>
              <button>
                Purchase gift card <HiArrowRight />
              </button>
              <span className={scss.vizit_line_bottom}></span>
            </div>
          </div>
          <div className={scss.block_2}>
            <h1>contact Info</h1>
            <p>
              <PiPhoneCallLight />
              +771219900
            </p>
            <p>
              <MdOutlineMailOutline />
              motionweb312@gmail.com
            </p>
            <div className={scss.vizit_icons}>
              <FaTelegramPlane />
              <AiFillInstagram />
            </div>
            <div className={scss.map}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11692.943248611515!2d74.60490565!3d42.888971250000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1735901698190!5m2!1sru!2skg"
                height="220px"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Visit;
