import styles from "../style";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Billing,
  Business,
  CTA,
  Footer,
  Navbar,
  Stats,
  Testimonials,
  Hero,
} from "../components";
import { UserContext } from "../UserContext";

const Landing = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Landing;
