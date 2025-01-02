import { FC } from "react";
import scss from "./BestSellers.module.scss";

const BestSellers: FC = () => {
 return (
  <section className={scss.BestSellers}>
   <div className="container">
    <div className={scss.content}>BestSellers</div>
   </div>
  </section>
 );
};

export default BestSellers;
