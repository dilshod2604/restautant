import { FC } from "react";
import scss from "./Contacts.module.scss";

const Contacts: FC = () => {
 return (
  <section className={scss.Contacts} id="contacts">
   <div className="container">
    <div className={scss.content}>Contacts</div>
   </div>
  </section>
 );
};

export default Contacts;
