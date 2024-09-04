import React from "react";
import "@/scss/components/MainContent/Blog.scss";
import img01 from "@/assets/blog_01.jpeg";
import img02 from "@/assets/blog_02.jpeg";

export default function Blog() {
  return (
    <section className="blog">
      <div className="title">
        BASWA <span className="dark-beige-color">Blog</span>
      </div>
      <div className="content">
        <div>
          <div className="img-container">
            <img src={img01} alt="" />
          </div>
          <div className="text-container">
            <p className="date">02.04.2021</p>
            <p className="sub-title">New: BASWA BASIC</p>
            <span>
              Our new acoustic solution features a resilient build-up and time
              savings on site, meaning lower installation cost.
            </span>
            <a>Products</a>
          </div>
        </div>
        <div>
          <div className="img-container">
            <img src={img02} alt="" />
          </div>
          <div className="text-container">
            <p className="date">01.07.2021</p>
            <p className="sub-title"> BASWA Natural</p>
            <span>
              The sustainable, seamless acoustic solution made from natural
              fibres.
            </span>
            <a>All posts</a>
          </div>
        </div>
      </div>
    </section>
  );
}
