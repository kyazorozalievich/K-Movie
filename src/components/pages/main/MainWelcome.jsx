"use client"
import scss from "./MainWelcome.module.scss";

const MainWelcome = () => {
 return (
  <section className={scss.MainWelcome}>
   <div className="container">
    <div className={scss.content}>MainWelcome</div>
   </div>
  </section>
 );
};

export default MainWelcome;
