import scss from "./Welcome.module.scss";
import left from "../../../../assets/main_menu/left.png";
import right from "../../../../assets/main_menu/right.png";
import Image from "next/image";
import { GrFormNextLink } from "react-icons/gr";
import { ImLocation2 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";

const Welcome = () => {
  return (
    <section className={scss.Welcome}>
      <div className={scss.content}>
        <div className={scss.delicious}>
          {" "}
          <Image src={left} alt="img" width={25} height={10} />
          <h3>Delicious</h3>
          <Image src={right} alt="img" width={25} height={10} />
        </div>

        <h1>Italian Cuisine</h1>
        <p>
          Classic steak & delicious with delightfully unexpenced twists. The
          Restaurant`s sunny decor was inspired by the diners
        </p>
        <div className={scss.btnBlock}>
          <div className={scss.line}></div>
          <button>
            RESERVE YOUR TABLE
            <span>
              <GrFormNextLink />
            </span>
          </button>
          <div className={scss.line}></div>
        </div>
      </div>
      <div className={scss.bottom_text}>
        <div className={scss.location_block}>
          <h5>Location</h5>
          <div className={scss.location_line}></div>
          <span>
            <ImLocation2 />
          </span>
          <p>Rua da moeda 1g,1200-275,Portugal</p>
        </div>
        <div className={scss.phone_block}>
          <h5>Hotline</h5>
          <div className={scss.location_line}></div>
          <span>
            <IoIosCall />
          </span>
          <p>+771219900</p>
        </div>
      </div>
      <div className={scss.bottom_line}></div>
      <div className={scss.right_line}></div>
    </section>
  );
};

export default Welcome;
