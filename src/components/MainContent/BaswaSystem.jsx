import React from "react";
import "scss/components/MainContent/BaswaSystem.scss";
import layerImg from "assets/en_baswa_dtg_layers_small_2-800x800.png";
const BaswaSystem = ({ mainRef }) => {
  return (
    <section ref={mainRef} className="baswa-system">
      <div className="left">
        <div className="title">
          <h2>
            {"Optimised "}
            <span className="title_highlightend">room </span>
            <br />
            <span className="title_highlightend">acoustics</span>
          </h2>
        </div>
        <div className="desc">
          <h3> Seamless. Versatile. Durable. Sustainable.</h3>
          <span>
            Suitable for all building types, BASWA is engineered for
            versatility, performance, appearance and long term durability.
            Design for acoustic comfort, without compromise.
          </span>
          <div>
            <span>BASWA Systems</span>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={layerImg} />
      </div>
    </section>
  );
};

export default BaswaSystem;
